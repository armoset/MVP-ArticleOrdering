using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MVP_Article_Frontend.DbStructure;
using MVP_Article_Frontend.Model;
using MVP_Article_Frontend.Utilities;

namespace MVP_Article
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            //Hinzufuegen der automatisch generierten Api
            services.AddMvc()
                .AddMvcOptions(o => o.Conventions.Add(new GenericApiConvention()))
                .ConfigureApplicationPartManager(c =>
                    c.FeatureProviders.Add(new GenericControllerProvider<Artikel, ProcessContext>()));

            var inMem = Configuration.GetValue<bool>("InMemory");
            if (inMem)
            {
                services.AddDbContext<ProcessContext>(
                options => options.UseInMemoryDatabase(nameof(ProcessContext)));
            }
            if (!inMem)
            {
                services.AddDbContext<ProcessContext>(
                options => options.UseSqlServer("name=ConnectionStrings:DefaultConnection"));
            }

            services.AddSwaggerGen();
            services.AddControllersWithViews();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger Dokumentation fuer Armin");
                c.RoutePrefix = "doc";
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });

            var inMem = Configuration.GetValue<bool>("InMemory");
            // Sicherstellen dass die DB existiert
            using (var scope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                if (inMem)
                    return;
                var ctx = scope.ServiceProvider.GetRequiredService<ProcessContext>();
                ctx.Database.EnsureCreated();
                ctx.Database.Migrate();
            }
        }
    }
}
