using System;
using System.Linq;
using Telerik.Sitefinity.Configuration;
using Telerik.Sitefinity.Web.UI.Fields.Definitions;

namespace SitefinityWebApp.Application.Modules.CustomPageSelector
{
    public class PageSelectorFieldDefinition : FieldControlDefinition, IPageSelectorFieldDefinition
    {
        #region Constuctors
        /// <summary>
        /// Initializes a new instance of the <see cref="PageSelectorFieldDefinition" /> class.
        /// </summary>
        public PageSelectorFieldDefinition()
            : base()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PageSelectorFieldDefinition" /> class.
        /// </summary>
        /// <param name="configDefinition">The config definition.</param>
        public PageSelectorFieldDefinition(ConfigElement configDefinition)
            : base(configDefinition)
        {
        }
        #endregion
    }
}