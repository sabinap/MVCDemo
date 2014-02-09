using SitefinityWebApp.Application.Core;
using System;
using System.Linq;
using Telerik.Sitefinity.DynamicModules.Model;

namespace SitefinityWebApp.Mvc.Models
{
    public class DemoModel
    {
        /// <summary>
        /// Gets or sets the message.
        /// </summary>
        public string Message { get; set; }
        public string _linkURL { get; set; }
        public string _linkTitle { get; set; }
        
        public string LinkUrl
        {
            get {
                return _linkURL.Substring(0, _linkURL.IndexOf(";"));
            } 
            set; 
        }

        public string LinkTitle { get {
            return _linkURL.Substring(_linkTitle.IndexOf(">"));
        }
            set; 
        }


        public IQueryable<DynamicContent> Units
        {
            get { return DynamicModulesAPI.RetrieveCollectionOfUnits(); }
        }
    }
}