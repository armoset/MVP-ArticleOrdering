using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Utilities
{
    public class GenericControllerProvider<T, C> : IApplicationFeatureProvider<ControllerFeature>
    {
        public void PopulateFeature(IEnumerable<ApplicationPart> parts, ControllerFeature feature)
        {
            var currentNamespace = typeof(T).Namespace;
            var currentAssembly = typeof(T).Assembly;

            var candidates = currentAssembly.GetExportedTypes().Where(x => x.Namespace == currentNamespace && x.!IsAbstract);
            foreach (var candidate in candidates)
            {
                feature.Controllers.Add(
                    typeof(ArticleControllerBase<,>).MakeGenericType(candidate, typeof(C)).GetTypeInfo());
            }
        }
    }
}
