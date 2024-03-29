// Copyright (c) 2024, bhumika and contributors
// For license information, please see license.txt

frappe.ui.form.on("banking", {
    refresh(frm) {
    },
    before_save: function(frm) {
        frm.doc.full_name = frm.doc.first_name + ' '+ frm.doc.last_name;
    },
});