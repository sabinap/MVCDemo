<%@ Control %>
<%@ Register Assembly="Telerik.Sitefinity" Namespace="Telerik.Sitefinity.Web.UI" TagPrefix="sf" %>
<%@ Register Assembly="Telerik.Sitefinity" TagPrefix="designers" Namespace="Telerik.Sitefinity.Web.UI.ControlDesign" %>
<sf:ResourceLinks ID="resourcesLinks" runat="server" >
    <sf:ResourceFile JavaScriptLibrary="JQuery" />
    <sf:ResourceFile JavaScriptLibrary="JQueryUI" />
	<sf:ResourceFile Name="Telerik.Sitefinity.Resources.Themes.Default.Styles.jQuery.jquery.ui.core.css" Static="True"/>
	<sf:ResourceFile Name="Telerik.Sitefinity.Resources.Themes.Default.Styles.jQuery.jquery.ui.dialog.css" Static="True"/>
	<sf:ResourceFile Name="Telerik.Sitefinity.Resources.Themes.Default.Styles.jQuery.jquery.ui.theme.sitefinity.css" Static="True"/>
</sf:ResourceLinks>

<asp:Label ID="titleLabel" runat="server" CssClass="sfTxtLbl" />
<sf:SitefinityLabel id="descriptionLabel" runat="server" WrapperTagName="div" HideIfNoText="true" CssClass="sfDescription" />
<sf:SitefinityLabel id="exampleLabel" runat="server" WrapperTagName="div" HideIfNoText="true" CssClass="sfExample" />


<sf:ConditionalTemplateContainer ID="conditionalTemplate" runat="server">
    <Templates>
        <sf:ConditionalTemplate Left="DisplayMode" Operator="Equal" Right="Read" runat="server">
            <sf:SitefinityLabel ID="titleLabel_read" runat="server" WrapperTagName="div" HideIfNoText="false" CssClass="sfTxtLbl"></sf:SitefinityLabel>
            <sf:SitefinityLabel ID="selectedPageLabel_read" runat="server" WrapperTagName="span" HideIfNoText="false" CssClass="sfSelectedItem" Text="No page is selected"></sf:SitefinityLabel>
            <sf:SitefinityLabel ID="descriptionLabel_read" runat="server" WrapperTagName="p" HideIfNoText="false" CssClass="sfDescription"></sf:SitefinityLabel>
            <sf:SitefinityLabel ID="exampleLabel_read" runat="server" WrapperTagName="P" HideIfNoText="true" CssClass="sfExample" />
        </sf:ConditionalTemplate>
        <sf:ConditionalTemplate Left="DisplayMode" Operator="Equal" Right="Write" runat="server">
            <sf:SitefinityLabel ID="titleLabel_write" runat="server" CssClass="sfTxtLbl" />
            <asp:LinkButton ID="expandButton_write" runat="server" OnClientClick="return false;" CssClass="sfOptionalExpander" />
            <asp:Panel ID="expandableTarget_write" runat="server" CssClass="sfFieldWrp">
                <telerik:RadWindowManager ID="windowManager" runat="server" Skin="Sitefinity">
                    <Windows>
                        <telerik:RadWindow ID="pageSelectorDialog" Width="600" Height="500" NavigateUrl="~/Sitefinity/Dialog/PageSelectorFieldDialog" runat="server" ReloadOnShow="true" Modal="true" VisibleStatusbar="false" Behaviors="Close">
                        </telerik:RadWindow>
                    </Windows>
                </telerik:RadWindowManager>

                <sf:SitefinityLabel ID="selectedPageLabel_write" runat="server" WrapperTagName="span" HideIfNoText="false" CssClass="sfSelectedItem" Style="border-radius: 5px" Text="No page is selected"></sf:SitefinityLabel>

                <asp:HyperLink ID="selectLink" runat="server" NavigateUrl="javascript:void(0);" CssClass="sfLinkBtn sfChange">
                    <strong class="sfLinkBtnIn">Select...</strong>
                </asp:HyperLink>
                <sf:SitefinityLabel ID="descriptionLabel_write" runat="server" WrapperTagName="div" HideIfNoText="true" CssClass="sfDescription" />
                <sf:SitefinityLabel ID="exampleLabel_write" runat="server" WrapperTagName="div" HideIfNoText="true" CssClass="sfExample" />
            </asp:Panel>

            <div id="popupDialog" runat="server" style="display: none" clientidmode="static">
                <h2>
                    <asp:Literal ID="Literal1" runat="server" Text="<%$Resources:Labels, SelectPage %>" /></h2>
                <div class="sfLinkManagerWrp sfEditorCustomDialog sfContentViews">
                    <sf:GenericPageSelector
                        ID="GenericPageSelector1"
                        runat="server"
                        RootNodeID="F669D9A7-009D-4d83-DDAA-000000000002"
                        WebServiceUrl="~/Sitefinity/Services/Pages/PagesService.svc/"
                        ShowOnlySelectedAsGridOnLoad="true"
                        MarkItemsWithoutTranslation="true"
                        AllowMultipleSelection="false" />
                </div>
                <div class="sfClearer">
                    <asp:HyperLink ID="lnkDone" runat="server" NavigateUrl="javascript:void(0);" CssClass="sfLinkBtn sfSave">
					<span class="sfLinkBtnIn">Done</span>
                    </asp:HyperLink>
                    or 
				<asp:HyperLink ID="lnkCancel" runat="server" NavigateUrl="javascript:void(0);" Text="Cancel" CssClass="sfCancel"></asp:HyperLink>
                </div>
            </div>
        </sf:ConditionalTemplate>
    </Templates>
</sf:ConditionalTemplateContainer>

