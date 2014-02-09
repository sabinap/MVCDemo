using System;
using System.Configuration;
using System.Linq;
using Telerik.Sitefinity.Configuration;
using Telerik.Sitefinity.Web.UI;
using Telerik.Sitefinity.Web.UI.Fields.Config;

namespace SitefinityWebApp.Application.Modules.CustomPageSelector
{
    public class PageSelectorFieldDefinitionElement : FieldControlDefinitionElement, IPageSelectorFieldDefinition
    {
        #region Constructors
        /// <summary>
        /// Initializes a new instance of the <see cref="PageSelectorFieldDefinitionElement" /> class.
        /// </summary>
        /// <param name="parent">The parent.</param>
        public PageSelectorFieldDefinitionElement(ConfigElement parent)
            : base(parent)
        {
        }
        #endregion

        #region FieldControlDefinitionElement members
        public override DefinitionBase GetDefinition()
        {
            return new PageSelectorFieldDefinition(this);
        }
        #endregion

        #region IFieldDefinition members
        public override Type DefaultFieldType
        {
            get
            {
                return typeof(PageSelectorField);
            }
        }
        #endregion
    }
}
