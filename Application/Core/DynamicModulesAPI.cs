using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Telerik.Sitefinity.DynamicModules;
using Telerik.Sitefinity.DynamicModules.Model;
using Telerik.Sitefinity.Utilities.TypeConverters;

namespace SitefinityWebApp.Application.Core
{
    public class DynamicModulesAPI
    {
        public static string providerName = "OpenAccessProvider";
        static DynamicModuleManager dynamicModuleManager = DynamicModuleManager.GetManager(providerName);

        static Type unitType = TypeResolutionService.ResolveType("Telerik.Sitefinity.DynamicTypes.Model.DemoModules.DemoModule");

        #region ItemsById
        public static DynamicContent RetrieveUnitByID(Guid unitID)
        {
            DynamicContent unitItem = dynamicModuleManager.GetDataItem(unitType, unitID);
            return unitItem;
        }
        #endregion

        #region ItemCollections
        public static IQueryable<DynamicContent> RetrieveCollectionOfUnits()
        {
            var myCollection = dynamicModuleManager.GetDataItems(unitType).Where(i => i.ApprovalWorkflowState == "Published" && i.Status == Telerik.Sitefinity.GenericContent.Model.ContentLifecycleStatus.Master);// && i.Visible == true);
            return myCollection;
        }
        #endregion
    }
}