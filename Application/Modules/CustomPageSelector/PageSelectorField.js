Type.registerNamespace("Telerik.Sitefinity.Web.UI.Fields");
Type.registerNamespace("SitefinityWebApp.Application.Modules.CustomPageSelector");

SitefinityWebApp.Application.Modules.CustomPageSelector.PageSelectorField = function (element) {
    SitefinityWebApp.Application.Modules.CustomPageSelector.PageSelectorField.initializeBase(this, [element]);
    this._labelElement = null;
    this._textBoxElement = null;

    this._element = element;
    this._selectLink = null;
    this._selectLinkClickDelegate = null;
    this._doneLink = null;
    this._cancelLink = null;
    this._selectedPageLabel = null;
    this._onLoadDelegate = null;
    this._doneLinkClickDelegate = null;
    this._cancelLinkClickDelegate = null;

    this._popupDialog = null;
    this._pageSelector = null;
    this._window = null;

    this._culture = null;
    this._uiCulture = null;
}

SitefinityWebApp.Application.Modules.CustomPageSelector.PageSelectorField.prototype = {
    initialize: function () {
        /* Here you can attach to events or do other initialization */      
        SitefinityWebApp.Application.Modules.CustomPageSelector.PageSelectorField.callBaseMethod(this, "initialize");

        this._selectLinkClickDelegate = Function.createDelegate(this, this._selectLinkClicked);
        if (this._selectLink) {
            $addHandler(this._selectLink, "click", this._selectLinkClickDelegate);
        }

        this._onLoadDelegate = Function.createDelegate(this, this._onLoad);
        Sys.Application.add_load(this._onLoadDelegate);

        this._window = jQuery(this.get_popupDialog()).dialog({
            autoOpen: false,
            modal: true,
            width: 360,
            height: "auto",
            closeOnEscape: true,
            resizable: false,
            draggable: false,
            zIndex: 5000,
            dialogClass: "sfSelectorDialog"
        });

        this._doneLinkClickDelegate = Function.createDelegate(this, this._doneLinkClicked);
        if (this._doneLink) {
            $addHandler(this._doneLink, "click", this._doneLinkClickDelegate);
        }

        this._cancelLinkClickDelegate = Function.createDelegate(this, this._cancelLinkClicked);
        if (this._cancelLink) {
            $addHandler(this._cancelLink, "click", this._cancelLinkClickDelegate);
        }
    },

    dispose: function () {
        /*  this is the place to unbind/dispose the event handlers created in the initialize method */   
        SitefinityWebApp.Application.Modules.CustomPageSelector.PageSelectorField.callBaseMethod(this, "dispose");

        if (this._selectLink) {
            $removeHandler(this._selectLink, "click", this._selectLinkClickDelegate);
        }

        if (this._selectLinkClickDelegate) {
            delete this._selectLinkClickDelegate;
        }

        Sys.Application.remove_load(this._onLoadDelegate);
        if (this._onLoadDelegate) {
            delete this._onLoadDelegate;
        }

        $removeHandler(this._doneLink, "click", this._doneLinkClickDelegate);
        $removeHandler(this._cancelLink, "click", this._cancelLinkClickDelegate);

        if (this._doneLinkClickDelegate) {
            delete this._doneLinkClickDelegate;
        }

        if (this._cancelLinkClickDelegate) {
            delete this._cancelLinkClickDelegate;
        }
    },

    /* --------------------------------- public methods ---------------------------------- */

    // Sets the value of the page selector field control.
    set_value: function (value) {
        this._value = value;

        // Extract the Titles path
        if (value) {
            var splitArr = value.split(";");
            jQuery(this._selectedPageLabel).html(splitArr[1]);
        }
    },

    /* --------------------------------- event handlers ---------------------------------- */

    _onLoad: function (sender, args) {
        this._pageSelector.set_uiCulture(this.get_uiCulture());
        this._pageSelector.set_culture(this.get_culture());
    },

    _selectLinkClicked: function (sender, args) {
        this._window.dialog("open");
    },

    _doneLinkClicked: function (sender, args) {
        var selectedValue = this.get_pageSelector().get_selectedItem();

        if (!selectedValue || selectedValue === "") {
            alert("No page selected.");
        } else {
            jQuery(this._selectedPageLabel).html(selectedValue.TitlesPath);
            this._value = selectedValue.FullUrl + ";" + selectedValue.TitlesPath;
            this._window.dialog("close");
        }
    },

    _cancelLinkClicked: function (sender, args) {
        this._window.dialog("close");
    },

    /* --------------------------------- private methods --------------------------------- */

    /* --------------------------------- properties -------------------------------------- */
    
    get_selectLink: function () {
        return this._selectLink;
    },

    set_selectLink: function (value) {
        this._selectLink = value;
    },

    get_selectedPageLabel: function () {
        return this._selectedPageLabel;
    },

    set_selectedPageLabel: function (value) {
        this._selectedPageLabel = value;
    },

    get_popupDialog: function () {
        return this._popupDialog;
    },

    set_popupDialog: function (value) {
        this._popupDialog = value;
    },

    get_doneLink: function () {
        return this._doneLink;
    },

    set_doneLink: function (value) {
        this._doneLink = value;
    },

    get_cancelLink: function () {
        return this._cancelLink;
    },

    set_cancelLink: function (value) {
        this._cancelLink = value;
    },

    get_pageSelector: function () {
        this._pageSelector.set_uiCulture(this.get_uiCulture());
        this._pageSelector.set_culture(this.get_culture());
        return this._pageSelector;
    },

    set_pageSelector: function (value) {
        this._pageSelector = value;
    },

    get_culture: function () {
        return this._culture;
    },

    set_culture: function (culture) {
        this._culture = culture;
    },

    get_uiCulture: function () {
        return this._uiCulture;
    },

    set_uiCulture: function (culture) {
        this._uiCulture = culture;
    }
};

SitefinityWebApp.Application.Modules.CustomPageSelector.PageSelectorField.registerClass("SitefinityWebApp.Application.Modules.CustomPageSelector.PageSelectorField", Telerik.Sitefinity.Web.UI.Fields.FieldControl);