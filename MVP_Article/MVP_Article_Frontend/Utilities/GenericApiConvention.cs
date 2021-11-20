using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Utilities
{
    public class GenericApiConvention : IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            var controllerType = controller.ControllerType;
            if (!controllerType.IsGenericType || controllerType.GetGenericTypeDefinition() != typeof(ArticleControllerBase<,>))
                return;
            var targetType = controllerType.GenericTypeArguments[0];
            controller.ControllerName = $"{targetType.Name}Controller";
            controller.RouteValues["Controller"] = targetType.Name;
        }
    }
}
