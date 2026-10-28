// Declared first: checkSession() runs while this file is still being evaluated and can load data
// (apiFetchAll reads the cache synchronously) before later top-level lines have executed.
var LIST_CACHE_TTL = 30000, listCache = {};

var I18N = {
 en: {
  "loading_text": "Loading...",
  "auth_title": "Admin Dashboard",
  "auth_email_label": "Email",
  "auth_password_label": "Password",
  "auth_email_placeholder": "admin@handycat.com",
  "auth_login_btn": "Login",
  "auth_signing_in": "Signing in...",
  "auth_err_missing": "Please enter email and password",
  "auth_err_wrong": "Incorrect email or password.",
  "auth_err_failed": "Sign in failed. Please try again.",
  "auth_err_not_admin": "This account has no admin access.",
  "mfa_enroll_hint": "Set up two-step sign-in: scan this QR code with an authenticator app (Google Authenticator, 1Password…), then enter the 6-digit code.",
  "mfa_code_hint": "Enter the 6-digit code from your authenticator app.",
  "mfa_verify_btn": "Verify",
  "mfa_err_code": "Wrong code. Please try again.",
  "auth_err_connection": "Connection error. Please try again.",
  "sb_search": "Search",
  "nav_cards": "Cards",
  "nav_companies": "Companies",
  "nav_handymen": "Handymen",
  "nav_notifications": "Notifications",
  "nav_archive": "Archive",
  "sb_signout": "Sign out",
  "companies_title": "Companies",
  "companies_sub": "Manage client companies",
  "btn_add_company": "Add company",
  "ph_search": "Search",
  "filter_all_cities": "All cities",
  "title_grid_view": "Grid view",
  "title_list_view": "List view",
  "empty_no_companies": "No companies match your filters.",
  "status_pending": "Pending",
  "btn_approve": "Approve",
  "btn_reject": "Reject",
  "title_view_details": "View details",
  "badge_new": "New",
  "badge_blocked": "Blocked",
  "title_block_company": "Block company",
  "title_unblock_company": "Unblock company",
  "confirm_block_company": "Block this company? They will lose access to their dashboard until unblocked.",
  "stat_cards": "Cards",
  "status_active": "Active",
  "status_available": "Available",
  "btn_add_cards": "Add Cards",
  "tab_nfc_cards": "NFC Cards",
  "tab_handyman": "Handyman",
  "tab_orders": "Orders",
  "tab_clients": "Clients",
  "pill_all": "All",
  "pill_available": "Available",
  "pill_with_handyman": "With Handyman",
  "pill_activated": "Activated",
  "pill_deactivated": "Deactivated",
  "ph_search_print_token": "Search by Print ID or token...",
  "btn_delete_selected": "Delete Selected",
  "btn_deactivate_selected": "Deactivate Selected",
  "btn_clear": "Clear",
  "th_print_id": "Print ID",
  "th_token": "Token",
  "th_status": "Status",
  "th_handyman": "Handyman",
  "th_client": "Client",
  "th_created": "Created",
  "th_name": "Name",
  "th_phone": "Phone",
  "th_skills": "Skills",
  "th_card_token": "Card Token",
  "th_date": "Date",
  "th_category": "Category",
  "th_price": "Price",
  "th_email": "Email",
  "th_orders": "Orders",
  "th_company": "Company",
  "th_rating": "Rating",
  "th_jobs": "Jobs",
  "th_address": "Address",
  "th_registered": "Registered",
  "th_order": "Order",
  "th_cards": "Cards",
  "th_notes": "Notes",
  "th_contact": "Contact",
  "th_type": "Type",
  "th_region": "Region",
  "th_url": "URL",
  "ph_search_handymen": "Search handymen...",
  "btn_add_handyman": "Add Handyman",
  "title_edit_company": "Edit company",
  "title_edit": "Edit",
  "title_back": "Back",
  "handymen_all_title": "All Handymen",
  "handymen_all_sub": "Full list of service professionals",
  "ph_search_name_phone": "Search by name or phone...",
  "empty_no_handymen_found": "No handymen found",
  "empty_no_handymen_yet": "No handymen yet. Add the first one!",
  "section_information": "Information",
  "section_job_history": "Job History",
  "stat_reviews": "Reviews",
  "stat_jobs_done": "Jobs Done",
  "stat_years_exp": "Years Exp.",
  "info_skills": "Skills",
  "info_card_token": "Card Token",
  "info_status": "Status",
  "info_added": "Added",
  "empty_no_jobs": "No jobs yet",
  "clients_title": "Clients",
  "clients_sub": "All registered clients",
  "empty_no_clients": "No clients yet",
  "section_client_information": "Client Information",
  "section_order_history": "Order History",
  "empty_no_orders": "No orders yet",
  "info_physical_card_id": "Physical card ID",
  "section_handyman": "Handyman",
  "section_client": "Client",
  "empty_no_handyman_assigned": "No handyman assigned",
  "empty_card_not_activated": "Card not activated yet",
  "order_history_count": "Order History ({count})",
  "label_view": "View",
  "card_not_found": "Card not found",
  "not_found": "Not found",
  "section_details": "Details",
  "section_update_status": "Update Status",
  "ph_set_price": "Set price ($)",
  "btn_save_price": "Save Price",
  "info_company": "Company",
  "info_price": "Price",
  "info_created": "Created",
  "info_completed": "Completed",
  "review_title": "Client Review",
  "no_written_review": "No written review",
  "open_request_label": "Open request",
  "order_not_found": "Order not found",
  "pool_title": "Cards",
  "pool_sub": "Order, track manufacturing, and assign NFC cards to companies",
  "btn_generate_cards": "Generate Cards",
  "btn_export_csv": "Export CSV",
  "gen_progress_generating": "Generating...",
  "gen_progress_done": "✓ Done!",
  "tab_all_cards": "All Cards",
  "tab_companies_cards": "Companies",
  "label_start_from_pid": "Start from Print ID",
  "preview_will_assign": "Will assign {count} cards: {range}",
  "warn_only_n_from_start": "Only {count} cards in stock from #{start}",
  "warn_none_from_start": "No cards in stock from #{start}",
  "warn_range_gaps": "Range has gaps — skips {skips} (not in stock)",
  "label_ordered_count": "ordered",
  "ph_search_company": "Search company...",
  "label_requested_cards": "Requested",
  "label_issued_cards": "Issued",
  "btn_open_company": "Open company",
  "note_req_fallback_cards": "* This request pre-dates per-request tracking — showing all cards of the company.",
  "toast_request_not_found": "Request not found",
  "tab_requests": "Requests",
  "all_cards_title": "All Cards",
  "all_cards_sub": "Search and manage cards across all companies",
  "ph_print_or_token": "Print ID or token...",
  "filter_all_companies": "All companies",
  "filter_all_statuses": "All statuses",
  "status_assigned": "Assigned",
  "status_activated": "Activated",
  "status_deactivated": "Deactivated",
  "section_card_orders": "Card orders",
  "section_requests": "Requests",
  "stat_total_generated": "Total generated",
  "stat_in_stock": "In stock",
  "stat_assigned": "Assigned",
  "stat_total": "Total",
  "stat_total_cards": "Total Cards",
  "stat_with_handymen": "With Handymen",
  "stat_activated_by_client": "Activated by client",
  "stat_activated_by_clients": "Activated by Clients",
  "stat_bonus_leads_left": "Bonus Leads Left",
  "stat_total_cards_short": "Total cards",
  "empty_no_orders_click_generate": "No orders yet. Click Generate Cards to create the first one.",
  "badge_stock": "Stock",
  "ph_search_token_printid": "Search by token or print ID...",
  "filter_all_companies": "All companies",
  "ph_print_id_from": "Print ID from",
  "ph_print_id_to": "to",
  "label_showing_n_of_m": "Showing {shown} of {total}",
  "empty_no_cards_found": "No cards found",
  "empty_no_cards_match_filter": "No cards match this filter",
  "status_ordered": "Ordered",
  "status_manufactured": "Manufactured",
  "status_delivered": "Delivered",
  "title_delete_order": "Delete order",
  "title_refresh": "Refresh",
  "modal_generate_title": "Generate NFC Cards",
  "modal_generate_sub": "System will create tokens and URLs. Export CSV to send to manufacturer for programming.",
  "label_number_cards_generate": "Number of cards to generate",
  "ph_eg_100": "e.g. 100",
  "btn_cancel": "Cancel",
  "btn_generate": "Generate",
  "modal_assign_title": "Assign Cards to Company",
  "modal_assign_sub_default": "Select how many cards to assign from the pool",
  "label_available_stock": "Available in stock",
  "label_requested_by_company": "Requested by company",
  "label_cards_to_assign": "Cards to assign",
  "btn_assign_cards": "Assign Cards",
  "modal_assign_stock_title": "Assign Cards from Stock",
  "modal_assign_stock_checking": "Checking available stock...",
  "label_number_cards_assign": "Number of Cards to Assign",
  "btn_assign": "Assign",
  "gs_placeholder": "Search companies, handymen, clients, orders, cards...",
  "gs_start_typing": "Start typing to search across companies, handymen, clients, orders and cards.",
  "gs_loading": "Loading...",
  "gs_no_results": "No results for \"{q}\"",
  "gs_section_companies": "Companies",
  "gs_section_handymen": "Handymen",
  "gs_section_clients": "Clients",
  "gs_section_orders": "Orders",
  "gs_section_cards": "Cards",
  "gs_order_fallback": "Order",
  "gs_in_stock": "In stock",
  "confirm_action_title": "Confirm Action",
  "btn_confirm": "Confirm",
  "applications_title": "Company Applications",
  "applications_sub": "Review and approve new company registrations",
  "pill_pending": "Pending",
  "pill_approved": "Approved",
  "pill_rejected": "Rejected",
  "pill_needs_revision": "Needs Revision",
  "empty_no_applications": "No applications found",
  "section_contact_information": "Contact Information",
  "info_contact_person": "Contact Person",
  "info_region": "Region",
  "info_address": "Address",
  "section_business_details": "Business Details",
  "info_type": "Type",
  "info_team_size": "Team Size",
  "info_years_in_business": "Years in Business",
  "info_license_number": "License #",
  "info_insurance": "Insurance",
  "info_cards_requested": "NFC Cards Requested",
  "info_services": "Services",
  "info_website": "Website",
  "info_notes": "Notes",
  "section_decision": "Decision",
  "label_message_to_company": "Message to company",
  "label_included_in_email": "(included in email)",
  "ph_appmsg": "Optional: explain your decision, what needs to be fixed, or welcome them to HandyCat...",
  "btn_approve_send": "Approve & Send Access",
  "label_bonus_leads_grant": "Bonus leads to grant",
  "hint_bonus_leads_grant": "Free lead requests this company can use before paying per card",
  "decision_already_made": "A decision has already been made for this application.",
  "btn_approving_progress": "Approving...",
  "btn_processing_progress": "Processing...",
  "btn_needs_revision": "Needs Revision",
  "app_id_label": "App ID: {id}",
  "orders_title": "Orders",
  "orders_sub": "All service orders",
  "pill_new": "New",
  "pill_in_progress": "In Progress",
  "pill_completed": "Completed",
  "pill_cancelled": "Cancelled",
  "empty_no_orders_found": "No orders found",
  "archive_title": "Archive",
  "archive_sub": "Deleted companies — stored for 30 days. Restore anytime.",
  "btn_upload_backup": "Upload JSON Backup",
  "archive_loading": "Loading archive...",
  "archive_empty": "Archive is empty. Deleted companies will appear here for 30 days.",
  "deleted_label": "Deleted {date}",
  "expired_label": "Expired",
  "days_left_label": "{days} days left",
  "btn_download": "Download",
  "btn_restore": "Restore",
  "expired_cannot_restore": "Expired — cannot restore",
  "label_company_data": "Company data",
  "label_cards_count": "{count} cards",
  "label_handymen_count": "{count} handymen",
  "badge_cards_deleted": "Cards were deleted",
  "badge_cards_preserved": "Cards preserved",
  "notifications_title": "Notifications",
  "notifications_sub": "Recent activity across your system",
  "notif_all_caught_up": "No notifications right now — you're all caught up.",
  "notif_new_application": "New company application — {name}",
  "notif_new_card_request": "New card request — {name}",
  "notif_new_company_joined": "New company joined — {name}",
  "notif_low_stock": "Low stock — only {count} card(s) available",
  "notif_order_more": "Order more from the Cards page",
  "notif_cards_requested_suffix": "{count} cards requested",
  "unknown_label": "Unknown",
  "drawer_new_company_title": "New Company",
  "drawer_edit_company_title": "Edit Company",
  "drawer_fill_details": "Fill in company details",
  "label_company_name": "Company Name *",
  "ph_company_name": "FixPro Services",
  "label_local_city": "Local / City",
  "ph_local_city": "New York, NY",
  "label_email_req": "Email *",
  "ph_email_company": "info@sitename.com",
  "label_phone": "Phone",
  "ph_phone": "+1 (555) 000-0000",
  "label_description": "Description",
  "ph_description": "Brief description of the company...",
  "label_bonus_leads": "Bonus Leads (free cards remaining)",
  "ph_zero": "0",
  "bonus_leads_note": "Free cards this company can assign before needing a paid order. Auto-granted on approval (2 per 10 requested) — adjust anytime.",
  "btn_delete": "Delete",
  "btn_deactivate": "Deactivate",
  "btn_activate": "Activate",
  "btn_save": "Save",
  "drawer_new_handyman_title": "New Handyman",
  "drawer_edit_handyman_title": "Edit Handyman",
  "drawer_enter_professional_details": "Enter professional's details",
  "label_full_name": "Full Name *",
  "ph_full_name": "John Smith",
  "label_phone_req": "Phone *",
  "label_email_req_hm": "Email *",
  "ph_email_hm": "john@email.com",
  "label_years_experience": "Years of Experience",
  "ph_years": "5",
  "label_skills_comma": "Skills (comma separated)",
  "ph_skills": "Plumbing, Electrical, Painting",
  "label_assign_available_card": "Assign Available Card",
  "option_no_card_assigned": "No card assigned",
  "toast_copied": "Copied!",
  "toast_company_unblocked": "✓ Company unblocked",
  "toast_company_blocked": "✓ Company blocked",
  "toast_enter_company_name": "Please enter a company name",
  "toast_company_updated": "Company updated!",
  "toast_company_created": "Company created!",
  "toast_error_saving_company": "Error saving company",
  "toast_company_activated": "✓ Company activated",
  "toast_company_deactivated": "✓ Company deactivated",
  "toast_archived_deleted": "✓ \"{name}\" archived & deleted. Restore from 🗄️ Archive.",
  "toast_error_deleting_company": "Error deleting company — please try again.",
  "toast_handyman_deleted_check": "✓ Handyman deleted",
  "toast_error_deleting": "Error deleting",
  "toast_handyman_deleted": "Handyman deleted",
  "toast_copied_colon": "✓ Copied: {value}",
  "toast_copy_failed": "Copy failed",
  "toast_deleted_of_cards": "Deleted {deleted} of {total} cards",
  "toast_deactivated_cards": "Deactivated {count} cards",
  "toast_no_available_cards_export": "No available cards to export",
  "toast_csv_downloaded_cards": "CSV downloaded ({count} cards)",
  "toast_card_deactivated": "Card deactivated",
  "toast_card_deleted": "Card {pid} deleted",
  "toast_error_deleting_card": "Error deleting card",
  "toast_enter_name": "Please enter a name",
  "toast_handyman_updated": "Handyman updated!",
  "toast_handyman_added": "Handyman added!",
  "toast_error_saving_handyman": "Error saving handyman",
  "toast_error": "Error",
  "toast_deleted_handymen": "Deleted {count} handymen",
  "toast_deactivated_handymen": "Deactivated {count} handymen",
  "toast_handyman_not_found": "Handyman not found",
  "toast_could_not_check_stock": "Could not check stock — try again",
  "toast_enter_number_of_cards": "Enter a number of cards",
  "toast_checking_stock": "Checking stock...",
  "toast_only_x_in_stock_order_more": "Only {count} cards in stock. Order more from the Cards page.",
  "toast_assigned_from_stock": "✓ Assigned {count} card(s) from stock",
  "toast_free_leads_suffix": " ({count} free lead(s){paid})",
  "toast_paid_suffix": ", {count} standard",
  "toast_no_stock_request_recorded": "No cards in stock. Recorded a request for {count} — the company will see it as pending until you generate more cards.",
  "toast_shortfall_suffix": "— {count} more requested (out of stock)",
  "note_auto_shortfall": "Auto-created: not enough stock to fully assign an admin card request.",
  "note_initial_cards_from_signup": "Initial cards from approved company application.",
  "toast_processing_request": "Processing...",
  "btn_add_leads": "Add leads",
  "prompt_add_leads_count": "How many leads to add? (use a negative number to remove)",
  "toast_invalid_number": "Please enter a valid non-zero number",
  "toast_leads_updated": "Bonus leads updated — now {count}",
  "toast_cleaning": "Cleaning...",
  "toast_deleted_cards_handymen": "✓ Deleted {cards} cards and {handymen} handymen",
  "toast_deleted_clients": "Deleted {count} clients",
  "toast_status_updated_to": "Status updated to: {status}",
  "toast_error_updating_status": "Error updating status",
  "toast_enter_price": "Enter a price",
  "toast_price_saved": "Price saved: ${price}",
  "toast_error_saving_price": "Error saving price",
  "toast_rules_missing_batches": "⚠️ Add 'nfc_batches' to your Firestore rules to enable Card Orders (same as other collections: allow read, write: if true;)",
  "toast_could_not_update_status": "Could not update status",
  "toast_status_updated": "Status updated",
  "toast_order_deleted": "✓ Order deleted",
  "toast_error_deleting_order": "Error deleting order",
  "toast_no_cards_in_order": "No cards in this order.",
  "toast_enter_number_1_1000": "Enter a number between 1 and 1000",
  "toast_could_not_create_order": "⚠️ Could not create the order. Add 'nfc_batches' to your Firestore rules (allow read, write: if true;) and try again.",
  "toast_order_generated": "✓ Order #{num}: {count} cards generated! Export CSV to send to manufacturer.",
  "toast_no_stock_to_export": "No stock cards to export. Generate cards first.",
  "toast_csv_exported": "✓ CSV exported — {count} cards",
  "toast_assigning_to": "Assigning to: {name}",
  "toast_no_stock_import_csv": "⚠️ No cards in stock. Import a CSV first.",
  "toast_enter_valid_number": "Enter a valid number",
  "toast_only_x_in_stock_adjust": "Only {count} cards in stock. Adjust count.",
  "toast_cards_assigned_to_company": "✓ {count} cards assigned to company!",
  "toast_error_colon": "Error: {msg}",
  "toast_no_company_id": "No company ID found on this request",
  "toast_all_cards_already_created": "All {count} cards already created ✓",
  "toast_resuming": "Resuming: {done} done, creating {remaining} more...",
  "confirm_generate_cards": "Generate {count} cards for this company?",
  "toast_generating_cards": "Generating {count} cards...",
  "toast_cards_generated_notified": "✓ {count} cards generated! Company notified.",
  "toast_loading_cards": "Loading cards...",
  "toast_no_cards_found_request": "No cards found for this request — try the company's NFC Cards tab instead",
  "toast_csv_downloaded_dash": "CSV downloaded — {count} cards",
  "confirm_reject_card_request": "Reject this card request?",
  "toast_request_rejected": "Request rejected",
  "confirm_reject_application": "Reject this application?",
  "confirm_approve_application": "Approve this application? The company is created and a sign-in link is e-mailed.",
  "toast_approved_email_sent": "✓ Approved! Email sent to {email}",
  "toast_email_sent_revision": "Email sent — needs revision",
  "toast_email_sent_rejected": "Email sent — application rejected",
  "toast_status_updated_email_failed": "Status updated but email may have failed",
  "toast_archive_item_not_found": "Archive item not found",
  "toast_backup_downloaded": "Backup downloaded",
  "toast_invalid_json": "Invalid JSON file",
  "toast_invalid_backup_no_id": "Invalid backup — no company ID found",
  "confirm_restore_cards": "Restore {count} NFC cards?",
  "confirm_restore_handymen": "Restore {count} handymen?",
  "confirm_restore_from_file": "Restore \"{name}\" from file?",
  "restore_will_be_recreated": "Company{cards}{handymen} will be recreated.",
  "restore_this_will_recreate": "This will re-create the company{cards}{handymen}.",
  "toast_restoring_company": "Restoring company...",
  "toast_restoring_cards": "Restoring cards ({done}/{total})...",
  "toast_restoring_handymen": "Restoring handymen ({done}/{total})...",
  "toast_restored_from_file": "✓ \"{name}\" restored from backup file!",
  "confirm_restore_from_archive": "Restore \"{name}\"?",
  "toast_could_not_remove_archive": "⚠️ Could not remove archive entry (check Firestore rules allow delete on archive)",
  "toast_restore_partial": "⚠️ \"{name}\": {count} record(s) could not be restored. The archive entry was kept, try again.",
  "toast_restored_successfully": "✓ \"{name}\" restored successfully!",
  "confirm_delete_company": "Delete \"{name}\"?",
  "confirm_delete_company_sub": "{details}\n\nThe company will be archived for 30 days — you can restore it anytime.",
  "confirm_delete_all_cards": "Also delete all {count} NFC cards?",
  "confirm_delete_all_handymen": "Also delete all {count} handymen?",
  "confirm_archiving": "Archiving...",
  "confirm_deleting": "Deleting...",
  "confirm_archive_save_failed": "⚠️ Archive save failed!\n\nYou need to add 'archive' to Firestore rules:\n\nmatch /archive/{id} {\n  allow read, write: if true;\n}\n\nContinue deleting anyway? (file backup will still download)",
  "confirm_delete_handyman_title": "Delete Handyman",
  "confirm_cannot_be_undone": "This action cannot be undone.",
  "confirm_delete_this_handyman": "Delete this handyman?",
  "confirm_delete_n_cards": "Delete {count} cards?",
  "confirm_cannot_undone_short": "This cannot be undone.",
  "confirm_cards_active_warning": "\n⚠️ {count} card(s) are active — clients will lose their profile.",
  "confirm_deleting_progress": "Deleting {done}/{total}...",
  "confirm_delete_card": "Delete card {pid}?",
  "confirm_card_active_warning": "\n\n⚠️ This card is active — a client registered with it. Their profile link will break.",
  "confirm_card_assigned_warning": "\n\n⚠️ This card is assigned to a handyman.",
  "confirm_delete_handyman_q": "Delete handyman?",
  "confirm_delete_n_handymen": "Delete {count} handymen?",
  "confirm_delete_n_clients": "Delete {count} clients?",
  "confirm_clients_profiles_removed": "Their profiles and card links will be removed.",
  "confirm_delete_all_test_data": "⚠️ DELETE ALL cards and handymen for \"{name}\"?\n\nThis is for testing only and cannot be undone.",
  "confirm_absolutely_sure": "Are you absolutely sure? This will delete ALL {count} cards and handymen.",
  "confirm_delete_order_title": "Delete {title}?",
  "confirm_delete_order_sub": "This removes the order from your Card Orders list. Cards already generated in this order are NOT deleted and will stay wherever they currently are (in stock or assigned).",
  "email_approved_subject": "🎉 Your HandyCat application has been approved — {company}",
  "email_greeting": "Hi {name},",
  "email_approved_body1": "Great news — your application for <strong>{company}</strong> has been approved!",
  "email_approved_body2": "We're excited to have you on board. Your <strong>{count} NFC cards</strong> are being prepared.",
  "email_note_from_team": "Note from our team:",
  "email_feedback_from_team": "Feedback from our team:",
  "email_reason": "Reason:",
  "email_access_dashboard": "Access your company dashboard using the link below:",
  "email_open_dashboard": "Open Company Dashboard →",
  "email_magic_link_expiry": "This magic link will sign you in automatically. It expires in 7 days. Do not share it.",
  "email_application_id": "Application ID: <code>{id}</code>",
  "email_signature": "Best regards,<br><strong>The HandyCat Team</strong>",
  "email_revision_subject": "Update on your HandyCat application — action required",
  "email_revision_body": "We've reviewed your application for <strong>{company}</strong> and need a few updates before we can proceed.",
  "email_resubmit_application": "Resubmit Application →",
  "email_original_application_id": "Your original Application ID was: <code>{id}</code>",
  "email_rejected_subject": "Update on your HandyCat application — {company}",
  "email_thank_you_interest": "Thank you for your interest in joining HandyCat.",
  "email_rejected_body": "After reviewing your application for <strong>{company}</strong>, we're unable to approve it at this time.",
  "email_reapply_notice": "If you believe this decision was made in error or your situation has changed, you're welcome to reapply in 30 days.",
  "email_cards_ready_subject": "Your NFC cards are ready — {company}",
  "email_cards_ready_body1": "Great news! Your <strong>{count} NFC cards</strong> are now available in your dashboard.",
  "email_cards_ready_body2": "You can assign them to your handymen right away. Physical cards are being prepared and will ship shortly.",
  "email_open_dashboard_generic": "Open Dashboard →",
  "email_card_request_update_subject": "Update on your card request — HandyCat",
  "email_card_request_rejected_body": "Unfortunately, your card request could not be processed at this time. Please contact us for more information.",
  "console_archive_delete_result": "Archive delete result:",
  "status_inactive": "Inactive",
  "label_n_selected": "{count} selected",
  "confirm_deleting_cards_progress": "Deleting cards ({done}/{total})...",
  "confirm_deleting_handymen_progress": "Deleting handymen...",
  "label_unnamed": "Unnamed",
  "toast_error_loading": "Error loading",
  "empty_no_requests_yet": "No requests yet",
  "empty_no_card_requests_yet": "No card requests yet",
  "btn_resume": "Resume",
  "label_generated_created": "{generated}/{total} created",
  "label_order_num": "Order #{num}",
  "label_created_cards_meta": "Created {date} · {count} cards",
  "label_cards_available_stock": "{count} card(s) available in stock",
  "label_assigning_progress": "Assigning {i} of {total}...",
  "loading_all_cards": "Loading all cards...",
  "section_photos": "Photos"
 },
 uk: {
  "loading_text": "Завантаження...",
  "auth_title": "Панель адміністратора",
  "auth_email_label": "Електронна пошта",
  "auth_password_label": "Пароль",
  "auth_email_placeholder": "admin@handycat.com",
  "auth_login_btn": "Увійти",
  "auth_signing_in": "Вхід...",
  "auth_err_missing": "Введіть електронну пошту та пароль",
  "auth_err_wrong": "Неправильна пошта або пароль.",
  "auth_err_failed": "Не вдалося увійти. Спробуйте ще раз.",
  "auth_err_not_admin": "Цей обліковий запис не має доступу адміністратора.",
  "mfa_enroll_hint": "Налаштуйте двоетапний вхід: відскануйте QR-код застосунком-автентифікатором (Google Authenticator, 1Password…), потім введіть 6-значний код.",
  "mfa_code_hint": "Введіть 6-значний код із застосунку-автентифікатора.",
  "mfa_verify_btn": "Підтвердити",
  "mfa_err_code": "Неправильний код. Спробуйте ще раз.",
  "auth_err_connection": "Помилка з'єднання. Спробуйте ще раз.",
  "sb_search": "Пошук",
  "nav_cards": "Картки",
  "nav_companies": "Компанії",
  "nav_handymen": "Майстри",
  "nav_notifications": "Сповіщення",
  "nav_archive": "Архів",
  "sb_signout": "Вийти",
  "companies_title": "Компанії",
  "companies_sub": "Керування компаніями-клієнтами",
  "btn_add_company": "Додати компанію",
  "ph_search": "Пошук",
  "filter_all_cities": "Усі міста",
  "title_grid_view": "Вигляд сіткою",
  "title_list_view": "Вигляд списком",
  "empty_no_companies": "Немає компаній, що відповідають фільтрам.",
  "status_pending": "Очікує",
  "btn_approve": "Схвалити",
  "btn_reject": "Відхилити",
  "title_view_details": "Переглянути деталі",
  "badge_new": "Нова",
  "badge_blocked": "Заблоковано",
  "title_block_company": "Заблокувати компанію",
  "title_unblock_company": "Розблокувати компанію",
  "confirm_block_company": "Заблокувати цю компанію? Вона втратить доступ до панелі керування, доки не буде розблокована.",
  "stat_cards": "Картки",
  "status_active": "Активний",
  "status_available": "Доступно",
  "btn_add_cards": "Додати картки",
  "tab_nfc_cards": "NFC-картки",
  "tab_handyman": "Майстер",
  "tab_orders": "Замовлення",
  "tab_clients": "Клієнти",
  "pill_all": "Усі",
  "pill_available": "Доступні",
  "pill_with_handyman": "У майстра",
  "pill_activated": "Активовані",
  "pill_deactivated": "Деактивовані",
  "ph_search_print_token": "Пошук за Print ID або токеном...",
  "btn_delete_selected": "Видалити вибрані",
  "btn_deactivate_selected": "Деактивувати вибрані",
  "btn_clear": "Очистити",
  "th_print_id": "Print ID",
  "th_token": "Токен",
  "th_status": "Статус",
  "th_handyman": "Майстер",
  "th_client": "Клієнт",
  "th_created": "Створено",
  "th_name": "Ім'я",
  "th_phone": "Телефон",
  "th_skills": "Навички",
  "th_card_token": "Токен картки",
  "th_date": "Дата",
  "th_category": "Категорія",
  "th_price": "Ціна",
  "th_email": "Ел. пошта",
  "th_orders": "Замовлення",
  "th_company": "Компанія",
  "th_rating": "Рейтинг",
  "th_jobs": "Роботи",
  "th_address": "Адреса",
  "th_registered": "Зареєстровано",
  "th_order": "Замовлення",
  "th_cards": "Картки",
  "th_notes": "Примітки",
  "th_contact": "Контакт",
  "th_type": "Тип",
  "th_region": "Регіон",
  "th_url": "URL",
  "ph_search_handymen": "Пошук майстрів...",
  "btn_add_handyman": "Додати майстра",
  "title_edit_company": "Редагувати компанію",
  "title_edit": "Редагувати",
  "title_back": "Назад",
  "handymen_all_title": "Усі майстри",
  "handymen_all_sub": "Повний список фахівців",
  "ph_search_name_phone": "Пошук за ім'ям або телефоном...",
  "empty_no_handymen_found": "Майстрів не знайдено",
  "empty_no_handymen_yet": "Ще немає майстрів. Додайте першого!",
  "section_information": "Інформація",
  "section_job_history": "Історія робіт",
  "stat_reviews": "Відгуки",
  "stat_jobs_done": "Виконано робіт",
  "stat_years_exp": "Років досвіду",
  "info_skills": "Навички",
  "info_card_token": "Токен картки",
  "info_status": "Статус",
  "info_added": "Додано",
  "empty_no_jobs": "Ще немає робіт",
  "clients_title": "Клієнти",
  "clients_sub": "Усі зареєстровані клієнти",
  "empty_no_clients": "Ще немає клієнтів",
  "section_client_information": "Інформація про клієнта",
  "section_order_history": "Історія замовлень",
  "empty_no_orders": "Ще немає замовлень",
  "info_physical_card_id": "ID фізичної картки",
  "section_handyman": "Майстер",
  "section_client": "Клієнт",
  "empty_no_handyman_assigned": "Майстра не призначено",
  "empty_card_not_activated": "Картку ще не активовано",
  "order_history_count": "Історія замовлень ({count})",
  "label_view": "Переглянути",
  "card_not_found": "Картку не знайдено",
  "not_found": "Не знайдено",
  "section_details": "Деталі",
  "section_update_status": "Оновити статус",
  "ph_set_price": "Вказати ціну ($)",
  "btn_save_price": "Зберегти ціну",
  "info_company": "Компанія",
  "info_price": "Ціна",
  "info_created": "Створено",
  "info_completed": "Завершено",
  "review_title": "Відгук клієнта",
  "no_written_review": "Немає текстового відгуку",
  "open_request_label": "Відкритий запит",
  "order_not_found": "Замовлення не знайдено",
  "pool_title": "Картки",
  "pool_sub": "Замовляйте, відстежуйте виготовлення та призначайте NFC-картки компаніям",
  "btn_generate_cards": "Згенерувати картки",
  "btn_export_csv": "Експорт CSV",
  "gen_progress_generating": "Генерація...",
  "gen_progress_done": "✓ Готово!",
  "tab_all_cards": "Усі картки",
  "tab_companies_cards": "Компанії",
  "label_start_from_pid": "Починаючи з Print ID",
  "preview_will_assign": "Буде призначено {count} карток: {range}",
  "warn_only_n_from_start": "На складі лише {count} карток починаючи з #{start}",
  "warn_none_from_start": "Немає карток на складі починаючи з #{start}",
  "warn_range_gaps": "У діапазоні є пропуски — пропущено {skips} (немає на складі)",
  "label_ordered_count": "замовлено",
  "ph_search_company": "Пошук компанії...",
  "label_requested_cards": "Запитано",
  "label_issued_cards": "Видано",
  "btn_open_company": "Відкрити компанію",
  "note_req_fallback_cards": "* Цей запит створено до появи прив'язки карток до запиту — показано всі картки компанії.",
  "toast_request_not_found": "Запит не знайдено",
  "tab_requests": "Запити",
  "all_cards_title": "Усі картки",
  "all_cards_sub": "Пошук і керування картками всіх компаній",
  "ph_print_or_token": "Print ID або токен...",
  "filter_all_companies": "Усі компанії",
  "filter_all_statuses": "Усі статуси",
  "status_assigned": "Призначено",
  "status_activated": "Активовано",
  "status_deactivated": "Деактивовано",
  "section_card_orders": "Замовлення карток",
  "section_requests": "Запити",
  "stat_total_generated": "Всього згенеровано",
  "stat_in_stock": "На складі",
  "stat_assigned": "Призначено",
  "stat_total": "Всього",
  "stat_total_cards": "Всього карток",
  "stat_with_handymen": "У майстрів",
  "stat_activated_by_client": "Активовано клієнтом",
  "stat_activated_by_clients": "Активовано клієнтами",
  "stat_bonus_leads_left": "Бонусних лідів залишилось",
  "stat_total_cards_short": "Всього карток",
  "empty_no_orders_click_generate": "Ще немає замовлень. Натисніть «Згенерувати картки», щоб створити перше.",
  "badge_stock": "Склад",
  "ph_search_token_printid": "Пошук за токеном або Print ID...",
  "filter_all_companies": "Усі компанії",
  "ph_print_id_from": "Print ID від",
  "ph_print_id_to": "до",
  "label_showing_n_of_m": "Показано {shown} з {total}",
  "empty_no_cards_found": "Карток не знайдено",
  "empty_no_cards_match_filter": "Немає карток за цим фільтром",
  "status_ordered": "Замовлено",
  "status_manufactured": "Виготовлено",
  "status_delivered": "Доставлено",
  "title_delete_order": "Видалити замовлення",
  "title_refresh": "Оновити",
  "modal_generate_title": "Згенерувати NFC-картки",
  "modal_generate_sub": "Система створить токени та URL-адреси. Експортуйте CSV, щоб надіслати виробнику для програмування.",
  "label_number_cards_generate": "Кількість карток для генерації",
  "ph_eg_100": "напр. 100",
  "btn_cancel": "Скасувати",
  "btn_generate": "Згенерувати",
  "modal_assign_title": "Призначити картки компанії",
  "modal_assign_sub_default": "Оберіть, скільки карток призначити з пулу",
  "label_available_stock": "Доступно на складі",
  "label_requested_by_company": "Запитано компанією",
  "label_cards_to_assign": "Карток для призначення",
  "btn_assign_cards": "Призначити картки",
  "modal_assign_stock_title": "Призначити картки зі складу",
  "modal_assign_stock_checking": "Перевірка наявності на складі...",
  "label_number_cards_assign": "Кількість карток для призначення",
  "btn_assign": "Призначити",
  "gs_placeholder": "Пошук компаній, майстрів, клієнтів, замовлень, карток...",
  "gs_start_typing": "Почніть вводити текст для пошуку серед компаній, майстрів, клієнтів, замовлень і карток.",
  "gs_loading": "Завантаження...",
  "gs_no_results": "Немає результатів для «{q}»",
  "gs_section_companies": "Компанії",
  "gs_section_handymen": "Майстри",
  "gs_section_clients": "Клієнти",
  "gs_section_orders": "Замовлення",
  "gs_section_cards": "Картки",
  "gs_order_fallback": "Замовлення",
  "gs_in_stock": "На складі",
  "confirm_action_title": "Підтвердіть дію",
  "btn_confirm": "Підтвердити",
  "applications_title": "Заявки компаній",
  "applications_sub": "Перегляд і схвалення нових реєстрацій компаній",
  "pill_pending": "Очікують",
  "pill_approved": "Схвалено",
  "pill_rejected": "Відхилено",
  "pill_needs_revision": "Потребує доопрацювання",
  "empty_no_applications": "Заявок не знайдено",
  "section_contact_information": "Контактна інформація",
  "info_contact_person": "Контактна особа",
  "info_region": "Регіон",
  "info_address": "Адреса",
  "section_business_details": "Дані про бізнес",
  "info_type": "Тип",
  "info_team_size": "Розмір команди",
  "info_years_in_business": "Років у бізнесі",
  "info_license_number": "Номер ліцензії",
  "info_insurance": "Страхування",
  "info_cards_requested": "Запитано NFC-карток",
  "info_services": "Послуги",
  "info_website": "Веб-сайт",
  "info_notes": "Примітки",
  "section_decision": "Рішення",
  "label_message_to_company": "Повідомлення компанії",
  "label_included_in_email": "(включено в лист)",
  "ph_appmsg": "Необов'язково: поясніть своє рішення, що потрібно виправити, або привітайте компанію в HandyCat...",
  "btn_approve_send": "Схвалити та надіслати доступ",
  "label_bonus_leads_grant": "Бонусні ліди",
  "hint_bonus_leads_grant": "Кількість безкоштовних заявок, які компанія може використати до оплати за картку",
  "decision_already_made": "Рішення щодо цієї заявки вже прийнято.",
  "btn_approving_progress": "Схвалення...",
  "btn_processing_progress": "Обробка...",
  "btn_needs_revision": "Потребує доопрацювання",
  "app_id_label": "ID заявки: {id}",
  "orders_title": "Замовлення",
  "orders_sub": "Усі сервісні замовлення",
  "pill_new": "Нові",
  "pill_in_progress": "У процесі",
  "pill_completed": "Завершені",
  "pill_cancelled": "Скасовані",
  "empty_no_orders_found": "Замовлень не знайдено",
  "archive_title": "Архів",
  "archive_sub": "Видалені компанії — зберігаються 30 днів. Можна відновити будь-коли.",
  "btn_upload_backup": "Завантажити резервну копію JSON",
  "archive_loading": "Завантаження архіву...",
  "archive_empty": "Архів порожній. Видалені компанії з'являтимуться тут протягом 30 днів.",
  "deleted_label": "Видалено {date}",
  "expired_label": "Термін минув",
  "days_left_label": "Залишилось днів: {days}",
  "btn_download": "Завантажити",
  "btn_restore": "Відновити",
  "expired_cannot_restore": "Термін минув — відновлення неможливе",
  "label_company_data": "Дані компанії",
  "label_cards_count": "карток: {count}",
  "label_handymen_count": "майстрів: {count}",
  "badge_cards_deleted": "Картки було видалено",
  "badge_cards_preserved": "Картки збережено",
  "notifications_title": "Сповіщення",
  "notifications_sub": "Остання активність у вашій системі",
  "notif_all_caught_up": "Наразі немає сповіщень — усе актуально.",
  "notif_new_application": "Нова заявка компанії — {name}",
  "notif_new_card_request": "Новий запит на картки — {name}",
  "notif_new_company_joined": "Нова компанія приєдналась — {name}",
  "notif_low_stock": "Низький запас — доступно лише {count} карток(и)",
  "notif_order_more": "Замовте більше на сторінці «Картки»",
  "notif_cards_requested_suffix": "запитано карток: {count}",
  "unknown_label": "Невідомо",
  "drawer_new_company_title": "Нова компанія",
  "drawer_edit_company_title": "Редагувати компанію",
  "drawer_fill_details": "Заповніть дані компанії",
  "label_company_name": "Назва компанії *",
  "ph_company_name": "FixPro Services",
  "label_local_city": "Місто",
  "ph_local_city": "Нью-Йорк, NY",
  "label_email_req": "Ел. пошта *",
  "ph_email_company": "info@sitename.com",
  "label_phone": "Телефон",
  "ph_phone": "+1 (555) 000-0000",
  "label_description": "Опис",
  "ph_description": "Короткий опис компанії...",
  "label_bonus_leads": "Бонусні ліди (безкоштовні картки, що залишились)",
  "ph_zero": "0",
  "bonus_leads_note": "Безкоштовні картки, які компанія може призначати до потреби в платному замовленні. Надаються автоматично при схваленні (2 на кожні 10 запитаних) — можна змінити будь-коли.",
  "btn_delete": "Видалити",
  "btn_deactivate": "Деактивувати",
  "btn_activate": "Активувати",
  "btn_save": "Зберегти",
  "drawer_new_handyman_title": "Новий майстер",
  "drawer_edit_handyman_title": "Редагувати майстра",
  "drawer_enter_professional_details": "Введіть дані фахівця",
  "label_full_name": "Повне ім'я *",
  "ph_full_name": "Іван Петренко",
  "label_phone_req": "Телефон *",
  "label_email_req_hm": "Ел. пошта *",
  "ph_email_hm": "john@email.com",
  "label_years_experience": "Років досвіду",
  "ph_years": "5",
  "label_skills_comma": "Навички (через кому)",
  "ph_skills": "Сантехніка, Електрика, Малярні роботи",
  "label_assign_available_card": "Призначити доступну картку",
  "option_no_card_assigned": "Картку не призначено",
  "toast_copied": "Скопійовано!",
  "toast_company_unblocked": "✓ Компанію розблоковано",
  "toast_company_blocked": "✓ Компанію заблоковано",
  "toast_enter_company_name": "Введіть назву компанії",
  "toast_company_updated": "Компанію оновлено!",
  "toast_company_created": "Компанію створено!",
  "toast_error_saving_company": "Помилка збереження компанії",
  "toast_company_activated": "✓ Компанію активовано",
  "toast_company_deactivated": "✓ Компанію деактивовано",
  "toast_archived_deleted": "✓ «{name}» заархівовано та видалено. Відновити можна в 🗄️ Архіві.",
  "toast_error_deleting_company": "Помилка видалення компанії — спробуйте ще раз.",
  "toast_handyman_deleted_check": "✓ Майстра видалено",
  "toast_error_deleting": "Помилка видалення",
  "toast_handyman_deleted": "Майстра видалено",
  "toast_copied_colon": "✓ Скопійовано: {value}",
  "toast_copy_failed": "Не вдалося скопіювати",
  "toast_deleted_of_cards": "Видалено {deleted} з {total} карток",
  "toast_deactivated_cards": "Деактивовано карток: {count}",
  "toast_no_available_cards_export": "Немає доступних карток для експорту",
  "toast_csv_downloaded_cards": "CSV завантажено (карток: {count})",
  "toast_card_deactivated": "Картку деактивовано",
  "toast_card_deleted": "Картку {pid} видалено",
  "toast_error_deleting_card": "Помилка видалення картки",
  "toast_enter_name": "Введіть ім'я",
  "toast_handyman_updated": "Майстра оновлено!",
  "toast_handyman_added": "Майстра додано!",
  "toast_error_saving_handyman": "Помилка збереження майстра",
  "toast_error": "Помилка",
  "toast_deleted_handymen": "Видалено майстрів: {count}",
  "toast_deactivated_handymen": "Деактивовано майстрів: {count}",
  "toast_handyman_not_found": "Майстра не знайдено",
  "toast_could_not_check_stock": "Не вдалося перевірити склад — спробуйте ще раз",
  "toast_enter_number_of_cards": "Введіть кількість карток",
  "toast_checking_stock": "Перевірка складу...",
  "toast_only_x_in_stock_order_more": "На складі лише {count} карток. Замовте більше на сторінці «Картки».",
  "toast_assigned_from_stock": "✓ Призначено карток(и) зі складу: {count}",
  "toast_free_leads_suffix": " (безкоштовних лідів: {count}{paid})",
  "toast_paid_suffix": ", стандартних: {count}",
  "toast_no_stock_request_recorded": "На складі немає карток. Записано запит на {count} — компанія побачить його як очікуючий, поки ви не згенеруєте більше карток.",
  "toast_shortfall_suffix": "— ще {count} запитано (немає в наявності)",
  "note_auto_shortfall": "Створено автоматично: недостатньо карток на складі, щоб повністю виконати запит адміністратора.",
  "note_initial_cards_from_signup": "Початкові картки із затвердженої заявки компанії.",
  "toast_processing_request": "Обробка...",
  "btn_add_leads": "Додати ліди",
  "prompt_add_leads_count": "Скільки лідів додати? (від'ємне число, щоб забрати)",
  "toast_invalid_number": "Будь ласка, введіть дійсне ненульове число",
  "toast_leads_updated": "Бонусні ліди оновлено — тепер {count}",
  "toast_cleaning": "Очищення...",
  "toast_deleted_cards_handymen": "✓ Видалено карток: {cards}, майстрів: {handymen}",
  "toast_deleted_clients": "Видалено клієнтів: {count}",
  "toast_status_updated_to": "Статус оновлено на: {status}",
  "toast_error_updating_status": "Помилка оновлення статусу",
  "toast_enter_price": "Введіть ціну",
  "toast_price_saved": "Ціну збережено: ${price}",
  "toast_error_saving_price": "Помилка збереження ціни",
  "toast_rules_missing_batches": "⚠️ Додайте 'nfc_batches' до правил Firestore, щоб увімкнути замовлення карток (так само, як для інших колекцій: allow read, write: if true;)",
  "toast_could_not_update_status": "Не вдалося оновити статус",
  "toast_status_updated": "Статус оновлено",
  "toast_order_deleted": "✓ Замовлення видалено",
  "toast_error_deleting_order": "Помилка видалення замовлення",
  "toast_no_cards_in_order": "У цьому замовленні немає карток.",
  "toast_enter_number_1_1000": "Введіть число від 1 до 1000",
  "toast_could_not_create_order": "⚠️ Не вдалося створити замовлення. Додайте 'nfc_batches' до правил Firestore (allow read, write: if true;) і спробуйте знову.",
  "toast_order_generated": "✓ Замовлення №{num}: згенеровано карток {count}! Експортуйте CSV для виробника.",
  "toast_no_stock_to_export": "Немає карток на складі для експорту. Спершу згенеруйте картки.",
  "toast_csv_exported": "✓ CSV експортовано — карток: {count}",
  "toast_assigning_to": "Призначення для: {name}",
  "toast_no_stock_import_csv": "⚠️ Немає карток на складі. Спершу імпортуйте CSV.",
  "toast_enter_valid_number": "Введіть коректне число",
  "toast_only_x_in_stock_adjust": "На складі лише {count} карток. Змініть кількість.",
  "toast_cards_assigned_to_company": "✓ Компанії призначено карток: {count}!",
  "toast_error_colon": "Помилка: {msg}",
  "toast_no_company_id": "У цьому запиті не знайдено ID компанії",
  "toast_all_cards_already_created": "Усі {count} карток уже створено ✓",
  "toast_resuming": "Продовження: готово {done}, ще створюється {remaining}...",
  "confirm_generate_cards": "Згенерувати {count} карток для цієї компанії?",
  "toast_generating_cards": "Генерація {count} карток...",
  "toast_cards_generated_notified": "✓ Згенеровано карток: {count}! Компанію повідомлено.",
  "toast_loading_cards": "Завантаження карток...",
  "toast_no_cards_found_request": "Карток для цього запиту не знайдено — спробуйте вкладку «NFC-картки» компанії",
  "toast_csv_downloaded_dash": "CSV завантажено — карток: {count}",
  "confirm_reject_card_request": "Відхилити цей запит на картки?",
  "toast_request_rejected": "Запит відхилено",
  "confirm_reject_application": "Відхилити цю заявку?",
  "confirm_approve_application": "Схвалити цю заявку? Буде створено компанію та надіслано посилання для входу.",
  "toast_approved_email_sent": "✓ Схвалено! Лист надіслано на {email}",
  "toast_email_sent_revision": "Лист надіслано — потребує доопрацювання",
  "toast_email_sent_rejected": "Лист надіслано — заявку відхилено",
  "toast_status_updated_email_failed": "Статус оновлено, але лист міг не надійти",
  "toast_archive_item_not_found": "Елемент архіву не знайдено",
  "toast_backup_downloaded": "Резервну копію завантажено",
  "toast_invalid_json": "Недійсний файл JSON",
  "toast_invalid_backup_no_id": "Недійсна резервна копія — ID компанії не знайдено",
  "confirm_restore_cards": "Відновити {count} NFC-карток?",
  "confirm_restore_handymen": "Відновити майстрів: {count}?",
  "confirm_restore_from_file": "Відновити «{name}» з файлу?",
  "restore_will_be_recreated": "Компанію{cards}{handymen} буде відтворено.",
  "restore_this_will_recreate": "Це відтворить компанію{cards}{handymen}.",
  "toast_restoring_company": "Відновлення компанії...",
  "toast_restoring_cards": "Відновлення карток ({done}/{total})...",
  "toast_restoring_handymen": "Відновлення майстрів ({done}/{total})...",
  "toast_restored_from_file": "✓ «{name}» відновлено з резервної копії!",
  "confirm_restore_from_archive": "Відновити «{name}»?",
  "toast_could_not_remove_archive": "⚠️ Не вдалося видалити запис архіву (перевірте правила Firestore щодо видалення в archive)",
  "toast_restore_partial": "⚠️ «{name}»: не вдалося відновити записів: {count}. Запис архіву збережено, спробуйте ще раз.",
  "toast_restored_successfully": "✓ «{name}» успішно відновлено!",
  "confirm_delete_company": "Видалити «{name}»?",
  "confirm_delete_company_sub": "{details}\n\nКомпанію буде заархівовано на 30 днів — ви зможете відновити її будь-коли.",
  "confirm_delete_all_cards": "Також видалити всі {count} NFC-карток?",
  "confirm_delete_all_handymen": "Також видалити всіх майстрів: {count}?",
  "confirm_archiving": "Архівування...",
  "confirm_deleting": "Видалення...",
  "confirm_archive_save_failed": "⚠️ Не вдалося зберегти в архів!\n\nПотрібно додати 'archive' до правил Firestore:\n\nmatch /archive/{id} {\n  allow read, write: if true;\n}\n\nПродовжити видалення попри це? (резервний файл все одно завантажиться)",
  "confirm_delete_handyman_title": "Видалити майстра",
  "confirm_cannot_be_undone": "Цю дію не можна скасувати.",
  "confirm_delete_this_handyman": "Видалити цього майстра?",
  "confirm_delete_n_cards": "Видалити карток: {count}?",
  "confirm_cannot_undone_short": "Це неможливо скасувати.",
  "confirm_cards_active_warning": "\n⚠️ Активних карток: {count} — клієнти втратять свій профіль.",
  "confirm_deleting_progress": "Видалення {done}/{total}...",
  "confirm_delete_card": "Видалити картку {pid}?",
  "confirm_card_active_warning": "\n\n⚠️ Ця картка активна — за нею зареєстрований клієнт. Посилання на його профіль перестане працювати.",
  "confirm_card_assigned_warning": "\n\n⚠️ Цю картку призначено майстру.",
  "confirm_delete_handyman_q": "Видалити майстра?",
  "confirm_delete_n_handymen": "Видалити майстрів: {count}?",
  "confirm_delete_n_clients": "Видалити клієнтів: {count}?",
  "confirm_clients_profiles_removed": "Їхні профілі та зв'язки з картками буде видалено.",
  "confirm_delete_all_test_data": "⚠️ ВИДАЛИТИ ВСІ картки та майстрів для «{name}»?\n\nЦе лише для тестування, скасувати неможливо.",
  "confirm_absolutely_sure": "Ви абсолютно впевнені? Це видалить УСІ {count} карток і майстрів.",
  "confirm_delete_order_title": "Видалити {title}?",
  "confirm_delete_order_sub": "Це видалить замовлення зі списку замовлень карток. Уже згенеровані в цьому замовленні картки НЕ видаляються і залишаться там, де є (на складі або призначені).",
  "email_approved_subject": "🎉 Вашу заявку до HandyCat схвалено — {company}",
  "email_greeting": "Вітаємо, {name}!",
  "email_approved_body1": "Чудова новина — вашу заявку для <strong>{company}</strong> схвалено!",
  "email_approved_body2": "Ми раді вітати вас у команді. Ваші <strong>{count} NFC-карток</strong> уже готуються.",
  "email_note_from_team": "Примітка від нашої команди:",
  "email_feedback_from_team": "Відгук від нашої команди:",
  "email_reason": "Причина:",
  "email_access_dashboard": "Перейдіть до панелі керування компанією за посиланням нижче:",
  "email_open_dashboard": "Відкрити панель компанії →",
  "email_magic_link_expiry": "Це посилання автоматично увійде у ваш обліковий запис. Термін дії — 7 днів. Не передавайте його іншим.",
  "email_application_id": "ID заявки: <code>{id}</code>",
  "email_signature": "З повагою,<br><strong>Команда HandyCat</strong>",
  "email_revision_subject": "Оновлення щодо вашої заявки HandyCat — потрібна дія",
  "email_revision_body": "Ми переглянули вашу заявку для <strong>{company}</strong> і потребуємо кількох уточнень, перш ніж продовжити.",
  "email_resubmit_application": "Подати заявку повторно →",
  "email_original_application_id": "ID вашої початкової заявки: <code>{id}</code>",
  "email_rejected_subject": "Оновлення щодо вашої заявки HandyCat — {company}",
  "email_thank_you_interest": "Дякуємо за інтерес до приєднання до HandyCat.",
  "email_rejected_body": "Розглянувши вашу заявку для <strong>{company}</strong>, ми наразі не можемо її схвалити.",
  "email_reapply_notice": "Якщо ви вважаєте це рішення помилковим або ваша ситуація змінилася, ви можете подати заявку повторно через 30 днів.",
  "email_cards_ready_subject": "Ваші NFC-картки готові — {company}",
  "email_cards_ready_body1": "Чудова новина! Ваші <strong>{count} NFC-карток</strong> уже доступні у вашій панелі керування.",
  "email_cards_ready_body2": "Ви можете одразу призначити їх своїм майстрам. Фізичні картки готуються та незабаром будуть відправлені.",
  "email_open_dashboard_generic": "Відкрити панель керування →",
  "email_card_request_update_subject": "Оновлення щодо запиту на картки — HandyCat",
  "email_card_request_rejected_body": "На жаль, ваш запит на картки наразі неможливо обробити. Зв'яжіться з нами для отримання додаткової інформації.",
  "console_archive_delete_result": "Результат видалення архіву:",
  "status_inactive": "Неактивний",
  "label_n_selected": "Вибрано: {count}",
  "confirm_deleting_cards_progress": "Видалення карток ({done}/{total})...",
  "confirm_deleting_handymen_progress": "Видалення майстрів...",
  "label_unnamed": "Без назви",
  "toast_error_loading": "Помилка завантаження",
  "empty_no_requests_yet": "Ще немає запитів",
  "empty_no_card_requests_yet": "Ще немає запитів на картки",
  "btn_resume": "Продовжити",
  "label_generated_created": "Створено: {generated}/{total}",
  "label_order_num": "Замовлення №{num}",
  "label_created_cards_meta": "Створено {date} · карток: {count}",
  "label_cards_available_stock": "На складі доступно карток: {count}",
  "label_assigning_progress": "Призначення {i} з {total}...",
  "loading_all_cards": "Завантаження всіх карток...",
  "section_photos": "Фото"
 },
 es: {
  "loading_text": "Cargando...",
  "auth_title": "Panel de administración",
  "auth_email_label": "Correo electrónico",
  "auth_password_label": "Contraseña",
  "auth_email_placeholder": "admin@handycat.com",
  "auth_login_btn": "Iniciar sesión",
  "auth_signing_in": "Iniciando sesión...",
  "auth_err_missing": "Introduce tu correo y contraseña",
  "auth_err_wrong": "Correo o contraseña incorrectos.",
  "auth_err_failed": "No se pudo iniciar sesión. Inténtalo de nuevo.",
  "auth_err_not_admin": "Esta cuenta no tiene acceso de administrador.",
  "mfa_enroll_hint": "Configura el inicio de sesión en dos pasos: escanea este código QR con una app de autenticación (Google Authenticator, 1Password…) y luego introduce el código de 6 dígitos.",
  "mfa_code_hint": "Introduce el código de 6 dígitos de tu app de autenticación.",
  "mfa_verify_btn": "Verificar",
  "mfa_err_code": "Código incorrecto. Inténtalo de nuevo.",
  "auth_err_connection": "Error de conexión. Inténtalo de nuevo.",
  "sb_search": "Buscar",
  "nav_cards": "Tarjetas",
  "nav_companies": "Empresas",
  "nav_handymen": "Profesionales",
  "nav_notifications": "Notificaciones",
  "nav_archive": "Archivo",
  "sb_signout": "Cerrar sesión",
  "companies_title": "Empresas",
  "companies_sub": "Gestiona las empresas clientes",
  "btn_add_company": "Añadir empresa",
  "ph_search": "Buscar",
  "filter_all_cities": "Todas las ciudades",
  "title_grid_view": "Vista de cuadrícula",
  "title_list_view": "Vista de lista",
  "empty_no_companies": "Ninguna empresa coincide con tus filtros.",
  "status_pending": "Pendiente",
  "btn_approve": "Aprobar",
  "btn_reject": "Rechazar",
  "title_view_details": "Ver detalles",
  "badge_new": "Nueva",
  "badge_blocked": "Bloqueada",
  "title_block_company": "Bloquear empresa",
  "title_unblock_company": "Desbloquear empresa",
  "confirm_block_company": "¿Bloquear esta empresa? Perderá el acceso a su panel hasta que se desbloquee.",
  "stat_cards": "Tarjetas",
  "status_active": "Activo",
  "status_available": "Disponible",
  "btn_add_cards": "Añadir tarjetas",
  "tab_nfc_cards": "Tarjetas NFC",
  "tab_handyman": "Profesional",
  "tab_orders": "Pedidos",
  "tab_clients": "Clientes",
  "pill_all": "Todos",
  "pill_available": "Disponibles",
  "pill_with_handyman": "Con profesional",
  "pill_activated": "Activadas",
  "pill_deactivated": "Desactivadas",
  "ph_search_print_token": "Buscar por Print ID o token...",
  "btn_delete_selected": "Eliminar seleccionados",
  "btn_deactivate_selected": "Desactivar seleccionados",
  "btn_clear": "Limpiar",
  "th_print_id": "Print ID",
  "th_token": "Token",
  "th_status": "Estado",
  "th_handyman": "Profesional",
  "th_client": "Cliente",
  "th_created": "Creado",
  "th_name": "Nombre",
  "th_phone": "Teléfono",
  "th_skills": "Habilidades",
  "th_card_token": "Token de tarjeta",
  "th_date": "Fecha",
  "th_category": "Categoría",
  "th_price": "Precio",
  "th_email": "Correo",
  "th_orders": "Pedidos",
  "th_company": "Empresa",
  "th_rating": "Valoración",
  "th_jobs": "Trabajos",
  "th_address": "Dirección",
  "th_registered": "Registrado",
  "th_order": "Pedido",
  "th_cards": "Tarjetas",
  "th_notes": "Notas",
  "th_contact": "Contacto",
  "th_type": "Tipo",
  "th_region": "Región",
  "th_url": "URL",
  "ph_search_handymen": "Buscar profesionales...",
  "btn_add_handyman": "Añadir profesional",
  "title_edit_company": "Editar empresa",
  "title_edit": "Editar",
  "title_back": "Atrás",
  "handymen_all_title": "Todos los profesionales",
  "handymen_all_sub": "Lista completa de profesionales de servicio",
  "ph_search_name_phone": "Buscar por nombre o teléfono...",
  "empty_no_handymen_found": "No se encontraron profesionales",
  "empty_no_handymen_yet": "Aún no hay profesionales. ¡Añade el primero!",
  "section_information": "Información",
  "section_job_history": "Historial de trabajos",
  "stat_reviews": "Reseñas",
  "stat_jobs_done": "Trabajos realizados",
  "stat_years_exp": "Años de experiencia",
  "info_skills": "Habilidades",
  "info_card_token": "Token de tarjeta",
  "info_status": "Estado",
  "info_added": "Añadido",
  "empty_no_jobs": "Aún no hay trabajos",
  "clients_title": "Clientes",
  "clients_sub": "Todos los clientes registrados",
  "empty_no_clients": "Aún no hay clientes",
  "section_client_information": "Información del cliente",
  "section_order_history": "Historial de pedidos",
  "empty_no_orders": "Aún no hay pedidos",
  "info_physical_card_id": "ID de tarjeta física",
  "section_handyman": "Profesional",
  "section_client": "Cliente",
  "empty_no_handyman_assigned": "Ningún profesional asignado",
  "empty_card_not_activated": "Tarjeta aún no activada",
  "order_history_count": "Historial de pedidos ({count})",
  "label_view": "Ver",
  "card_not_found": "Tarjeta no encontrada",
  "not_found": "No encontrado",
  "section_details": "Detalles",
  "section_update_status": "Actualizar estado",
  "ph_set_price": "Definir precio ($)",
  "btn_save_price": "Guardar precio",
  "info_company": "Empresa",
  "info_price": "Precio",
  "info_created": "Creado",
  "info_completed": "Completado",
  "review_title": "Reseña del cliente",
  "no_written_review": "Sin reseña escrita",
  "open_request_label": "Solicitud abierta",
  "order_not_found": "Pedido no encontrado",
  "pool_title": "Tarjetas",
  "pool_sub": "Solicita, sigue la fabricación y asigna tarjetas NFC a las empresas",
  "btn_generate_cards": "Generar tarjetas",
  "btn_export_csv": "Exportar CSV",
  "gen_progress_generating": "Generando...",
  "gen_progress_done": "✓ ¡Listo!",
  "tab_all_cards": "Todas las tarjetas",
  "tab_companies_cards": "Empresas",
  "label_start_from_pid": "Empezar desde Print ID",
  "preview_will_assign": "Se asignarán {count} tarjetas: {range}",
  "warn_only_n_from_start": "Solo {count} tarjetas en stock desde #{start}",
  "warn_none_from_start": "No hay tarjetas en stock desde #{start}",
  "warn_range_gaps": "El rango tiene huecos — se omiten {skips} (no están en stock)",
  "label_ordered_count": "pedidas",
  "ph_search_company": "Buscar empresa...",
  "label_requested_cards": "Solicitadas",
  "label_issued_cards": "Emitidas",
  "btn_open_company": "Abrir empresa",
  "note_req_fallback_cards": "* Esta solicitud es anterior al seguimiento por solicitud — se muestran todas las tarjetas de la empresa.",
  "toast_request_not_found": "Solicitud no encontrada",
  "tab_requests": "Solicitudes",
  "all_cards_title": "Todas las tarjetas",
  "all_cards_sub": "Busca y gestiona tarjetas de todas las empresas",
  "ph_print_or_token": "Print ID o token...",
  "filter_all_companies": "Todas las empresas",
  "filter_all_statuses": "Todos los estados",
  "status_assigned": "Asignada",
  "status_activated": "Activada",
  "status_deactivated": "Desactivada",
  "section_card_orders": "Pedidos de tarjetas",
  "section_requests": "Solicitudes",
  "stat_total_generated": "Total generado",
  "stat_in_stock": "En stock",
  "stat_assigned": "Asignadas",
  "stat_total": "Total",
  "stat_total_cards": "Total de tarjetas",
  "stat_with_handymen": "Con profesionales",
  "stat_activated_by_client": "Activada por el cliente",
  "stat_activated_by_clients": "Activadas por clientes",
  "stat_bonus_leads_left": "Leads de bonificación restantes",
  "stat_total_cards_short": "Total de tarjetas",
  "empty_no_orders_click_generate": "Aún no hay pedidos. Haz clic en «Generar tarjetas» para crear el primero.",
  "badge_stock": "Stock",
  "ph_search_token_printid": "Buscar por token o Print ID...",
  "filter_all_companies": "Todas las empresas",
  "ph_print_id_from": "Print ID desde",
  "ph_print_id_to": "hasta",
  "label_showing_n_of_m": "Mostrando {shown} de {total}",
  "empty_no_cards_found": "No se encontraron tarjetas",
  "empty_no_cards_match_filter": "Ninguna tarjeta coincide con este filtro",
  "status_ordered": "Pedido",
  "status_manufactured": "Fabricado",
  "status_delivered": "Entregado",
  "title_delete_order": "Eliminar pedido",
  "title_refresh": "Actualizar",
  "modal_generate_title": "Generar tarjetas NFC",
  "modal_generate_sub": "El sistema creará tokens y URLs. Exporta el CSV para enviarlo al fabricante para su programación.",
  "label_number_cards_generate": "Número de tarjetas a generar",
  "ph_eg_100": "ej. 100",
  "btn_cancel": "Cancelar",
  "btn_generate": "Generar",
  "modal_assign_title": "Asignar tarjetas a la empresa",
  "modal_assign_sub_default": "Elige cuántas tarjetas asignar del stock",
  "label_available_stock": "Disponible en stock",
  "label_requested_by_company": "Solicitado por la empresa",
  "label_cards_to_assign": "Tarjetas a asignar",
  "btn_assign_cards": "Asignar tarjetas",
  "modal_assign_stock_title": "Asignar tarjetas del stock",
  "modal_assign_stock_checking": "Comprobando stock disponible...",
  "label_number_cards_assign": "Número de tarjetas a asignar",
  "btn_assign": "Asignar",
  "gs_placeholder": "Buscar empresas, profesionales, clientes, pedidos, tarjetas...",
  "gs_start_typing": "Empieza a escribir para buscar entre empresas, profesionales, clientes, pedidos y tarjetas.",
  "gs_loading": "Cargando...",
  "gs_no_results": "Sin resultados para «{q}»",
  "gs_section_companies": "Empresas",
  "gs_section_handymen": "Profesionales",
  "gs_section_clients": "Clientes",
  "gs_section_orders": "Pedidos",
  "gs_section_cards": "Tarjetas",
  "gs_order_fallback": "Pedido",
  "gs_in_stock": "En stock",
  "confirm_action_title": "Confirmar acción",
  "btn_confirm": "Confirmar",
  "applications_title": "Solicitudes de empresas",
  "applications_sub": "Revisa y aprueba nuevos registros de empresas",
  "pill_pending": "Pendientes",
  "pill_approved": "Aprobadas",
  "pill_rejected": "Rechazadas",
  "pill_needs_revision": "Necesita revisión",
  "empty_no_applications": "No se encontraron solicitudes",
  "section_contact_information": "Información de contacto",
  "info_contact_person": "Persona de contacto",
  "info_region": "Región",
  "info_address": "Dirección",
  "section_business_details": "Datos del negocio",
  "info_type": "Tipo",
  "info_team_size": "Tamaño del equipo",
  "info_years_in_business": "Años en el negocio",
  "info_license_number": "N.º de licencia",
  "info_insurance": "Seguro",
  "info_cards_requested": "Tarjetas NFC solicitadas",
  "info_services": "Servicios",
  "info_website": "Sitio web",
  "info_notes": "Notas",
  "section_decision": "Decisión",
  "label_message_to_company": "Mensaje para la empresa",
  "label_included_in_email": "(incluido en el correo)",
  "ph_appmsg": "Opcional: explica tu decisión, qué debe corregirse, o da la bienvenida a HandyCat...",
  "btn_approve_send": "Aprobar y enviar acceso",
  "label_bonus_leads_grant": "Leads de bonificación",
  "hint_bonus_leads_grant": "Solicitudes gratuitas que la empresa puede usar antes de pagar por tarjeta",
  "decision_already_made": "Ya se ha tomado una decisión para esta solicitud.",
  "btn_approving_progress": "Aprobando...",
  "btn_processing_progress": "Procesando...",
  "btn_needs_revision": "Necesita revisión",
  "app_id_label": "ID de solicitud: {id}",
  "orders_title": "Pedidos",
  "orders_sub": "Todos los pedidos de servicio",
  "pill_new": "Nuevos",
  "pill_in_progress": "En curso",
  "pill_completed": "Completados",
  "pill_cancelled": "Cancelados",
  "empty_no_orders_found": "No se encontraron pedidos",
  "archive_title": "Archivo",
  "archive_sub": "Empresas eliminadas — almacenadas durante 30 días. Puedes restaurarlas en cualquier momento.",
  "btn_upload_backup": "Subir copia de seguridad JSON",
  "archive_loading": "Cargando archivo...",
  "archive_empty": "El archivo está vacío. Las empresas eliminadas aparecerán aquí durante 30 días.",
  "deleted_label": "Eliminado el {date}",
  "expired_label": "Caducado",
  "days_left_label": "{days} días restantes",
  "btn_download": "Descargar",
  "btn_restore": "Restaurar",
  "expired_cannot_restore": "Caducado — no se puede restaurar",
  "label_company_data": "Datos de la empresa",
  "label_cards_count": "{count} tarjetas",
  "label_handymen_count": "{count} profesionales",
  "badge_cards_deleted": "Las tarjetas se eliminaron",
  "badge_cards_preserved": "Tarjetas conservadas",
  "notifications_title": "Notificaciones",
  "notifications_sub": "Actividad reciente en tu sistema",
  "notif_all_caught_up": "No hay notificaciones por ahora — estás al día.",
  "notif_new_application": "Nueva solicitud de empresa — {name}",
  "notif_new_card_request": "Nueva solicitud de tarjetas — {name}",
  "notif_new_company_joined": "Nueva empresa registrada — {name}",
  "notif_low_stock": "Stock bajo — solo quedan {count} tarjeta(s) disponible(s)",
  "notif_order_more": "Pide más en la página de Tarjetas",
  "notif_cards_requested_suffix": "{count} tarjetas solicitadas",
  "unknown_label": "Desconocido",
  "drawer_new_company_title": "Nueva empresa",
  "drawer_edit_company_title": "Editar empresa",
  "drawer_fill_details": "Completa los datos de la empresa",
  "label_company_name": "Nombre de la empresa *",
  "ph_company_name": "FixPro Services",
  "label_local_city": "Localidad / Ciudad",
  "ph_local_city": "Nueva York, NY",
  "label_email_req": "Correo *",
  "ph_email_company": "info@sitename.com",
  "label_phone": "Teléfono",
  "ph_phone": "+1 (555) 000-0000",
  "label_description": "Descripción",
  "ph_description": "Breve descripción de la empresa...",
  "label_bonus_leads": "Leads de bonificación (tarjetas gratis restantes)",
  "ph_zero": "0",
  "bonus_leads_note": "Tarjetas gratuitas que esta empresa puede asignar antes de necesitar un pedido pagado. Se conceden automáticamente al aprobar (2 por cada 10 solicitadas) — ajustable en cualquier momento.",
  "btn_delete": "Eliminar",
  "btn_deactivate": "Desactivar",
  "btn_activate": "Activar",
  "btn_save": "Guardar",
  "drawer_new_handyman_title": "Nuevo profesional",
  "drawer_edit_handyman_title": "Editar profesional",
  "drawer_enter_professional_details": "Introduce los datos del profesional",
  "label_full_name": "Nombre completo *",
  "ph_full_name": "Juan Pérez",
  "label_phone_req": "Teléfono *",
  "label_email_req_hm": "Correo *",
  "ph_email_hm": "john@email.com",
  "label_years_experience": "Años de experiencia",
  "ph_years": "5",
  "label_skills_comma": "Habilidades (separadas por comas)",
  "ph_skills": "Fontanería, Electricidad, Pintura",
  "label_assign_available_card": "Asignar tarjeta disponible",
  "option_no_card_assigned": "Sin tarjeta asignada",
  "toast_copied": "¡Copiado!",
  "toast_company_unblocked": "✓ Empresa desbloqueada",
  "toast_company_blocked": "✓ Empresa bloqueada",
  "toast_enter_company_name": "Introduce el nombre de la empresa",
  "toast_company_updated": "¡Empresa actualizada!",
  "toast_company_created": "¡Empresa creada!",
  "toast_error_saving_company": "Error al guardar la empresa",
  "toast_company_activated": "✓ Empresa activada",
  "toast_company_deactivated": "✓ Empresa desactivada",
  "toast_archived_deleted": "✓ «{name}» archivada y eliminada. Restaura desde 🗄️ Archivo.",
  "toast_error_deleting_company": "Error al eliminar la empresa — inténtalo de nuevo.",
  "toast_handyman_deleted_check": "✓ Profesional eliminado",
  "toast_error_deleting": "Error al eliminar",
  "toast_handyman_deleted": "Profesional eliminado",
  "toast_copied_colon": "✓ Copiado: {value}",
  "toast_copy_failed": "Error al copiar",
  "toast_deleted_of_cards": "Eliminadas {deleted} de {total} tarjetas",
  "toast_deactivated_cards": "{count} tarjetas desactivadas",
  "toast_no_available_cards_export": "No hay tarjetas disponibles para exportar",
  "toast_csv_downloaded_cards": "CSV descargado ({count} tarjetas)",
  "toast_card_deactivated": "Tarjeta desactivada",
  "toast_card_deleted": "Tarjeta {pid} eliminada",
  "toast_error_deleting_card": "Error al eliminar la tarjeta",
  "toast_enter_name": "Introduce un nombre",
  "toast_handyman_updated": "¡Profesional actualizado!",
  "toast_handyman_added": "¡Profesional añadido!",
  "toast_error_saving_handyman": "Error al guardar el profesional",
  "toast_error": "Error",
  "toast_deleted_handymen": "{count} profesionales eliminados",
  "toast_deactivated_handymen": "{count} profesionales desactivados",
  "toast_handyman_not_found": "Profesional no encontrado",
  "toast_could_not_check_stock": "No se pudo comprobar el stock — inténtalo de nuevo",
  "toast_enter_number_of_cards": "Introduce el número de tarjetas",
  "toast_checking_stock": "Comprobando stock...",
  "toast_only_x_in_stock_order_more": "Solo quedan {count} tarjetas en stock. Pide más en la página de Tarjetas.",
  "toast_assigned_from_stock": "✓ {count} tarjeta(s) asignada(s) del stock",
  "toast_free_leads_suffix": " ({count} lead(s) gratis{paid})",
  "toast_paid_suffix": ", {count} estándar",
  "toast_no_stock_request_recorded": "No hay tarjetas en stock. Se registró una solicitud de {count} — la empresa la verá como pendiente hasta que generes más tarjetas.",
  "toast_shortfall_suffix": "— {count} más solicitadas (sin stock)",
  "note_auto_shortfall": "Creado automáticamente: no hay suficiente stock para completar una solicitud de tarjetas del administrador.",
  "note_initial_cards_from_signup": "Tarjetas iniciales de la solicitud de empresa aprobada.",
  "toast_processing_request": "Procesando...",
  "btn_add_leads": "Añadir leads",
  "prompt_add_leads_count": "¿Cuántos leads añadir? (usa un número negativo para quitar)",
  "toast_invalid_number": "Por favor, introduce un número válido distinto de cero",
  "toast_leads_updated": "Leads de bonificación actualizados — ahora {count}",
  "toast_cleaning": "Limpiando...",
  "toast_deleted_cards_handymen": "✓ Eliminadas {cards} tarjetas y {handymen} profesionales",
  "toast_deleted_clients": "{count} clientes eliminados",
  "toast_status_updated_to": "Estado actualizado a: {status}",
  "toast_error_updating_status": "Error al actualizar el estado",
  "toast_enter_price": "Introduce un precio",
  "toast_price_saved": "Precio guardado: ${price}",
  "toast_error_saving_price": "Error al guardar el precio",
  "toast_rules_missing_batches": "⚠️ Añade 'nfc_batches' a tus reglas de Firestore para habilitar los pedidos de tarjetas (igual que las demás colecciones: allow read, write: if true;)",
  "toast_could_not_update_status": "No se pudo actualizar el estado",
  "toast_status_updated": "Estado actualizado",
  "toast_order_deleted": "✓ Pedido eliminado",
  "toast_error_deleting_order": "Error al eliminar el pedido",
  "toast_no_cards_in_order": "No hay tarjetas en este pedido.",
  "toast_enter_number_1_1000": "Introduce un número entre 1 y 1000",
  "toast_could_not_create_order": "⚠️ No se pudo crear el pedido. Añade 'nfc_batches' a tus reglas de Firestore (allow read, write: if true;) e inténtalo de nuevo.",
  "toast_order_generated": "✓ Pedido n.º {num}: ¡{count} tarjetas generadas! Exporta el CSV para enviarlo al fabricante.",
  "toast_no_stock_to_export": "No hay tarjetas en stock para exportar. Genera tarjetas primero.",
  "toast_csv_exported": "✓ CSV exportado — {count} tarjetas",
  "toast_assigning_to": "Asignando a: {name}",
  "toast_no_stock_import_csv": "⚠️ No hay tarjetas en stock. Importa un CSV primero.",
  "toast_enter_valid_number": "Introduce un número válido",
  "toast_only_x_in_stock_adjust": "Solo quedan {count} tarjetas en stock. Ajusta la cantidad.",
  "toast_cards_assigned_to_company": "✓ ¡{count} tarjetas asignadas a la empresa!",
  "toast_error_colon": "Error: {msg}",
  "toast_no_company_id": "No se encontró el ID de la empresa en esta solicitud",
  "toast_all_cards_already_created": "Las {count} tarjetas ya estaban creadas ✓",
  "toast_resuming": "Reanudando: {done} listas, creando {remaining} más...",
  "confirm_generate_cards": "¿Generar {count} tarjetas para esta empresa?",
  "toast_generating_cards": "Generando {count} tarjetas...",
  "toast_cards_generated_notified": "✓ ¡{count} tarjetas generadas! Se notificó a la empresa.",
  "toast_loading_cards": "Cargando tarjetas...",
  "toast_no_cards_found_request": "No se encontraron tarjetas para esta solicitud — prueba en la pestaña de tarjetas NFC de la empresa",
  "toast_csv_downloaded_dash": "CSV descargado — {count} tarjetas",
  "confirm_reject_card_request": "¿Rechazar esta solicitud de tarjetas?",
  "toast_request_rejected": "Solicitud rechazada",
  "confirm_reject_application": "¿Rechazar esta solicitud?",
  "confirm_approve_application": "¿Aprobar esta solicitud? Se creará la empresa y se enviará un enlace de acceso por correo.",
  "toast_approved_email_sent": "✓ ¡Aprobado! Correo enviado a {email}",
  "toast_email_sent_revision": "Correo enviado — necesita revisión",
  "toast_email_sent_rejected": "Correo enviado — solicitud rechazada",
  "toast_status_updated_email_failed": "Estado actualizado, pero el correo podría no haberse enviado",
  "toast_archive_item_not_found": "Elemento del archivo no encontrado",
  "toast_backup_downloaded": "Copia de seguridad descargada",
  "toast_invalid_json": "Archivo JSON no válido",
  "toast_invalid_backup_no_id": "Copia de seguridad no válida — no se encontró el ID de la empresa",
  "confirm_restore_cards": "¿Restaurar {count} tarjetas NFC?",
  "confirm_restore_handymen": "¿Restaurar {count} profesionales?",
  "confirm_restore_from_file": "¿Restaurar «{name}» desde el archivo?",
  "restore_will_be_recreated": "Se recreará la empresa{cards}{handymen}.",
  "restore_this_will_recreate": "Esto recreará la empresa{cards}{handymen}.",
  "toast_restoring_company": "Restaurando empresa...",
  "toast_restoring_cards": "Restaurando tarjetas ({done}/{total})...",
  "toast_restoring_handymen": "Restaurando profesionales ({done}/{total})...",
  "toast_restored_from_file": "✓ «{name}» restaurada desde la copia de seguridad!",
  "confirm_restore_from_archive": "¿Restaurar «{name}»?",
  "toast_could_not_remove_archive": "⚠️ No se pudo eliminar la entrada del archivo (comprueba que las reglas de Firestore permitan eliminar en archive)",
  "toast_restore_partial": "⚠️ «{name}»: no se pudieron restaurar {count} registro(s). La entrada del archivo se conservó, inténtalo de nuevo.",
  "toast_restored_successfully": "✓ «{name}» restaurada correctamente!",
  "confirm_delete_company": "¿Eliminar «{name}»?",
  "confirm_delete_company_sub": "{details}\n\nLa empresa se archivará durante 30 días — podrás restaurarla en cualquier momento.",
  "confirm_delete_all_cards": "¿Eliminar también las {count} tarjetas NFC?",
  "confirm_delete_all_handymen": "¿Eliminar también a los {count} profesionales?",
  "confirm_archiving": "Archivando...",
  "confirm_deleting": "Eliminando...",
  "confirm_archive_save_failed": "⚠️ ¡Error al guardar en el archivo!\n\nDebes añadir 'archive' a las reglas de Firestore:\n\nmatch /archive/{id} {\n  allow read, write: if true;\n}\n\n¿Continuar eliminando de todos modos? (la copia de seguridad del archivo se descargará igualmente)",
  "confirm_delete_handyman_title": "Eliminar profesional",
  "confirm_cannot_be_undone": "Esta acción no se puede deshacer.",
  "confirm_delete_this_handyman": "¿Eliminar este profesional?",
  "confirm_delete_n_cards": "¿Eliminar {count} tarjetas?",
  "confirm_cannot_undone_short": "Esto no se puede deshacer.",
  "confirm_cards_active_warning": "\n⚠️ {count} tarjeta(s) están activas — los clientes perderán su perfil.",
  "confirm_deleting_progress": "Eliminando {done}/{total}...",
  "confirm_delete_card": "¿Eliminar la tarjeta {pid}?",
  "confirm_card_active_warning": "\n\n⚠️ Esta tarjeta está activa — un cliente se registró con ella. Su enlace de perfil dejará de funcionar.",
  "confirm_card_assigned_warning": "\n\n⚠️ Esta tarjeta está asignada a un profesional.",
  "confirm_delete_handyman_q": "¿Eliminar profesional?",
  "confirm_delete_n_handymen": "¿Eliminar {count} profesionales?",
  "confirm_delete_n_clients": "¿Eliminar {count} clientes?",
  "confirm_clients_profiles_removed": "Se eliminarán sus perfiles y los vínculos con las tarjetas.",
  "confirm_delete_all_test_data": "⚠️ ¿ELIMINAR TODAS las tarjetas y profesionales de «{name}»?\n\nEsto es solo para pruebas y no se puede deshacer.",
  "confirm_absolutely_sure": "¿Estás completamente seguro? Esto eliminará TODAS las {count} tarjetas y profesionales.",
  "confirm_delete_order_title": "¿Eliminar {title}?",
  "confirm_delete_order_sub": "Esto elimina el pedido de tu lista de pedidos de tarjetas. Las tarjetas ya generadas en este pedido NO se eliminan y permanecerán donde estén (en stock o asignadas).",
  "email_approved_subject": "🎉 Tu solicitud a HandyCat ha sido aprobada — {company}",
  "email_greeting": "Hola {name},",
  "email_approved_body1": "Buenas noticias — ¡tu solicitud para <strong>{company}</strong> ha sido aprobada!",
  "email_approved_body2": "Estamos encantados de tenerte con nosotros. Tus <strong>{count} tarjetas NFC</strong> se están preparando.",
  "email_note_from_team": "Nota de nuestro equipo:",
  "email_feedback_from_team": "Comentarios de nuestro equipo:",
  "email_reason": "Motivo:",
  "email_access_dashboard": "Accede al panel de tu empresa mediante el siguiente enlace:",
  "email_open_dashboard": "Abrir panel de la empresa →",
  "email_magic_link_expiry": "Este enlace mágico iniciará tu sesión automáticamente. Caduca en 7 días. No lo compartas.",
  "email_application_id": "ID de solicitud: <code>{id}</code>",
  "email_signature": "Saludos cordiales,<br><strong>El equipo de HandyCat</strong>",
  "email_revision_subject": "Actualización de tu solicitud a HandyCat — se requiere una acción",
  "email_revision_body": "Hemos revisado tu solicitud para <strong>{company}</strong> y necesitamos algunos ajustes antes de continuar.",
  "email_resubmit_application": "Reenviar solicitud →",
  "email_original_application_id": "El ID de tu solicitud original era: <code>{id}</code>",
  "email_rejected_subject": "Actualización de tu solicitud a HandyCat — {company}",
  "email_thank_you_interest": "Gracias por tu interés en unirte a HandyCat.",
  "email_rejected_body": "Tras revisar tu solicitud para <strong>{company}</strong>, no podemos aprobarla en este momento.",
  "email_reapply_notice": "Si crees que esta decisión fue un error o tu situación ha cambiado, puedes volver a presentar tu solicitud en 30 días.",
  "email_cards_ready_subject": "Tus tarjetas NFC están listas — {company}",
  "email_cards_ready_body1": "¡Buenas noticias! Tus <strong>{count} tarjetas NFC</strong> ya están disponibles en tu panel.",
  "email_cards_ready_body2": "Puedes asignarlas a tus profesionales de inmediato. Las tarjetas físicas se están preparando y se enviarán en breve.",
  "email_open_dashboard_generic": "Abrir panel →",
  "email_card_request_update_subject": "Actualización de tu solicitud de tarjetas — HandyCat",
  "email_card_request_rejected_body": "Lamentablemente, tu solicitud de tarjetas no pudo procesarse en este momento. Contáctanos para obtener más información.",
  "console_archive_delete_result": "Resultado de eliminación del archivo:",
  "status_inactive": "Inactivo",
  "label_n_selected": "{count} seleccionados",
  "confirm_deleting_cards_progress": "Eliminando tarjetas ({done}/{total})...",
  "confirm_deleting_handymen_progress": "Eliminando profesionales...",
  "label_unnamed": "Sin nombre",
  "toast_error_loading": "Error al cargar",
  "empty_no_requests_yet": "Aún no hay solicitudes",
  "empty_no_card_requests_yet": "Aún no hay solicitudes de tarjetas",
  "btn_resume": "Reanudar",
  "label_generated_created": "{generated}/{total} creadas",
  "label_order_num": "Pedido n.º {num}",
  "label_created_cards_meta": "Creado {date} · {count} tarjetas",
  "label_cards_available_stock": "{count} tarjeta(s) disponible(s) en stock",
  "label_assigning_progress": "Asignando {i} de {total}...",
  "loading_all_cards": "Cargando todas las tarjetas...",
  "section_photos": "Fotos"
 }
};

var LANG = localStorage.getItem("hc_lang") || "en";
var LOCALE_MAP = {en:"en-US", uk:"uk-UA", es:"es-ES"};
function t(key){
  return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
}
function tf(key, params){
  var s = t(key);
  Object.keys(params||{}).forEach(function(k){ s = s.replace("{"+k+"}", params[k]); });
  return s;
}
function applyStaticTranslations(){
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
}
function renderLangSwitcher(){
  var labels = {en:"EN", uk:"UA", es:"ES"};
  var lbl = document.getElementById("langSwitcherLabel");
  if (lbl) lbl.textContent = "\u{1F310}" + " " + labels[LANG];
  document.querySelectorAll(".lang-switcher-opt").forEach(function(o){
    o.classList.toggle("active", o.getAttribute("data-lang") === LANG);
  });
  var sw = document.getElementById("langSwitcher");
  if (sw) sw.classList.remove("open");
}

function toggleLangMenu(e){
  if (e) e.stopPropagation();
  var sw = document.getElementById("langSwitcher");
  if (sw) sw.classList.toggle("open");
}

document.addEventListener("click", function(e){
  var sw = document.getElementById("langSwitcher");
  if (sw && sw.classList.contains("open") && !sw.contains(e.target)) sw.classList.remove("open");
});

function setLang(lang){
  LANG = lang;
  localStorage.setItem("hc_lang", lang);
  applyStaticTranslations();
  renderLangSwitcher();
  var activePage = document.querySelector(".page.active");
  var pid = activePage ? activePage.id : "";
  if (pid === "page-companies") loadCos();
  else if (pid === "page-handymen") loadHMs();
  else if (pid === "page-clients") loadCls();
  else if (pid === "page-orders") loadOrds();
  else if (pid === "page-applications") loadApps();
  else if (pid === "page-notifications") loadNotifications();
  else if (pid === "page-archive") loadArchive();
  else if (pid === "page-nfc-pool") loadPool();
  else if (pid === "page-co-detail" && typeof cdId !== "undefined" && cdId) { renderCDCards(); renderCDHMTable(cdHM||[]); }
  else if (pid === "page-pool-batch-detail") renderPoolDetail();
}
var BURL = "https://app.handycat.us";
// -- API: every data access and e-mail goes through the admin-api edge function. Each call carries the
// admin's Supabase Auth access token; the server checks it, the admin allow-list and two-factor (aal2).
// The key below is only the gateway (anon) key and grants no database access by itself.
var ADMIN_PROD = { url: "https://leiztsecokpeombovobc.supabase.co/functions/v1/admin-api", key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlaXp0c2Vjb2twZW9tYm92b2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyMzg2OTIsImV4cCI6MjEwMzgxNDY5Mn0.RIit75wOCwBAwMTrBjiY3MOF7ERqmPo_y1nx__rXk_s" };
var ADMIN_API = ADMIN_PROD;
// -- Supabase Auth (replaces Firebase): e-mail + password, then a TOTP code (two-factor). --
var AUTH_BASE = new URL(ADMIN_API.url).origin + "/auth/v1";
var AUTH_STORE = "hca_auth";
function authGet() { try { return JSON.parse(sessionStorage.getItem(AUTH_STORE) || "null"); } catch (e) { return null; } }
function authSet(t) {
  sessionStorage.setItem(AUTH_STORE, JSON.stringify({ access: t.access_token, refresh: t.refresh_token, exp: Date.now() + ((t.expires_in || 3600) - 60) * 1000 }));
  currentIdToken = t.access_token;
}
function authClear() { sessionStorage.removeItem(AUTH_STORE); currentIdToken = null; }
async function gotrue(path, body, token, method) {
  var headers = { "Content-Type": "application/json", "apikey": ADMIN_API.key };
  if (token) headers.Authorization = "Bearer " + token;
  var res;
  try { res = await fetch(AUTH_BASE + path, { method: method || (body === undefined ? "GET" : "POST"), headers: headers, body: body === undefined ? undefined : JSON.stringify(body) }); }
  catch (e) { return { ok: false, status: 0, data: null }; }
  var data = null; try { data = await res.json(); } catch (e) {}
  return { ok: res.ok, status: res.status, data: data };
}
// One refresh at a time, shared by all calls that hit an expired token: Supabase rotates refresh tokens and
// treats re-use of an old one as theft (it would revoke the whole session).
var refreshing = null;
function authRefresh() {
  if (refreshing) return refreshing;
  refreshing = (async function() {
    var a = authGet();
    if (!a || !a.refresh) return false;
    var r = await gotrue("/token?grant_type=refresh_token", { refresh_token: a.refresh });
    if (!r.ok || !r.data || !r.data.access_token) return false;
    authSet(r.data); return true;
  })();
  return refreshing.finally(function() { refreshing = null; });
}
async function adminApi(action, payload, retried) {
  if (!(action === "db" && payload && (payload.op === "list" || payload.op === "get"))) listCacheClear();
  var sentToken = currentIdToken;
  var body = Object.assign({ action: action, access_token: currentIdToken }, payload || {});
  var res;
  try {
    res = await fetch(ADMIN_API.url, { method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + ADMIN_API.key, "apikey": ADMIN_API.key }, body: JSON.stringify(body) });
  } catch (e) { return { ok: false, error: "network" }; }
  var j = null; try { j = await res.json(); } catch (e) {}
  if (!j || typeof j !== "object") j = { ok: false, error: "bad_response" };
  // Access tokens live an hour: refresh once and retry. Revoked session / no admin rights / no 2FA: back to login.
  if (j.error === "token_invalid" && !retried && action !== "whoami") {
    if (currentIdToken && currentIdToken !== sentToken) return adminApi(action, payload, true);   // refreshed meanwhile
    if (await authRefresh()) return adminApi(action, payload, true);
  }
  if ((j.error === "token_invalid" || j.error === "not_authorized" || j.error === "mfa_required") && action !== "whoami" && currentIdToken) logout();
  return j;
}

// ── AUTH ──────────────────────────────────────────────────────
var currentIdToken = null;

function loginInputFocus(input) {
  input.closest('.login-input-wrap').classList.add('focused');
}
function loginInputBlur(input) {
  input.closest('.login-input-wrap').classList.remove('focused');
}

var pendingAuth = null, pendingFactorId = null;
function resetLoginUi() {
  var btn = document.getElementById("loginBtn");
  btn.disabled = false; btn.style.opacity = "1";
  btn.querySelector("span").textContent = t("auth_login_btn");
  var mb = document.getElementById("mfaBtn"); if (mb) mb.disabled = false;
}
async function login() {
  // Enter on the password field must not restart sign-in while one is running or the 2FA step is shown
  // (on first sign-in that would delete the factor the admin is scanning and enroll a new one).
  var lb = document.getElementById("loginBtn");
  if (lb.disabled || lb.style.display === "none") return;
  var email = document.getElementById("authEmail").value.trim();
  var pass = document.getElementById("authPass").value;
  if (!email || !pass) { showAuthErr(t("auth_err_missing")); return; }
  var btn = document.getElementById("loginBtn");
  btn.disabled = true; btn.style.opacity = "0.7";
  btn.querySelector("span").textContent = t("auth_signing_in");
  var r = await gotrue("/token?grant_type=password", { email: email, password: pass });
  if (!r.ok || !r.data || !r.data.access_token) {
    showAuthErr(r.status === 0 ? t("auth_err_connection") : (r.status === 400 || r.status === 401) ? t("auth_err_wrong") : t("auth_err_failed"));
    resetLoginUi(); return;
  }
  pendingAuth = r.data;
  var factors = ((r.data.user || {}).factors || []).filter(function(f) { return f.factor_type === "totp"; });
  var verified = factors.find(function(f) { return f.status === "verified"; });
  if (verified) { pendingFactorId = verified.id; showMfaStep(false); return; }
  // First sign-in: set up the authenticator. Drop half-finished setups first.
  for (var i = 0; i < factors.length; i++) await gotrue("/factors/" + factors[i].id, undefined, pendingAuth.access_token, "DELETE");
  var en = await gotrue("/factors", { factor_type: "totp", friendly_name: "HandyCat admin " + Date.now().toString(36) }, pendingAuth.access_token);
  if (!en.ok || !en.data || !en.data.totp) { showAuthErr(t("auth_err_failed")); resetLoginUi(); return; }
  pendingFactorId = en.data.id;
  document.getElementById("mfaQr").src = qrSrc(en.data.totp.qr_code);
  document.getElementById("mfaSecret").textContent = en.data.totp.secret || "";
  showMfaStep(true);
}
// Supabase returns the QR as SVG markup (sometimes already prefixed with "data:image/svg+xml;utf-8,").
// Raw SVG in a data: URL breaks on characters like "#", so it is always URL-encoded here.
function qrSrc(q) {
  q = String(q || "");
  var i = q.indexOf("<svg");
  return i >= 0 ? "data:image/svg+xml;charset=utf-8," + encodeURIComponent(q.slice(i)) : q;
}
function showMfaStep(enroll) {
  document.getElementById("authErr").style.display = "none";
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("mfaStep").style.display = "flex";
  document.getElementById("mfaEnroll").style.display = enroll ? "flex" : "none";
  var c = document.getElementById("mfaCode"); c.value = ""; try { c.focus(); } catch (e) {}
}
async function verifyMfa() {
  var code = document.getElementById("mfaCode").value.replace(/\s+/g, "");
  if (!/^\d{6}$/.test(code)) { showAuthErr(t("mfa_err_code")); return; }
  if (!pendingAuth || !pendingFactorId) { showAuthErr(t("auth_err_failed")); return; }
  var mb = document.getElementById("mfaBtn"); mb.disabled = true;
  var ch = await gotrue("/factors/" + pendingFactorId + "/challenge", {}, pendingAuth.access_token);
  var v = (ch.ok && ch.data) ? await gotrue("/factors/" + pendingFactorId + "/verify", { challenge_id: ch.data.id, code: code }, pendingAuth.access_token) : { ok: false };
  if (!v.ok || !v.data || !v.data.access_token) { mb.disabled = false; showAuthErr(t("mfa_err_code")); return; }
  await finishLogin(v.data);
}
async function finishLogin(tokens) {
  currentIdToken = tokens.access_token;
  var who = await adminApi("whoami");
  if (!who.ok) {
    currentIdToken = null;
    showAuthErr(who.error === "not_authorized" ? t("auth_err_not_admin") : t("auth_err_failed"));
    var mb = document.getElementById("mfaBtn"); if (mb) mb.disabled = false;
    return;
  }
  pendingAuth = null; pendingFactorId = null;
  authSet(tokens);
  showApp();
}

function showAuthErr(msg) {
  var el = document.getElementById("authErr");
  el.textContent = msg; el.style.display = "block";
}

// ── I18N BOOTSTRAP ─────────────────────────────────────────────
applyStaticTranslations();
renderLangSwitcher();

// ── CACHE — must be defined before checkSession runs ──────────
var CC = { cos: {}, cl: {} };
var cdId = null, cdCards = [], cdCF = "all", cdHM = [];
var allOrds = [], ordF = "all";

async function loadNotifications() {
  var el = document.getElementById("notifFeed");
  if (el) el.innerHTML = '<div class="empty" style="padding:24px">' + t("loading_text") + '</div>';

  var items = [];
  var badgeCount = 0;
  var LOW_STOCK_THRESHOLD = 20;

  try {
    var results = await Promise.all([
      fsL("company_applications", 200),
      fsL("card_requests", 200),
      fsL("companies", 500),
      fsL("nfc_cards", 5000)
    ]);
    var apps = results[0], reqs = results[1], cos = results[2], cards = results[3];

    apps.filter(function(a) { return a.status === "pending"; }).forEach(function(a) {
      badgeCount++;
      items.push({
        ts: a.createdAt || "", icon: "📝",
        title: tf("notif_new_application", {name: a.companyName || t("unknown_label")}),
        sub: (a.contactPerson || "") + (a.requestedCards ? (" · " + tf("notif_cards_requested_suffix", {count: a.requestedCards})) : ""),
        action: "nav('companies')"
      });
    });

    reqs.filter(function(r) { return r.status === "pending"; }).forEach(function(r) {
      badgeCount++;
      items.push({
        ts: r.createdAt || "", icon: "💳",
        title: tf("notif_new_card_request", {name: r.companyName || r.companyId || t("unknown_label")}),
        sub: tf("notif_cards_requested_suffix", {count: r.count || 10}) + (r.notes ? (" · " + r.notes) : ""),
        action: "loadPool()"
      });
    });

    var weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    cos.filter(function(c) { return c.createdAt && new Date(c.createdAt).getTime() > weekAgo; }).forEach(function(c) {
      items.push({
        ts: c.createdAt, icon: "🏢",
        title: tf("notif_new_company_joined", {name: c.name || c.id}),
        sub: c.location || "",
        action: "nav('companies',1);openCo('" + c.id + "')"
      });
    });

    var stockCount = cards.filter(function(c) { return !c.companyId || c.companyId === ""; }).length;
    if (stockCount < LOW_STOCK_THRESHOLD) {
      badgeCount++;
      items.push({
        ts: new Date().toISOString(), icon: "⚠️", pinned: true,
        title: tf("notif_low_stock", {count: stockCount}),
        sub: t("notif_order_more"),
        action: "loadPool()"
      });
    }
  } catch (e) {}

  items.sort(function(a, b) {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return (b.ts || "").localeCompare(a.ts || "");
  });

  var badge = document.getElementById("notifBadge");
  if (badge) {
    if (badgeCount > 0) { badge.textContent = badgeCount; badge.style.display = "inline"; }
    else badge.style.display = "none";
  }

  if (!el) return;
  if (!items.length) {
    el.innerHTML = '<div class="pg-card"><div class="empty">' + t("notif_all_caught_up") + '</div></div>';
    return;
  }
  el.innerHTML = items.map(function(n) {
    return '<div class="notif-row" onclick="' + n.action + '">' +
      '<div class="notif-icon">' + n.icon + '</div>' +
      '<div style="flex:1;min-width:0">' +
        '<div class="notif-title">' + esc(n.title) + '</div>' +
        (n.sub ? '<div class="notif-sub">' + esc(n.sub) + '</div>' : '') +
      '</div>' +
      '<div class="notif-time">' + (n.ts ? fd(n.ts) : "") + '</div>' +
    '</div>';
  }).join("");
}

function showApp() {
  document.getElementById("authScreen").classList.remove("show");
  document.getElementById("app").style.display = "block";
  // set admin email in sidebar
  var emailEl = document.getElementById("sbAdminEmail");
  if (emailEl) {
    var email = document.getElementById("authEmail").value.trim();
    if (email) emailEl.textContent = email;
  }
  // Restore whatever page the admin was last on instead of always resetting
  // to Cards, so refreshing the browser doesn't lose their place.
  var lastPage = sessionStorage.getItem("hca_last_page");
  if (lastPage && lastPage !== "nfc-pool" && document.getElementById("page-" + lastPage)) {
    nav(lastPage, true);
  } else {
    loadPool();
  }
  loadNotifications();
  loadArchiveBadge();
}

async function logout() {
  var a = authGet();
  authClear();
  listCacheClear();
  sessionStorage.removeItem("hca_token"); sessionStorage.removeItem("hca_expiry");   // old Firebase session keys
  if (a && a.access) await Promise.race([gotrue("/logout", {}, a.access), new Promise(function(r) { setTimeout(r, 1500); })]);
  location.reload();
}

(async function checkSession() {
  sessionStorage.removeItem("hca_token"); sessionStorage.removeItem("hca_expiry");     // old Firebase session keys
  var a = authGet();
  if (!a) return;
  if (Date.now() < a.exp) { currentIdToken = a.access; showApp(); return; }
  if (await authRefresh()) showApp(); else authClear();
})();

// ── FIRESTORE ─────────────────────────────────────────────────
function toSnake(s) { return s.replace(/[A-Z]/g, function(m) { return "_" + m.toLowerCase(); }); }
function toCamel(s) { return s.replace(/_([a-z0-9])/g, function(_, c) { return c.toUpperCase(); }); }
function rowToCamel(row) {
  var out = {};
  Object.keys(row || {}).forEach(function(k) { out[toCamel(k)] = row[k]; });
  return out;
}
function fieldsToSnake(obj) {
  var out = {};
  Object.keys(obj || {}).forEach(function(k) { out[toSnake(k)] = obj[k]; });
  return out;
}
async function fsGet(c, id) {
  var r = await adminApi("db", { op: "get", table: c, id: id });
  return r.ok && r.row ? rowToCamel(r.row) : null;
}
// Short-lived cache of list reads: switching pages, or several panels loading the same table at
// once (cards, notifications, pool), no longer re-downloads it. Any other admin-api call (every
// write goes through one) clears it, so the admin always sees their own changes immediately.
// (LIST_CACHE_TTL and listCache are declared at the top of this file.)
function listCacheClear() { listCache = {}; }
// The server returns at most 1000 rows per call, so larger tables (nfc_cards!) are fetched page by page.
async function apiFetchAll(table, filters, lim) {
  var key = JSON.stringify([table, filters || [], lim || 10000]);
  var hit = listCache[key];
  if (hit && Date.now() - hit.at < LIST_CACHE_TTL) return (await hit.promise).slice();
  var entry = { at: Date.now() };
  entry.promise = (async function() {
    var PAGE = 1000, out = [], from = 0, max = lim || 10000;
    while (from < max) {
      var to = Math.min(from + PAGE, max) - 1;
      var r = await adminApi("db", { op: "list", table: table, filters: filters || [], from: from, to: to });
      if (!r.ok || !r.rows) { if (listCache[key] === entry) delete listCache[key]; break; }   // never cache a failed/partial read
      out = out.concat(r.rows);
      if (r.rows.length < (to - from + 1)) break;
      from += PAGE;
    }
    return out;
  })();
  listCache[key] = entry;
  return (await entry.promise).slice();
}
async function fsL(c, ps) {
  var _out = (await apiFetchAll(c, [], ps || 10000)).map(rowToCamel);
  if (c === "orders") _out = _out.filter(function(o) { return !o.isOnboarding; });
  return _out;
}
async function fsQ(c, filters, lim) {
  var f = (filters || []).map(function(x) { return { col: x.field === "companyIds" ? "company_id" : toSnake(x.field), value: x.value }; });
  var _out = (await apiFetchAll(c, f, lim || 10000)).map(rowToCamel);
  if (c === "orders") _out = _out.filter(function(o) { return !o.isOnboarding; });
  return _out;
}
async function fsP(c, id, fields) {
  var row = fieldsToSnake(fields); row.id = id;
  var r = await adminApi("db", { op: "upsert", table: c, row: row });
  if (!r.ok) console.warn("fsP failed", c, id, r.error, r.column || r.detail || "");
  return !!r.ok;
}
// Partial update; creates the row if it does not exist (same semantics as before).
async function fsMerge(c, id, newFields) {
  var r = await adminApi("db", { op: "merge", table: c, id: id, row: fieldsToSnake(newFields) });
  if (!r.ok) console.warn("fsMerge failed", c, id, r.error, r.column || r.detail || "");
  return !!r.ok;
}
var fsPatchFields = fsMerge;
async function fsDel(c, id) {
  var r = await adminApi("db", { op: "delete", table: c, id: id });
  if (!r.ok) console.warn("fsDel failed", c, id, r.error, r.detail || "");
  return !!r.ok;
}
function pf(f) { return f || {}; }
function sv(v) { return v == null ? "" : String(v); }
function nv(v) { return Number(v || 0); }
function av(a) { return a || []; }
// XSS protection — always use esc() when inserting user data into innerHTML
function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── UI HELPERS ────────────────────────────────────────────────
// Browser Back/Forward support: every nav()/sp() call pushes a history entry
// (route name + which function shows it) so the physical Back button walks
// through in-app views instead of leaving the SPA. _isPopNav guards against
// re-pushing when we're replaying a popstate event.
var _isPopNav = false;
window.addEventListener("popstate", function(e) {
  if (!e.state || !e.state.route) return;
  _isPopNav = true;
  if (e.state.fn === "sp") sp(e.state.route); else nav(e.state.route);
  _isPopNav = false;
});

function nav(n, skipHistory) {
  var alreadyActiveNav = document.getElementById("page-" + n).classList.contains("active");
  document.querySelectorAll(".page").forEach(function(p) { p.classList.remove("active"); });
  document.querySelectorAll(".nb").forEach(function(b) { b.classList.remove("active"); });
  document.getElementById("page-" + n).classList.add("active");
  // activate sidebar nav item matching this route
  var mainRoutes = ["companies","handymen","nfc-pool","notifications","archive"];
  if (mainRoutes.indexOf(n) !== -1) {
    document.querySelectorAll(".nb").forEach(function(b) {
      if (b.dataset.route === n) b.classList.add("active");
    });
    // Remember the last main tab so a page reload restores it.
    sessionStorage.setItem("hca_last_page", n);
  }
  if (n === "companies") loadCos();
  if (n === "handymen") loadHMs();
  if (n === "clients") loadCls();
  if (n === "orders") loadOrds();
  if (n === "applications") loadApps();
  if (n === "notifications") loadNotifications();
  if (n === "archive") loadArchive();
  if (n === "co-detail") { /* already loaded */ }
  if (n === "card-detail") { /* loaded by showCardDetail */ }
  if (n === "order-detail") { /* loaded by showOrderDetail */ }
  if (n === "pool-batch-detail") { /* loaded by openBatchDetail */ }
  // skipHistory: used for a transient intermediate hop (e.g. nav('companies') right
  // before openCo() immediately pushes 'co-detail') so Back goes straight to whatever
  // was current before this call, instead of stopping on the transient view.
  if (!_isPopNav && !skipHistory && !alreadyActiveNav) history.pushState({ fn: "nav", route: n }, "", location.href);
}
function sp(n) {
  var alreadyActive = document.getElementById("page-" + n).classList.contains("active");
  document.querySelectorAll(".page").forEach(function(p) { p.classList.remove("active"); });
  document.getElementById("page-" + n).classList.add("active");
  if (!_isPopNav && !alreadyActive) history.pushState({ fn: "sp", route: n }, "", location.href);
}
function openModal(id) {
  var el = document.getElementById(id);
  el.classList.add("open");
  // Drawer: animate in after frame
  if (el.classList.contains("drawer-overlay")) {
    requestAnimationFrame(function() {
      var d = el.querySelector(".drawer");
      if (d) d.style.transform = "translateX(0)";
    });
  }
  document.body.style.overflow = "hidden";
  activeModalId = id;
}
function closeModal(id) {
  var el = document.getElementById(id);
  if (el.classList.contains("drawer-overlay")) {
    var d = el.querySelector(".drawer");
    if (d) d.style.transform = "translateX(100%)";
    setTimeout(function() { el.classList.remove("open"); document.body.style.overflow = ""; }, 280);
  } else {
    el.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (activeModalId === id) activeModalId = null;
}

// Global ESC handler — closes the currently open modal/drawer
var activeModalId = null;
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && activeModalId) {
    closeModal(activeModalId);
  }
});
function closeDrawer(e) {
  // Close when clicking backdrop
  if (e.target.classList.contains("drawer-overlay")) {
    closeModal(e.target.id);
  }
}
function toast(m) {
  var e = document.getElementById("toast");
  e.textContent = m; e.classList.add("show");
  setTimeout(function() { e.classList.remove("show"); }, 2500);
}
function cfm(title, sub, cb) {
  document.getElementById("cfTitle").textContent = title;
  document.getElementById("cfSub").textContent = sub;
  var btn = document.getElementById("cfOk");
  btn.textContent = t("btn_confirm");
  btn.disabled = false;
  openModal("mConfirm");
  btn.onclick = async function() {
    btn.disabled = true;
    try {
      await cb(btn);
    } catch (e) {
      console.error(e);
      toast(tf("toast_error_colon", {msg: (e && e.message) || e}));
    } finally {
      btn.textContent = t("btn_confirm");
      btn.disabled = false;
    }
  };
}
function bdg(status) {
  var m = { active: ["ba", t("status_active")], inactive: ["bi", t("status_inactive")], unassigned: ["bu", t("status_available")], assigned: ["bbl", t("pill_with_handyman")], deactivated: ["bi", t("status_deactivated")], new: ["bu", t("badge_new")], in_progress: ["bbl", t("pill_in_progress")], completed: ["ba", t("pill_completed")], cancelled: ["bi", t("pill_cancelled")] };
  var x = m[status] || ["bi", esc(status || "—")];
  return '<span class="badge ' + x[0] + '">' + x[1] + "</span>";
}
function fd(iso) { return iso ? new Date(iso).toLocaleDateString(LOCALE_MAP[LANG]||"en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"; }
function ini(n) { return esc((n || "?").split(" ").map(function(w) { return w[0]; }).join("").slice(0, 2).toUpperCase()); }
function safeUrl(u) { u = String(u || ""); return /^https?:\/\//i.test(u) ? u : ""; }
// Uniform random char from `chars` via the crypto RNG (rejection sampling avoids modulo bias).
function randChar(chars) {
  var lim = 256 - (256 % chars.length), b = new Uint8Array(1);
  do { crypto.getRandomValues(b); } while (b[0] >= lim);
  return chars[b[0] % chars.length];
}
function cp(s) { navigator.clipboard.writeText(s); toast(t("toast_copied")); }

// ── COMPANIES ─────────────────────────────────────────────────
// ── GLOBAL SEARCH ──────────────────────────────────────────────
var gsData = null;

async function openGlobalSearch() {
  var input = document.getElementById("gsInput");
  input.value = "";
  document.getElementById("gsResults").innerHTML = '<div class="empty" style="padding:24px 12px">' + t("gs_start_typing") + '</div>';
  openModal("mGlobalSearch");
  setTimeout(function() { input.focus(); }, 60);
  if (!gsData) {
    try {
      var r = await Promise.all([
        fsL("companies", 500), fsL("handymen", 500), fsL("clients", 500),
        fsL("orders", 1000), fsL("nfc_cards", 3000)
      ]);
      gsData = { companies: r[0], handymen: r[1], clients: r[2], orders: r[3], cards: r[4] };
    } catch (e) { gsData = { companies: [], handymen: [], clients: [], orders: [], cards: [] }; }
  }
}

function gsSection(title, items, renderFn) {
  if (!items.length) return "";
  return '<div class="gs-section-title">' + title + '</div>' + items.map(renderFn).join("");
}

function runGlobalSearch(qRaw) {
  var out = document.getElementById("gsResults");
  var q = (qRaw || "").trim().toLowerCase();
  if (!q) { out.innerHTML = '<div class="empty" style="padding:24px 12px">' + t("gs_start_typing") + '</div>'; return; }
  if (!gsData) { out.innerHTML = '<div class="empty" style="padding:24px 12px">' + t("gs_loading") + '</div>'; return; }

  var coMap = {}; gsData.companies.forEach(function(c) { coMap[c.id] = c; });
  var clMap = {}; gsData.clients.forEach(function(c) { clMap[c.id] = c; });

  var companies = gsData.companies.filter(function(c) {
    return (c.name || "").toLowerCase().includes(q) || (c.location || "").toLowerCase().includes(q) || (c.email || "").toLowerCase().includes(q);
  }).slice(0, 6);

  var handymen = gsData.handymen.filter(function(h) {
    return (h.name || "").toLowerCase().includes(q) || (h.phone || "").toLowerCase().includes(q);
  }).slice(0, 6);

  var clients = gsData.clients.filter(function(c) {
    return (c.name || "").toLowerCase().includes(q) || (c.phone || "").toLowerCase().includes(q) || (c.email || "").toLowerCase().includes(q);
  }).slice(0, 6);

  var orders = gsData.orders.filter(function(o) {
    var cn = (coMap[o.companyId] || {}).name || "";
    var cln = (clMap[o.clientId] || {}).name || "";
    return cn.toLowerCase().includes(q) || cln.toLowerCase().includes(q) || (o.category || "").toLowerCase().includes(q);
  }).slice(0, 6);

  var cards = gsData.cards.filter(function(c) {
    return (c.printId || "").toLowerCase().includes(q) || (c.id || "").toLowerCase().includes(q);
  }).slice(0, 6);

  var html = "";
  html += gsSection(t("gs_section_companies"), companies, function(c) {
    return '<div class="gs-row" onclick="closeModal(\'mGlobalSearch\');nav(\'companies\');openCo(\'' + c.id + '\')">' +
      '<div class="gs-icon">' + ini(c.name) + '</div>' +
      '<div><div class="gs-title">' + esc(c.name || c.id) + '</div><div class="gs-sub">' + esc(c.location || "") + '</div></div>' +
    '</div>';
  });
  html += gsSection(t("gs_section_handymen"), handymen, function(h) {
    return '<div class="gs-row" onclick="closeModal(\'mGlobalSearch\');openHMDetail(\'' + h.id + '\',\'handymen\')">' +
      '<div class="gs-icon">' + ini(h.name) + '</div>' +
      '<div><div class="gs-title">' + esc(h.name || h.id) + '</div><div class="gs-sub">' + esc(h.phone || "") + '</div></div>' +
    '</div>';
  });
  html += gsSection(t("gs_section_clients"), clients, function(c) {
    return '<div class="gs-row" onclick="closeModal(\'mGlobalSearch\');openCl(\'' + c.id + '\')">' +
      '<div class="gs-icon">' + ini(c.name) + '</div>' +
      '<div><div class="gs-title">' + esc(c.name || c.id) + '</div><div class="gs-sub">' + esc(c.phone || c.email || "") + '</div></div>' +
    '</div>';
  });
  html += gsSection(t("gs_section_orders"), orders, function(o) {
    var cn = (coMap[o.companyId] || {}).name || "—";
    var cln = (clMap[o.clientId] || {}).name || "—";
    return '<div class="gs-row" onclick="closeModal(\'mGlobalSearch\');showOrderDetail(\'' + o.id + '\',\'companies\')">' +
      '<div class="gs-icon">📋</div>' +
      '<div><div class="gs-title">' + esc(cln) + ' · ' + esc(o.category || t("gs_order_fallback")) + '</div><div class="gs-sub">' + esc(cn) + '</div></div>' +
    '</div>';
  });
  html += gsSection(t("gs_section_cards"), cards, function(c) {
    return '<div class="gs-row" onclick="closeModal(\'mGlobalSearch\');nav(\'card-detail\');showCardDetail(\'' + c.id + '\')">' +
      '<div class="gs-icon">💳</div>' +
      '<div><div class="gs-title">' + esc(c.printId || c.id) + '</div><div class="gs-sub">' + esc((coMap[c.companyId] || {}).name || t("gs_in_stock")) + '</div></div>' +
    '</div>';
  });

  out.innerHTML = html || '<div class="empty" style="padding:24px 12px">' + tf("gs_no_results", {q: esc(qRaw)}) + '</div>';
}

var coViewMode = "grid";
var coPendingApps = [];

function switchCoView(mode) {
  coViewMode = mode;
  var gridBtn = document.getElementById("coViewGridBtn"), listBtn = document.getElementById("coViewListBtn");
  if (gridBtn) gridBtn.classList.toggle("active", mode === "grid");
  if (listBtn) listBtn.classList.toggle("active", mode === "list");
  document.getElementById("coGrid").style.display = mode === "grid" ? "" : "none";
  document.getElementById("coListWrap").style.display = mode === "list" ? "" : "none";
}

async function loadCos() {
  var g = document.getElementById("coGrid");
  g.innerHTML = '<div class="muted" style="padding:16px">' + t("loading_text") + '</div>';
  var results = await Promise.all([fsL("companies"), fsL("nfc_cards"), fsL("company_applications")]);
  var cos = results[0], cards = results[1], apps = results[2];
  CC.cos = {};
  cos.forEach(function(c) { CC.cos[c.id] = c; });
  var cs = {};
  cards.forEach(function(c) {
    if (!cs[c.companyId]) cs[c.companyId] = { t: 0, a: 0, u: 0 };
    cs[c.companyId].t++;
    if (c.status === "active") cs[c.companyId].a++;
    if (c.status === "unassigned") cs[c.companyId].u++;
  });
  CC._coStats = cs;

  // Flag + sort: recently-created companies pinned to top with a "New" badge
  var weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  cos.forEach(function(c) { c._isNew = !!(c.createdAt && new Date(c.createdAt).getTime() > weekAgo); });
  cos.sort(function(a, b) {
    if (a._isNew !== b._isNew) return a._isNew ? -1 : 1;
    return (b.createdAt || "").localeCompare(a.createdAt || "");
  });
  CC._allCos = cos;

  // Pending company applications surfaced at the top, actionable inline
  coPendingApps = (apps || []).filter(function(a) { return a.status === "pending"; });
  coPendingApps.sort(function(a, b) { return (b.createdAt || "").localeCompare(a.createdAt || ""); });
  renderCoPending();

  // City/location filter options
  var locSel = document.getElementById("coLocationFilter");
  if (locSel) {
    var curVal = locSel.value;
    var locs = Array.from(new Set(cos.map(function(c) { return (c.location || "").trim(); }).filter(Boolean))).sort();
    locSel.innerHTML = '<option value="">All cities</option>' + locs.map(function(l) {
      return '<option value="' + esc(l) + '">' + esc(l) + '</option>';
    }).join("");
    if (locs.indexOf(curVal) !== -1) locSel.value = curVal;
  }

  renderCos();
}

function renderCoPending() {
  var el = document.getElementById("coPending");
  if (!el) return;
  if (!coPendingApps.length) { el.innerHTML = ""; return; }
  el.innerHTML = coPendingApps.map(function(a) {
    return '<div class="co-pending-card">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">' +
        '<div>' +
          '<span class="pg-badge pg-badge-yellow" style="margin-right:8px">' + t("pill_pending") + '</span>' +
          '<strong style="font-size:16px;font-family:\'Inter\',sans-serif">' + esc(a.companyName || "—") + '</strong>' +
          '<div style="color:#858585;font-size:13px;margin-top:4px">' + esc(a.contactPerson || "") +
            (a.requestedCards ? (" · " + tf("notif_cards_requested_suffix", {count: a.requestedCards})) : "") +
            (a.region ? (" · " + esc(a.region)) : "") + '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-shrink:0">' +
          '<button class="pg-decision-btn pg-decision-approve" onclick="coApproveApp(\'' + a.id + '\')">' + t("btn_approve") + '</button>' +
          '<button class="pg-decision-btn pg-decision-reject" onclick="coRejectApp(\'' + a.id + '\')">' + t("btn_reject") + '</button>' +
          '<button class="cd-action-btn" onclick="nav(\'app-detail\');showAppDetail(\'' + a.id + '\')" title="View details" style="width:36px;height:36px;border:1px solid #eceae6;border-radius:50%">' +
            '<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3681 13.4307L15.0556 20.7432C14.9401 20.8508 14.7873 20.9094 14.6295 20.9066C14.4716 20.9039 14.321 20.8399 14.2093 20.7283C14.0977 20.6166 14.0337 20.466 14.0309 20.3081C14.0281 20.1502 14.0867 19.9975 14.1944 19.8819L20.4659 13.6094H4.0625C3.90088 13.6094 3.74589 13.5452 3.63161 13.431C3.51733 13.3167 3.45313 13.1617 3.45312 13.0001C3.45312 12.8384 3.51733 12.6834 3.63161 12.5692C3.74589 12.4549 3.90088 12.3907 4.0625 12.3907H20.4659L14.1944 6.11818C14.0867 6.00267 14.0281 5.84988 14.0309 5.69201C14.0337 5.53414 14.0977 5.38351 14.2093 5.27187C14.321 5.16022 14.4716 5.09626 14.6295 5.09348C14.7873 5.09069 14.9401 5.14929 15.0556 5.25693L22.3681 12.5694C22.4822 12.6837 22.5463 12.8386 22.5463 13.0001C22.5463 13.1615 22.4822 13.3164 22.3681 13.4307Z" fill="#4F00DF"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join("");
}

async function coApproveApp(id) {
  if (!confirm(t("confirm_approve_application"))) return;
  await updateAppStatus(id, "approved", true);
  loadCos();
  loadNotifications();
}
async function coRejectApp(id) {
  if (!confirm(t("confirm_reject_application"))) return;
  await updateAppStatus(id, "rejected", true);
  loadCos();
  loadNotifications();
}

async function coToggleActive(id, currentStatus, evt) {
  if (evt) evt.stopPropagation();
  var ns = currentStatus === "inactive" ? "active" : "inactive";
  if (ns === "inactive" && !confirm(t("confirm_block_company"))) return;
  var ok = await fsPatchFields("companies", id, { status: sv(ns) });
  if (ok) {
    if (CC.cos[id]) CC.cos[id].status = ns;
    var rec = (CC._allCos || []).find(function(c) { return c.id === id; });
    if (rec) rec.status = ns;
    toast(ns === "active" ? t("toast_company_unblocked") : t("toast_company_blocked"));
    renderCos();
  }
}

async function promptAddLeads() {
  if (!cdId) return;
  var input = prompt(t("prompt_add_leads_count"), "2");
  if (input === null) return;
  var n = parseInt(input, 10);
  if (isNaN(n) || n === 0) { toast(t("toast_invalid_number")); return; }
  var current = (CC.cos[cdId] || {}).bonusLeads || 0;
  var newVal = Math.max(0, current + n);
  var ok = await fsPatchFields("companies", cdId, { bonusLeads: nv(newVal) });
  if (ok) {
    if (CC.cos[cdId]) CC.cos[cdId].bonusLeads = newVal;
    toast(tf("toast_leads_updated", { count: newVal }));
    loadCDCards();
  } else {
    toast(t("toast_error_updating_status"));
  }
}

async function cdToggleActive() {
  if (!cdId) return;
  var status = (CC.cos[cdId] || {}).status || "active";
  await coToggleActive(cdId, status, null);
  updateCdStatusBadge();
}
function updateCdStatusBadge() {
  var badge = document.getElementById("cdStatusBadge");
  var btn = document.getElementById("cdBlockBtn");
  if (!cdId || !badge || !btn) return;
  var ok = (CC.cos[cdId] || {}).status !== "inactive";
  badge.style.display = ok ? "none" : "inline-block";
  badge.textContent = t("badge_blocked");
  btn.title = ok ? t("title_block_company") : t("title_unblock_company");
  btn.innerHTML = ok
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M5.5 5.5l13 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/></svg>';
}

var coStatusFilter = "all";
function filterCoStatus(s, btn) {
  coStatusFilter = s;
  document.querySelectorAll("#page-companies .pg-pill").forEach(function(b) { b.classList.remove("active"); });
  if (btn) btn.classList.add("active");
  renderCos();
}
function getFilteredCos() {
  var all = CC._allCos || [];
  var q = ((document.getElementById("coSearchInput") || {}).value || "").trim().toLowerCase();
  var loc = (document.getElementById("coLocationFilter") || {}).value || "";
  return all.filter(function(c) {
    if (coStatusFilter === "active" && c.status === "inactive") return false;
    if (coStatusFilter === "inactive" && c.status !== "inactive") return false;
    if (loc && (c.location || "") !== loc) return false;
    if (q) {
      var hit = (c.name || "").toLowerCase().includes(q) ||
                (c.location || "").toLowerCase().includes(q) ||
                (c.email || "").toLowerCase().includes(q);
      if (!hit) return false;
    }
    return true;
  });
}

function renderCos() {
  var cos = getFilteredCos();
  var cs = CC._coStats || {};
  var g = document.getElementById("coGrid");
  var lw = document.getElementById("coListWrap");

  if (!cos.length) {
    var emptyHtml = '<div class="empty">' + t("empty_no_companies") + '</div>';
    g.innerHTML = emptyHtml; lw.innerHTML = emptyHtml;
    return;
  }

  g.innerHTML = cos.map(function(c) {
    var s = cs[c.id] || { t: 0, a: 0, u: 0 };
    var ok = c.status !== "inactive";
    var nm = esc(c.name || c.id || t("label_unnamed"));
    var initials = nm.split(" ").map(function(w){return w[0]||"";}).join("").slice(0,2).toUpperCase();
    return '<div class="coc' + (ok ? "" : " off") + '" onclick="openCo(\'' + c.id + '\')">' +
      '<div class="coc-name-row" style="justify-content:space-between">' +
        '<div style="display:flex;align-items:center;gap:12px;min-width:0">' +
          '<div class="coc-avatar' + (ok ? "" : " off") + '">' + initials + '</div>' +
          '<div class="cn">' + nm + (c._isNew ? '<span class="co-badge-new">' + t("badge_new") + '</span>' : '') + (!ok ? '<span class="co-badge-blocked">' + t("badge_blocked") + '</span>' : '') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="cm">' +
        (c.location ? '<span>' + esc(c.location) + '</span>' : '') +
        (c.email ? '<span>' + esc(c.email) + '</span>' : '') +
      '</div>' +
      '<div class="co-divider"></div>' +
      '<div class="cst">' +
        '<div class="cst-item"><div class="sn">' + s.t + '</div><div class="sl">' + t("stat_cards") + '</div></div>' +
        '<div class="cst-item"><div class="sn">' + s.a + '</div><div class="sl">' + t("status_active") + '</div></div>' +
        '<div class="cst-item"><div class="sn">' + s.u + '</div><div class="sl">' + t("status_available") + '</div></div>' +
      '</div>' +
    '</div>';
  }).join("");

  lw.innerHTML = cos.map(function(c) {
    var s = cs[c.id] || { t: 0, a: 0, u: 0 };
    var ok = c.status !== "inactive";
    var nm = esc(c.name || c.id || t("label_unnamed"));
    var initials = nm.split(" ").map(function(w){return w[0]||"";}).join("").slice(0,2).toUpperCase();
    return '<div class="co-list-row' + (ok ? "" : " off") + '" onclick="openCo(\'' + c.id + '\')">' +
      '<div class="coc-avatar' + (ok ? "" : " off") + '" style="width:36px;height:36px;font-size:13px">' + initials + '</div>' +
      '<div class="co-list-name">' + nm + (c._isNew ? '<span class="co-badge-new">' + t("badge_new") + '</span>' : '') + (!ok ? '<span class="co-badge-blocked">' + t("badge_blocked") + '</span>' : '') + '</div>' +
      '<div class="co-list-meta">' + esc(c.location || "—") + '</div>' +
      '<div class="co-list-meta">' + esc(c.email || "—") + '</div>' +
      '<div class="co-list-stats">' +
        '<div class="co-list-stat"><div class="sn">' + s.t + '</div><div class="sl">' + t("stat_cards") + '</div></div>' +
        '<div class="co-list-stat"><div class="sn">' + s.a + '</div><div class="sl">' + t("status_active") + '</div></div>' +
        '<div class="co-list-stat"><div class="sn">' + s.u + '</div><div class="sl">' + t("status_available") + '</div></div>' +
      '</div>' +
    '</div>';
  }).join("");
}

function openAddCompany() {
  document.getElementById("mCoT").textContent = t("drawer_new_company_title");
  document.getElementById("editCoId").value = "";
  document.getElementById("deleteCoBtn").style.display = "none";
  ["coName", "coLoc", "coEmail", "coPhone", "coDesc"].forEach(function(id) { document.getElementById(id).value = ""; });
  document.getElementById("coBonusLeads").value = "0";
  // Reset drawer position before opening
  var drawer = document.querySelector("#mAddCo .drawer");
  if (drawer) drawer.style.transform = "translateX(100%)";
  openModal("mAddCo");
}

function editCompany() {
  var c = CC.cos[cdId] || {};
  document.getElementById("mCoT").textContent = t("drawer_edit_company_title");
  document.getElementById("editCoId").value = cdId;
  // Show delete and deactivate buttons
  var delBtn = document.getElementById("deleteCoBtn");
  var deactBtn = document.getElementById("deactivateCoBtn");
  var deactLabel = document.getElementById("deactivateCoBtnLabel");
  if (delBtn) delBtn.style.display = "flex";
  if (deactBtn) {
    deactBtn.style.display = "flex";
    var isActive = c.status !== "inactive";
    if (deactLabel) deactLabel.textContent = isActive ? t("btn_deactivate") : t("btn_activate");
    deactBtn.style.background = isActive ? "#fff4e5" : "#f0fdf4";
    deactBtn.style.color = isActive ? "#c47000" : "#166534";
    deactBtn.style.borderColor = isActive ? "#f5c06a" : "#86efac";
  }
  document.getElementById("coName").value = c.name || "";
  document.getElementById("coLoc").value = c.location || "";
  document.getElementById("coEmail").value = c.email || "";
  document.getElementById("coPhone").value = c.phone || "";
  document.getElementById("coDesc").value = c.description || "";
  document.getElementById("coBonusLeads").value = c.bonusLeads || 0;
  // Reset drawer position before opening
  var drawer = document.querySelector("#mAddCo .drawer");
  if (drawer) drawer.style.transform = "translateX(100%)";
  openModal("mAddCo");
}

async function saveCo() {
  var name = document.getElementById("coName").value.trim();
  if (!name) { toast(t("toast_enter_company_name")); return; }
  var btn = document.querySelector(".dbtn-save");
  if (btn) btn.classList.add("loading");
  var eid = document.getElementById("editCoId").value;
  var id = eid || (name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now().toString(36));
  var ec = CC.cos[eid] || {};
  var bonusLeads = parseInt(document.getElementById("coBonusLeads").value, 10);
  if (isNaN(bonusLeads) || bonusLeads < 0) bonusLeads = 0;
  var ok = await fsP("companies", id, {
    name: sv(name), location: sv(document.getElementById("coLoc").value),
    email: sv(document.getElementById("coEmail").value), phone: sv(document.getElementById("coPhone").value),
    description: sv(document.getElementById("coDesc").value),
    status: sv(ec.status || "active"), createdAt: sv(ec.createdAt || new Date().toISOString()),
    bonusLeads: nv(bonusLeads)
  });
  if (btn) btn.classList.remove("loading");
  if (ok) { closeModal("mAddCo"); toast(eid ? t("toast_company_updated") : t("toast_company_created")); if (eid) openCo(eid); else loadCos(); }
  else toast(t("toast_error_saving_company"));
}

async function toggleCo() {
  var co = CC.cos[cdId];
  var ns = co.status === "inactive" ? "active" : "inactive";
  var ok = await fsPatchFields("companies", cdId, { status: sv(ns) });
  if (ok) {
    CC.cos[cdId].status = ns;
    closeModal("mAddCo");
    await openCo(cdId);
    toast(ns === "active" ? t("toast_company_activated") : t("toast_company_deactivated"));
  }
}

async function deleteCo() {
  closeModal("mAddCo");
  var co = CC.cos[cdId] || {};
  var name = co.name || cdId;

  // Pull in every row that references this company. card_requests,
  // lead_requests, company_tokens and handymen all have a foreign key to
  // companies(id) — deleting the company first (as this used to do) throws
  // a constraint violation that was never checked, so the delete silently
  // "succeeded" in the UI while the company row was still there.
  var results = await Promise.all([
    fsQ("nfc_cards", [{field:"companyId", value:cdId}]),
    fsQ("handymen", [{field:"companyIds", value:cdId, op:"ARRAY_CONTAINS"}]),
    fsQ("card_requests", [{field:"companyId", value:cdId}]),
    fsQ("lead_requests", [{field:"companyId", value:cdId}]),
    fsQ("company_tokens", [{field:"companyId", value:cdId}])
  ]);
  var cards = results[0], handymen = results[1], cardReqs = results[2], leadReqs = results[3], tokens = results[4];
  var details = "Cards: " + cards.length + " · Handymen: " + handymen.length;

  cfm(
    tf("confirm_delete_company", {name: name}),
    tf("confirm_delete_company_sub", {details: details}),
    async function(btn) {
      if (btn) btn.textContent = t("confirm_archiving");

      // Save to archive
      var archiveId = "arch-" + Date.now().toString(36);
      var now = new Date();
      var expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      var archiveData = {
        type: sv("company"),
        name: sv(name),
        deletedAt: sv(now.toISOString()),
        expiresAt: sv(expiresAt.toISOString()),
        company: sv(JSON.stringify(co)),
        cards: sv(JSON.stringify(cards)),
        handymen: sv(JSON.stringify(handymen)),
        deletedCards: true,
        deletedHandymen: true
      };
      var archiveOk = await fsP("archive", archiveId, archiveData);
      if (!archiveOk) {
        if (!confirm(t("confirm_archive_save_failed"))) return;
      }

      // Download JSON backup (includes the request/token rows too, in case
      // they're ever needed — they aren't restorable from Archive like the
      // company/cards/handymen are)
      var backup = { company: co, cards: cards, handymen: handymen, cardRequests: cardReqs, leadRequests: leadReqs, tokens: tokens, archivedAt: now.toISOString() };
      var blob = new Blob([JSON.stringify(backup, null, 2)], {type:"application/json"});
      var link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "backup-" + name.replace(/\s+/g,"-") + "-" + now.toISOString().slice(0,10) + ".json";
      link.click();

      // Delete everything that references this company FIRST, then the
      // company row itself.
      for (var i = 0; i < cards.length; i++) {
        if (btn) btn.textContent = tf("confirm_deleting_cards_progress", {done: i+1, total: cards.length});
        await fsDel("nfc_cards", cards[i].id);
      }
      if (btn) btn.textContent = t("confirm_deleting_handymen_progress");
      for (var i = 0; i < handymen.length; i++) await fsDel("handymen", handymen[i].id);
      for (var i = 0; i < cardReqs.length; i++) await fsDel("card_requests", cardReqs[i].id);
      for (var i = 0; i < leadReqs.length; i++) await fsDel("lead_requests", leadReqs[i].id);
      for (var i = 0; i < tokens.length; i++) await fsDel("company_tokens", tokens[i].id);

      if (btn) btn.textContent = t("confirm_deleting");
      var delOk = await fsDel("companies", cdId);
      if (!delOk) {
        closeModal("mConfirm");
        toast(t("toast_error_deleting_company"));
        return;
      }

      closeModal("mConfirm");
      toast(tf("toast_archived_deleted", {name: name}));
      loadArchiveBadge();
      nav("companies");
    }
  );
}

// ── COMPANY DETAIL ────────────────────────────────────────────
async function openCo(id) {
  cdId = id; cdCF = "all";
  cdOrdersLoaded = false; cdClientsLoaded = false;
  nav("co-detail");
  var c = CC.cos[id] || { name: id };
  document.getElementById("cdName").textContent = c.name || id;
  var meta = [c.email, c.phone, c.location].filter(Boolean).join(" · ");
  document.getElementById("cdMeta").textContent = meta || "—";
  updateCdStatusBadge();
  // Reset tab to cards
  switchCDTab("cards");
  // Load both
  await Promise.all([loadCDCards(), loadCDHM()]);
}

var cdOrdersLoaded = false, cdClientsLoaded = false;
var cdOrdersData = [];

function switchCDTab(tab) {
  var panelIds = { cards: "panelCards", hm: "panelHM", orders: "panelOrders", clients: "panelClients" };
  var tabIds = { cards: "tabCards", hm: "tabHM", orders: "tabOrders", clients: "tabClients" };
  Object.keys(panelIds).forEach(function(t) {
    document.getElementById(panelIds[t]).style.display = (t === tab) ? "block" : "none";
    document.getElementById(tabIds[t]).classList.toggle("active", t === tab);
  });
  if (tab === "orders" && !cdOrdersLoaded) { cdOrdersLoaded = true; loadCDOrders(); }
  if (tab === "clients" && !cdClientsLoaded) { cdClientsLoaded = true; loadCDClients(); }
}

async function loadCDOrders() {
  var tb = document.getElementById("cdOrdersBody");
  tb.innerHTML = '<tr><td colspan="6" class="pg-empty">' + t("loading_text") + '</td></tr>';
  var results = await Promise.all([
    fsQ("orders", [{field:"companyId", value: cdId}]),
    fsL("handymen", 500),
    fsL("clients", 500)
  ]);
  var ords = results[0];
  var hma = {}; results[1].forEach(function(h){ hma[h.id] = h.name; });
  var cla = {}; results[2].forEach(function(c){ cla[c.id] = c; });
  ords.sort(function(a,b){ return (b.createdAt||"").localeCompare(a.createdAt||""); });
  cdOrdersData = ords;
  var cntEl = document.getElementById("cdOrdCnt");
  if (cntEl) cntEl.textContent = ords.length ? "(" + ords.length + ")" : "";
  if (!ords.length) { tb.innerHTML = '<tr><td colspan="6" class="pg-empty">' + t("empty_no_orders") + '</td></tr>'; return; }
  tb.innerHTML = ords.map(function(o) {
    var cln = (cla[o.clientId]||{}).name || o.clientId || "—";
    return '<tr style="cursor:pointer" onclick="showOrderDetail(\''+o.id+'\',\'co-detail\')">' +
      '<td style="color:#858585">' + fd(o.createdAt) + '</td>' +
      '<td>' + esc(cln) + '</td>' +
      '<td>' + esc(hma[o.handymanId] || "—") + '</td>' +
      '<td>' + (esc(o.category) || "—") + '</td>' +
      '<td>' + bdg(o.status || "new") + '</td>' +
      '<td style="font-weight:600">' + (o.price ? "$" + o.price : "—") + '</td>' +
    '</tr>';
  }).join("");
}

async function loadCDClients() {
  var tb = document.getElementById("cdClientsBody");
  tb.innerHTML = '<tr><td colspan="5" class="pg-empty">' + t("loading_text") + '</td></tr>';
  var ords = await fsQ("orders", [{field:"companyId", value: cdId}]);
  var counts = {};
  ords.forEach(function(o){ if (o.clientId) counts[o.clientId] = (counts[o.clientId]||0) + 1; });
  var clientIds = Object.keys(counts);
  var cntEl = document.getElementById("cdClCnt");
  if (cntEl) cntEl.textContent = clientIds.length ? "(" + clientIds.length + ")" : "";
  if (!clientIds.length) { tb.innerHTML = '<tr><td colspan="5" class="pg-empty">' + t("empty_no_clients") + '</td></tr>'; return; }
  var clients = await Promise.all(clientIds.map(function(id){ return fsGet("clients", id); }));
  tb.innerHTML = clientIds.map(function(id, i) {
    var c = clients[i] || {};
    return '<tr>' +
      '<td><div style="display:flex;align-items:center;gap:10px"><div class="pg-av">' + ini(c.name) + '</div>' +
        '<span class="pg-link" onclick="openCl(\''+id+'\')">' + (esc(c.name) || id) + '</span></div></td>' +
      '<td style="color:#858585">' + (esc(c.phone) || "—") + '</td>' +
      '<td style="color:#858585">' + (esc(c.email) || "—") + '</td>' +
      '<td style="font-weight:700;color:#4f00df">' + counts[id] + '</td>' +
      '<td style="text-align:right"><button class="cd-action-btn" onclick="openCl(\''+id+'\')" title="View"><svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3681 13.4307L15.0556 20.7432C14.9401 20.8508 14.7873 20.9094 14.6295 20.9066C14.4716 20.9039 14.321 20.8399 14.2093 20.7283C14.0977 20.6166 14.0337 20.466 14.0309 20.3081C14.0281 20.1502 14.0867 19.9975 14.1944 19.8819L20.4659 13.6094H4.0625C3.90088 13.6094 3.74589 13.5452 3.63161 13.431C3.51733 13.3167 3.45313 13.1617 3.45312 13.0001C3.45312 12.8384 3.51733 12.6834 3.63161 12.5692C3.74589 12.4549 3.90088 12.3907 4.0625 12.3907H20.4659L14.1944 6.11818C14.0867 6.00267 14.0281 5.84988 14.0309 5.69201C14.0337 5.53414 14.0977 5.38351 14.2093 5.27187C14.321 5.16022 14.4716 5.09626 14.6295 5.09348C14.7873 5.09069 14.9401 5.14929 15.0556 5.25693L22.3681 12.5694C22.4822 12.6837 22.5463 12.8386 22.5463 13.0001C22.5463 13.1615 22.4822 13.3164 22.3681 13.4307Z" fill="#4F00DF"/></svg></button></td>' +
    '</tr>';
  }).join("");
}

async function loadCDHM() {
  var hm = await fsQ("handymen", [{ field: "companyIds", value: cdId, op: "ARRAY_CONTAINS" }]);
  cdHM = hm;
  renderCDHMTable(hm);
}

function renderCDHMTable(hm) {
  document.getElementById("cdHMCnt").textContent = hm.length ? "(" + hm.length + ")" : "";
  var tb = document.getElementById("cdHMBody");
  if (!hm.length) { tb.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:32px;color:#888;font-size:14px">' + t("empty_no_handymen_yet") + '</td></tr>'; return; }
  tb.innerHTML = hm.map(function(h) {
    var initials = ini(h.name);
    var cardTok = h.assignedCardToken ? '<span style="text-decoration:underline;cursor:pointer;color:#111" onclick="copyText(\''+ h.assignedCardToken +'\')">' + esc(h.assignedCardToken) + '</span>' : '<span style="color:#bbb">—</span>';
    var statusBadge = h.status === "inactive"
      ? '<span class="cd-status-inactive">' + t("status_inactive") + '</span>'
      : '<span class="cd-status-active">' + t("status_active") + '</span>';
    return '<tr>' +
      '<td><div style="display:flex;align-items:center;gap:10px">' +
        '<div class="hm-av">' + initials + '</div>' +
        '<span style="text-decoration:underline;cursor:pointer;font-size:14px;color:#111" onclick="openHMDetail(\''+ h.id +'\',\'co-detail\')">' + esc(h.name||"—") + '</span>' +
      '</div></td>' +
      '<td style="color:#858585">' + esc(h.phone||"—") + '</td>' +
      '<td style="color:#4f00df;font-weight:700;font-size:14px">' + esc((h.skills||[]).slice(0,2).join(", ")) + '</td>' +
      '<td>' + cardTok + '</td>' +
      '<td>' + statusBadge + '</td>' +
      '<td style="text-align:right;white-space:nowrap;vertical-align:middle">' +
        '<button class="cd-action-btn" onclick="editHM(\''+ h.id +'\')" title="Edit"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6484 5.84219L14.157 2.35079C14.0555 2.24921 13.9349 2.16864 13.8022 2.11366C13.6695 2.05869 13.5272 2.0304 13.3836 2.0304C13.24 2.0304 13.0977 2.05869 12.965 2.11366C12.8323 2.16864 12.7117 2.24921 12.6102 2.35079L2.97656 11.9852C2.87479 12.0866 2.7941 12.2071 2.73912 12.3399C2.68415 12.4726 2.65599 12.6149 2.65625 12.7586V16.25C2.65625 16.5401 2.77149 16.8183 2.9766 17.0234C3.18172 17.2285 3.45992 17.3438 3.75 17.3438H7.24141C7.38508 17.344 7.52739 17.3159 7.66013 17.2609C7.79288 17.2059 7.91343 17.1252 8.01485 17.0234L17.6484 7.38907C17.75 7.2875 17.8306 7.16692 17.8856 7.03422C17.9405 6.90151 17.9688 6.75927 17.9688 6.61563C17.9688 6.47199 17.9405 6.32975 17.8856 6.19705C17.8306 6.06434 17.75 5.94376 17.6484 5.84219ZM7.35156 16.3602C7.3224 16.3895 7.28278 16.4061 7.24141 16.4063H3.75C3.70856 16.4063 3.66882 16.3898 3.63952 16.3605C3.61021 16.3312 3.59375 16.2914 3.59375 16.25V12.7586C3.59393 12.7172 3.6105 12.6776 3.63985 12.6484L10.625 5.66251L14.3367 9.37501L7.35156 16.3602ZM16.9852 6.72657L15 8.71172L11.2883 5.00001L13.2734 3.01407C13.288 2.99954 13.3052 2.98802 13.3242 2.98015C13.3431 2.97229 13.3635 2.96824 13.384 2.96824C13.4045 2.96824 13.4249 2.97229 13.4438 2.98015C13.4628 2.98802 13.48 2.99954 13.4945 3.01407L16.9852 6.50547C16.9997 6.51999 17.0112 6.53722 17.0191 6.55619C17.0269 6.57516 17.031 6.59549 17.031 6.61602C17.031 6.63655 17.0269 6.65689 17.0191 6.67586C17.0112 6.69482 16.9997 6.71206 16.9852 6.72657Z" fill="#343330"/></svg></button>' +
      '</td></tr>';
  }).join("");
}

function filterHMSearch(q) {
  var all = cdHM || [];
  if (!q) { renderCDHMTable(all); return; }
  q = q.toLowerCase();
  renderCDHMTable(all.filter(function(h){ return (h.name||"").toLowerCase().includes(q)||(h.phone||"").toLowerCase().includes(q); }));
}

function deleteHMFromDrawer() {
  var hmId = document.getElementById("editHMId").value;
  if (!hmId) return;
  closeModal("mAddHM");
  cfm(t("confirm_delete_handyman_title"), t("confirm_cannot_be_undone"), async function() {
    var ok = await fsDel("handymen", hmId);
    closeModal("mConfirm");
    if (ok) { toast(t("toast_handyman_deleted_check")); await loadCDHM(); } else toast(t("toast_error_deleting"));
  });
}

function deleteHMConfirm(hmId) {
  confirm2(t("confirm_delete_this_handyman"), t("confirm_cannot_be_undone"), async function() {
    var ok = await fsDel("handymen", hmId);
    if (ok) { toast(t("toast_handyman_deleted")); await loadCDHM(); } else toast(t("toast_error_deleting"));
  });
}

async function loadCDCards() {
  var tb = document.getElementById("cdCardsBody");
  tb.innerHTML = '<tr><td colspan="8" class="empty">Loading...</td></tr>';
  var results = await Promise.all([
    fsQ("nfc_cards", [{ field: "companyId", value: cdId }]),
    fsQ("handymen", [{ field: "companyIds", value: cdId, op: "ARRAY_CONTAINS" }])
  ]);
  cdCards = results[0];
  cdHM = results[1];
  renderCDHMTable(cdHM);

  // Build lookup: token → handyman object
  var hmByToken = {};
  cdHM.forEach(function(h) { if (h.assignedCardToken) hmByToken[h.assignedCardToken] = h; });
  // Build lookup: handymanId → handyman object
  var hmById = {};
  cdHM.forEach(function(h) { hmById[h.id] = h; });

  document.getElementById("cdCCnt").textContent = "(" + cdCards.length + ")";
  var s = { t: cdCards.length, u: 0, wh: 0, a: 0, d: 0 };
  cdCards.forEach(function(c) {
    var isWithHM = c.status === "assigned" || !!hmByToken[c.id];
    if (isWithHM) s.wh++;
    else if (c.status === "active") s.a++;
    else if (c.status === "deactivated") s.d++;
    else s.u++;
  });
  var bonusLeadsLeft = (CC.cos[cdId] || {}).bonusLeads || 0;
  document.getElementById("cdStats").innerHTML =
    '<div class="cd-stat"><div class="cd-stat-num">' + s.t + '</div><div class="cd-stat-label">' + t("stat_total_cards") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + s.u + '</div><div class="cd-stat-label">' + t("status_available") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + s.wh + '</div><div class="cd-stat-label">' + t("stat_with_handymen") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + s.a + '</div><div class="cd-stat-label">' + t("stat_activated_by_clients") + '</div></div>' +
    '<div class="cd-stat" style="position:relative">' +
      '<div class="cd-stat-num">' + bonusLeadsLeft + '</div><div class="cd-stat-label">' + t("stat_bonus_leads_left") + '</div>' +
      '<button class="cd-action-btn" onclick="promptAddLeads()" title="' + t("btn_add_leads") + '" style="position:absolute;top:8px;right:8px;width:26px;height:26px;border:1px solid #eceae6;border-radius:50%">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#164e23" stroke-width="2" stroke-linecap="round"/></svg>' +
      '</button>' +
    '</div>';
  CC._hmByToken = hmByToken;
  CC._hmById = hmById;
  renderCDCards();
}

function renderCDCards() {
  var tb = document.getElementById("cdCardsBody");
  var hmByToken = CC._hmByToken || {};
  var hmById = CC._hmById || {};
  var searchQ = (document.getElementById("cardSearchInput") ? document.getElementById("cardSearchInput").value.trim().toLowerCase() : "");
  var fil = cdCards.filter(function(card) {
    var isWithHM = card.status === "assigned" || !!hmByToken[card.id];
    var matchesFilter = true;
    if (cdCF === "assigned") matchesFilter = isWithHM;
    else if (cdCF === "unassigned") matchesFilter = !isWithHM && card.status !== "active" && card.status !== "deactivated";
    else if (cdCF !== "all") matchesFilter = card.status === cdCF;
    if (!matchesFilter) return false;
    if (searchQ) {
      var pid = (card.printId || "").toLowerCase();
      var tok = card.id.toLowerCase();
      return pid.includes(searchQ) || tok.includes(searchQ);
    }
    return true;
  });

  document.getElementById("cdCCnt").textContent = fil.length ? "(" + fil.length + ")" : "";

  if (!fil.length) {
    tb.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:32px;color:#888;font-size:14px">' + t("empty_no_cards_match_filter") + '</td></tr>';
    return;
  }

  tb.innerHTML = fil.map(function(card) {
    var pid = card.printId ? '<span class="cd-pid">' + String(card.printId).padStart(6,"0") + '</span>' : '<span style="color:#ccc">—</span>';
    var tok = '<span class="cd-token">' + esc(card.id) + '</span>';
    // Status badge
    var st = card.status || "unassigned";
    var stBadge;
    if (st === "active") stBadge = '<span class="cd-status-active">' + t("status_activated") + '</span>';
    else if (st === "deactivated") stBadge = '<span class="cd-status-inactive">' + t("status_deactivated") + '</span>';
    else stBadge = '<span class="cd-status-avail">' + t("status_available") + '</span>';
    // Handyman
    var hmName = "—";
    var hm = hmByToken[card.id];
    if (!hm && card.handymanId) hm = hmById[card.handymanId];
    if (hm) hmName = '<span style="text-decoration:underline;cursor:pointer" onclick="openHMDetail(\''+ hm.id +'\',\'co-detail\')">' + esc(hm.name) + '</span>';
    // Client
    var clientName = card.clientName ? '<span style="text-decoration:underline">' + esc(card.clientName) + '</span>' : '<span style="color:#ccc">—</span>';
    // Date
    var dt = card.createdAt ? new Date(card.createdAt).toLocaleDateString(LOCALE_MAP[LANG]||"en-US",{month:"short",day:"numeric",year:"numeric"}) : "—";
    var checked = "";
    return '<tr>' +
      '<td><input type="checkbox" class="cd-cb card-cb" value="' + card.id + '" ' + checked + ' onchange="updateBulk()"/></td>' +
      '<td>' + pid + '</td>' +
      '<td>' + tok + '</td>' +
      '<td>' + stBadge + '</td>' +
      '<td>' + hmName + '</td>' +
      '<td>' + clientName + '</td>' +
      '<td style="color:#858585">' + dt + '</td>' +
      '<td style="text-align:right;white-space:nowrap">' +
        '<button class="cd-action-btn" onclick="copyText(\''+ card.id +'\')" title="Copy token"><svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6875 7.51562H4.0625C3.6854 7.51562 3.32374 7.66543 3.05708 7.93208C2.79043 8.19874 2.64063 8.5604 2.64062 8.9375V20.3125C2.64062 20.6896 2.79043 21.0513 3.05708 21.3179C3.32374 21.5846 3.6854 21.7344 4.0625 21.7344H18.6875C19.0646 21.7344 19.4263 21.5846 19.6929 21.3179C19.9596 21.0513 20.1094 20.6896 20.1094 20.3125V8.9375C20.1094 8.5604 19.9596 8.19874 19.6929 7.93208C19.4263 7.66543 19.0646 7.51562 18.6875 7.51562ZM18.8906 20.3125C18.8906 20.3664 18.8692 20.418 18.8311 20.4561C18.793 20.4942 18.7414 20.5156 18.6875 20.5156H4.0625C4.00863 20.5156 3.95696 20.4942 3.91887 20.4561C3.88078 20.418 3.85938 20.3664 3.85938 20.3125V8.9375C3.85938 8.88363 3.88078 8.83196 3.91887 8.79387C3.95696 8.75578 4.00863 8.73438 4.0625 8.73438H18.6875C18.7414 8.73438 18.793 8.75578 18.8311 8.79387C18.8692 8.83196 18.8906 8.88363 18.8906 8.9375V20.3125ZM23.3594 5.6875V17.875C23.3594 18.0366 23.2952 18.1916 23.1809 18.3059C23.0666 18.4202 22.9116 18.4844 22.75 18.4844C22.5884 18.4844 22.4334 18.4202 22.3191 18.3059C22.2048 18.1916 22.1406 18.0366 22.1406 17.875V5.6875C22.1406 5.63363 22.1192 5.58196 22.0811 5.54387C22.043 5.50578 21.9914 5.48438 21.9375 5.48438H6.5C6.33838 5.48437 6.18339 5.42017 6.06911 5.30589C5.95483 5.19161 5.89063 5.03662 5.89062 4.875C5.89062 4.71338 5.95483 4.55839 6.06911 4.44411C6.18339 4.32983 6.33838 4.26563 6.5 4.26562H21.9375C22.3146 4.26563 22.6763 4.41543 22.9429 4.68208C23.2096 4.94874 23.3594 5.3104 23.3594 5.6875Z" fill="#164E23"/></svg></button>' +
        '<button class="cd-action-btn" onclick="nav(\'card-detail\');showCardDetail(\''+ card.id +'\')" title="Open"><svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3681 13.4307L15.0556 20.7432C14.9401 20.8508 14.7873 20.9094 14.6295 20.9066C14.4716 20.9039 14.321 20.8399 14.2093 20.7283C14.0977 20.6166 14.0337 20.466 14.0309 20.3081C14.0281 20.1502 14.0867 19.9975 14.1944 19.8819L20.4659 13.6094H4.0625C3.90088 13.6094 3.74589 13.5452 3.63161 13.431C3.51733 13.3167 3.45313 13.1617 3.45312 13.0001C3.45312 12.8384 3.51733 12.6834 3.63161 12.5692C3.74589 12.4549 3.90088 12.3907 4.0625 12.3907H20.4659L14.1944 6.11818C14.0867 6.00267 14.0281 5.84988 14.0309 5.69201C14.0337 5.53414 14.0977 5.38351 14.2093 5.27187C14.321 5.16022 14.4716 5.09626 14.6295 5.09348C14.7873 5.09069 14.9401 5.14929 15.0556 5.25693L22.3681 12.5694C22.4822 12.6837 22.5463 12.8386 22.5463 13.0001C22.5463 13.1615 22.4822 13.3164 22.3681 13.4307Z" fill="#4F00DF"/></svg></button>' +
      '</td></tr>';
  }).join("");
}

function filterCards(s, btn) {
  cdCF = s;
  document.querySelectorAll("#page-co-detail .cd-pill").forEach(function(b) { b.classList.remove("active"); });
  btn.classList.add("active");
  renderCDCards();
}

function filterCardsBySearch() { renderCDCards(); }

function onCBChange() { updateBulk(); }
function toggleSelAll(cb) { document.querySelectorAll(".card-cb").forEach(function(x) { x.checked = cb.checked; }); updateBulk(); }
function copyText(txt) {
  navigator.clipboard.writeText(txt).then(function(){ toast(tf("toast_copied_colon", {value: txt})); }).catch(function(){ toast(t("toast_copy_failed")); });
}

function getSel() { return Array.from(document.querySelectorAll(".card-cb:checked")).map(function(x) { return x.value; }); }
function clearSel() { document.querySelectorAll(".card-cb").forEach(function(x) { x.checked = false; }); var sa = document.getElementById("selAll"); if (sa) sa.checked = false; updateBulk(); }
function updateBulk() {
  var sel = getSel();
  var bar = document.getElementById("bulkBar");
  if (sel.length > 0) { bar.classList.add("show"); document.getElementById("bulkCount").textContent = tf("label_n_selected", {count: sel.length}); }
  else bar.classList.remove("show");
}
async function bulkDelete() {
  var sel = getSel(); if (!sel.length) return;
  var assigned = sel.filter(function(id) {
    var c = cdCards.find(function(x) { return x.id === id; });
    return c && (c.status === "active" || c.clientId);
  });
  var warn = assigned.length ? tf("confirm_cards_active_warning", {count: assigned.length}) : "";
  cfm(tf("confirm_delete_n_cards", {count: sel.length}), t("confirm_cannot_undone_short") + warn, async function(btn) {
    var deleted = 0;
    for (var i = 0; i < sel.length; i++) {
      if (btn) btn.textContent = tf("confirm_deleting_progress", {done: i+1, total: sel.length});
      var ok = await fsDel("nfc_cards", sel[i]);
      if (ok) deleted++;
    }
    closeModal("mConfirm");
    toast(tf("toast_deleted_of_cards", {deleted: deleted, total: sel.length}));
    await loadCDCards();
    clearSel();
  });
}
async function bulkDeactivate() {
  var sel = getSel(); if (!sel.length) return;
  for (var i = 0; i < sel.length; i++) await fsPatchFields("nfc_cards", sel[i], { status: sv("deactivated") });
  toast(tf("toast_deactivated_cards", {count: sel.length}));
  await loadCDCards(); clearSel();
}

function csvDate(iso) { if(!iso)return""; return new Date(iso).toISOString().slice(0,10); }
function csvRow(arr) { return arr.map(function(v){ var s=String(v||""); return s.includes(",")||s.includes('"')||s.includes("\n") ? '"'+s.replace(/"/g,'""')+'"' : s; }).join(","); }

function exportFreeCSV() {
  var f = cdCards.filter(function(c) { return c.status === "unassigned"; });
  if (!f.length) { toast(t("toast_no_available_cards_export")); return; }
  var rows = [csvRow(["Print ID","Token","URL","Status","Created"])];
  f.forEach(function(c) {
    rows.push(csvRow([(c.printId||"—"), c.id, BURL+"/c/"+c.id, "available", csvDate(c.createdAt)]));
  });
  var blob = new Blob(["\uFEFF"+rows.join("\r\n")], {type:"text/csv;charset=utf-8;"});
  var l = document.createElement("a"); l.href = URL.createObjectURL(blob);
  l.download = "available-cards-"+cdId+".csv"; l.click();
  toast(tf("toast_csv_downloaded_cards", {count: f.length}));
}

async function deactCard(id) { var ok = await fsPatchFields("nfc_cards", id, { status: sv("deactivated") }); if (ok) { toast(t("toast_card_deactivated")); await loadCDCards(); } }
function delCard(id) {
  var c = cdCards.find(function(x) { return x.id === id; });
  var pid = c && c.printId ? c.printId : id;
  var warn = c && c.status === "active" ? t("confirm_card_active_warning")
           : c && c.status === "assigned" ? t("confirm_card_assigned_warning")
           : "";
  cfm(tf("confirm_delete_card", {pid: pid}), t("confirm_cannot_undone_short") + warn, async function() {
    var ok = await fsDel("nfc_cards", id);
    if (ok) { closeModal("mConfirm"); toast(tf("toast_card_deleted", {pid: pid})); await loadCDCards(); }
    else toast(t("toast_error_deleting_card"));
  });
}

// ── HANDYMEN ──────────────────────────────────────────────────
async function openAddHM() {
  document.getElementById("mHMT").textContent = t("drawer_new_handyman_title");
  document.getElementById("editHMId").value = "";
  ["hmName", "hmPhone", "hmEmail", "hmSkills"].forEach(function(id) { document.getElementById(id).value = ""; });
  document.getElementById("hmExp").value = "";
  // Populate card dropdown
  var sel = document.getElementById("hmCardSel");
  if (sel) {
    sel.innerHTML = '<option value="">' + t("option_no_card_assigned") + '</option>';
    var free = (cdCards||[]).filter(function(card){ return !card.assignedHandymanId && card.status!=="active" && card.status!=="deactivated"; });
    free.forEach(function(card){ var o=document.createElement("option"); o.value=card.id; o.textContent=(card.printId?String(card.printId).padStart(6,"0")+" · ":"")+card.id; sel.appendChild(o); });
  }
  // Hide delete button when creating new
  var delBtn = document.getElementById("deleteHMBtn");
  if (delBtn) delBtn.style.display = "none";
  var drawer = document.querySelector("#mAddHM .drawer");
  if (drawer) drawer.style.transform = "translateX(100%)";
  openModal("mAddHM");
}

async function editHM(id) {
  var h = cdHM.find(function(x) { return x.id === id; }) || {};
  document.getElementById("mHMT").textContent = t("drawer_edit_handyman_title");
  document.getElementById("editHMId").value = id;
  document.getElementById("hmName").value = h.name || "";
  document.getElementById("hmPhone").value = h.phone || "";
  document.getElementById("hmEmail").value = h.email || "";
  document.getElementById("hmSkills").value = (h.skills || []).join(", ");
  document.getElementById("hmExp").value = h.experienceYears || "";
  fillFreeCards(h.assignedCardToken);
  // Show delete button only when editing
  var delBtn = document.getElementById("deleteHMBtn");
  if (delBtn) delBtn.style.display = "flex";
  var drawer = document.querySelector("#mAddHM .drawer");
  if (drawer) drawer.style.transform = "translateX(100%)";
  openModal("mAddHM");
}

function fillFreeCards(cur) {
  var sel = document.getElementById("hmCardSel");
  if (!sel) return;
  sel.innerHTML = '<option value="">' + t("option_no_card_assigned") + '</option>';
  (cdCards||[]).filter(function(card) {
    return card.status === "unassigned" || !card.assignedHandymanId || (cur && card.id === cur);
  }).forEach(function(card) {
    var o = document.createElement("option");
    o.value = card.id;
    o.textContent = (card.printId ? String(card.printId).padStart(6,"0") + " · " : "") + card.id;
    if (cur && card.id === cur) o.selected = true;
    sel.appendChild(o);
  });
}

async function saveHM() {
  var name = document.getElementById("hmName").value.trim();
  var btn = document.querySelector("#mAddHM .dbtn-save");
  if (btn) btn.classList.add("loading");
  if (!name) { toast(t("toast_enter_name")); return; }
  var eid = document.getElementById("editHMId").value;
  var id = eid || (name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now().toString(36));
  var sk = document.getElementById("hmSkills").value.split(",").map(function(s) { return s.trim(); }).filter(Boolean);
  var ct = document.getElementById("hmCardSel") ? document.getElementById("hmCardSel").value : "";
  var hmFields = {
    name: sv(name), phone: sv(document.getElementById("hmPhone").value),
    email: sv(document.getElementById("hmEmail").value),
    experienceYears: nv(document.getElementById("hmExp").value),
    skills: av(sk), companyIds: av(cdId ? [cdId] : []),
    assignedCardToken: sv(ct), ratingAvg: nv(0), reviewCount: nv(0),
    ordersCompleted: nv(0), status: sv("active"), createdAt: sv(new Date().toISOString())
  };
  if (eid) {
    // Editing must not wipe statistics (the old code reset them) or move the handyman out of his company.
    delete hmFields.ratingAvg; delete hmFields.reviewCount; delete hmFields.ordersCompleted; delete hmFields.createdAt;
    if (!cdId) delete hmFields.companyIds;
  }
  var ok = eid ? await fsMerge("handymen", id, hmFields) : await fsP("handymen", id, hmFields);
  if (ok && ct) await fsPatchFields("nfc_cards", ct, { status: sv("assigned"), handymanId: sv(id) });
  if (btn) btn.classList.remove("loading");
  if (ok) { closeModal("mAddHM"); toast(eid ? t("toast_handyman_updated") : t("toast_handyman_added")); await loadCDHM(); await loadCDCards(); }
  else { if (btn) btn.classList.remove("loading"); toast(t("toast_error_saving_handyman")); }
}

// A deleted handyman's card that is merely "assigned" returns to the free pool; activated cards are left alone.
async function releaseHandymanCards(hmId) {
  var cards = await fsQ("nfc_cards", [{ field: "handymanId", value: hmId }]);
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].status === "assigned") await fsPatchFields("nfc_cards", cards[i].id, { status: "unassigned", handymanId: "" });
  }
}

function delHM(id) {
  cfm(t("confirm_delete_handyman_q"), t("confirm_cannot_undone_short"), async function() {
    var ok = await fsDel("handymen", id);
    if (ok) {
      await releaseHandymanCards(id);
      toast(t("toast_handyman_deleted")); await loadCDHM();
      if (typeof loadCDCards === "function") await loadCDCards();
    } else toast(t("toast_error"));
  });
}

async function loadHMs() {
  var tb = document.getElementById("hmBody");
  tb.innerHTML = '<tr><td colspan="8" class="empty">Loading...</td></tr>';
  var results = await Promise.all([fsL("handymen"), fsL("companies")]);
  var hm = results[0], cos = results[1];
  cos.forEach(function(c) { CC.cos[c.id] = c; });
  CC._allHM = hm;
  renderHMs(hm);
}

function renderHMs(hm) {
  var tb = document.getElementById("hmBody");
  if (!hm.length) { tb.innerHTML = '<tr><td colspan="9" class="pg-empty">' + t("empty_no_handymen_found") + '</td></tr>'; return; }
  tb.innerHTML = hm.map(function(h) {
    var coId = (h.companyIds || [])[0] || "";
    var cn = (CC.cos[coId] || {}).name || coId || "—";
    return '<tr>' +
      '<td><input type="checkbox" class="cd-cb hm-cb" value="' + h.id + '" onchange="updateHMBulk()"/></td>' +
      '<td><div style="display:flex;align-items:center;gap:10px"><div class="hm-av">' + ini(h.name) + '</div>' +
        '<span class="pg-link" onclick="openHMDetail(\'' + h.id + '\',\'handymen\')">' + (esc(h.name) || "—") + '</span>' +
      '</div></td>' +
      '<td style="color:#858585">' + cn + '</td>' +
      '<td style="color:#858585">' + esc(h.phone || "—") + '</td>' +
      '<td style="color:#4f00df;font-weight:700;font-size:14px">' + esc((h.skills || []).slice(0, 2).join(", ")) + '</td>' +
      '<td>' + (Number(h.ratingAvg) || 0).toFixed(1) + ' ★</td>' +
      '<td>' + (h.ordersCompleted || 0) + '</td>' +
      '<td>' + bdg(h.status || "active") + '</td>' +
      '<td style="text-align:right"><button class="cd-action-btn" onclick="editHMGlobal(\'' + h.id + '\',\'' + coId + '\')" title="Edit"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6484 5.84219L14.157 2.35079C14.0555 2.24921 13.9349 2.16864 13.8022 2.11366C13.6695 2.05869 13.5272 2.0304 13.3836 2.0304C13.24 2.0304 13.0977 2.05869 12.965 2.11366C12.8323 2.16864 12.7117 2.24921 12.6102 2.35079L2.97656 11.9852C2.87479 12.0866 2.7941 12.2071 2.73912 12.3399C2.68415 12.4726 2.65599 12.6149 2.65625 12.7586V16.25C2.65625 16.5401 2.77149 16.8183 2.9766 17.0234C3.18172 17.2285 3.45992 17.3438 3.75 17.3438H7.24141C7.38508 17.344 7.52739 17.3159 7.66013 17.2609C7.79288 17.2059 7.91343 17.1252 8.01485 17.0234L17.6484 7.38907C17.75 7.2875 17.8306 7.16692 17.8856 7.03422C17.9405 6.90151 17.9688 6.75927 17.9688 6.61563C17.9688 6.47199 17.9405 6.32975 17.8856 6.19705C17.8306 6.06434 17.75 5.94376 17.6484 5.84219ZM7.35156 16.3602C7.3224 16.3895 7.28278 16.4061 7.24141 16.4063H3.75C3.70856 16.4063 3.66882 16.3898 3.63952 16.3605C3.61021 16.3312 3.59375 16.2914 3.59375 16.25V12.7586C3.59393 12.7172 3.6105 12.6776 3.63985 12.6484L10.625 5.66251L14.3367 9.37501L7.35156 16.3602ZM16.9852 6.72657L15 8.71172L11.2883 5.00001L13.2734 3.01407C13.288 2.99954 13.3052 2.98802 13.3242 2.98015C13.3431 2.97229 13.3635 2.96824 13.384 2.96824C13.4045 2.96824 13.4249 2.97229 13.4438 2.98015C13.4628 2.98802 13.48 2.99954 13.4945 3.01407L16.9852 6.50547C16.9997 6.51999 17.0112 6.53722 17.0191 6.55619C17.0269 6.57516 17.031 6.59549 17.031 6.61602C17.031 6.63655 17.0269 6.65689 17.0191 6.67586C17.0112 6.69482 16.9997 6.71206 16.9852 6.72657Z" fill="#343330"/></svg></button></td>' +
    '</tr>';
  }).join("");
}

function getHMSel() { return Array.from(document.querySelectorAll(".hm-cb:checked")).map(function(x){return x.value;}); }
function clearHMSel() { document.querySelectorAll(".hm-cb").forEach(function(x){x.checked=false;}); var sa=document.getElementById("hmSelAll"); if(sa)sa.checked=false; updateHMBulk(); }
function toggleHMSelAll(cb) { document.querySelectorAll(".hm-cb").forEach(function(x){x.checked=cb.checked;}); updateHMBulk(); }
function updateHMBulk() {
  var sel = getHMSel();
  var bar = document.getElementById("hmBulkBar");
  if (sel.length > 0) { bar.classList.add("show"); document.getElementById("hmBulkCount").textContent = tf("label_n_selected", {count: sel.length}); }
  else bar.classList.remove("show");
}
async function bulkDeleteHM() {
  var sel = getHMSel(); if (!sel.length) return;
  cfm(tf("confirm_delete_n_handymen", {count: sel.length}), t("confirm_cannot_undone_short"), async function(btn) {
    for (var i = 0; i < sel.length; i++) {
      if (btn) btn.textContent = tf("confirm_deleting_progress", {done: i+1, total: sel.length});
      await fsDel("handymen", sel[i]);
    }
    closeModal("mConfirm");
    toast(tf("toast_deleted_handymen", {count: sel.length}));
    clearHMSel();
    await loadHMs();
  });
}
async function bulkDeactivateHM() {
  var sel = getHMSel(); if (!sel.length) return;
  for (var i = 0; i < sel.length; i++) await fsPatchFields("handymen", sel[i], { status: sv("inactive") });
  toast(tf("toast_deactivated_handymen", {count: sel.length}));
  clearHMSel();
  await loadHMs();
}

function searchHM(q) {
  var all = CC._allHM || [];
  if (!q) { renderHMs(all); return; }
  q = q.toLowerCase();
  renderHMs(all.filter(function(h) { return (esc(h.name) || "").toLowerCase().includes(q) || (h.phone || "").includes(q); }));
}

async function openHMDetail(hmId, backPage) {
  sp("hm-detail");
  // "nfc-pool-all" is a special backPage value meaning: return to the Cards page with the All Cards tab active
  document.getElementById("hmBackBtn").setAttribute("onclick",
    backPage === "nfc-pool-all" ? "sp('nfc-pool');switchPoolTab('all')" : "sp('" + backPage + "')");
  document.getElementById("hmDetName").textContent = t("loading_text");
  var results = await Promise.all([fsGet("handymen", hmId), fsQ("orders", [{ field: "handymanId", value: hmId }])]);
  var hm = results[0], orders = results[1];
  if (!hm) { toast(t("toast_handyman_not_found")); return; }
  document.getElementById("hmDetAvatar").textContent = ini(hm.name);
  document.getElementById("hmDetName").textContent = hm.name || "—";
  document.getElementById("hmDetMeta").textContent = (esc(hm.phone) || "") + (hm.email ? " · " + hm.email : "");
  document.getElementById("hmDetEditBtn").onclick = function() { cdHM = [hm]; cdId = (hm.companyIds || [])[0] || ""; editHM(hmId); };
  var stars = "★".repeat(Math.round(hm.ratingAvg || 0)) + "☆".repeat(5 - Math.round(hm.ratingAvg || 0));
  document.getElementById("hmDetStats").innerHTML =
    '<div class="cd-stat"><div class="cd-stat-num">' + (Number(hm.ratingAvg)||0).toFixed(1) + '</div><div class="cd-stat-label">' + stars + ' ' + t("th_rating") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + (hm.reviewCount || 0) + '</div><div class="cd-stat-label">Reviews</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + (hm.ordersCompleted || 0) + '</div><div class="cd-stat-label">Jobs Done</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + (hm.experienceYears || 0) + '</div><div class="cd-stat-label">Years Exp.</div></div>';
  document.getElementById("hmDetInfo").innerHTML =
    '<div><div class="pg-info-label">' + t("th_phone") + '</div><div class="pg-info-value">' + (esc(hm.phone) || "—") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("th_email") + '</div><div class="pg-info-value">' + esc(hm.email || "—") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("info_skills") + '</div><div class="pg-info-value">' + esc((hm.skills || []).join(", ") || "—") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("info_card_token") + '</div><div class="pg-info-value" style="font-family:monospace">' + esc(hm.assignedCardToken || "—") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("info_status") + '</div><div class="pg-info-value">' + bdg(hm.status || "active") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("info_added") + '</div><div class="pg-info-value">' + fd(hm.createdAt) + '</div></div>';
  var ordTb = document.getElementById("hmDetOrders");
  if (!orders.length) { ordTb.innerHTML = '<tr><td colspan="6" class="pg-empty">' + t("empty_no_jobs") + '</td></tr>'; return; }
  var clMap = {};
  try { var cls = await fsL("clients"); cls.forEach(function(c) { clMap[c.id] = c.name; }); } catch (e) {}
  ordTb.innerHTML = orders.map(function(o) {
    return '<tr style="cursor:pointer" onclick="showOrderDetail(\''+o.id+'\',\'hm-detail\')">' +
      '<td style="color:#858585">' + fd(o.createdAt) + '</td>' +
      '<td>' + esc(clMap[o.clientId] || o.clientId || "—") + '</td>' +
      '<td>' + (esc(o.category) || "—") + '</td>' +
      '<td>' + bdg(o.status || "new") + '</td>' +
      '<td style="color:#EF9F27">' + (o.rating ? "★".repeat(o.rating) : "—") + '</td>' +
      '<td>' + (o.price ? "$" + o.price : "—") + '</td>' +
    '</tr>';
  }).join("");
}

async function editHMGlobal(hmId, coId) {
  cdId = coId;
  cdCards = await fsQ("nfc_cards", [{ field: "companyId", value: coId }]);
  var hm = await fsGet("handymen", hmId);
  if (!hm) return;
  cdHM = [hm];
  document.getElementById("mHMT").textContent = "Edit Handyman";
  document.getElementById("editHMId").value = hmId;
  document.getElementById("hmName").value = hm.name || "";
  document.getElementById("hmPhone").value = hm.phone || "";
  document.getElementById("hmEmail").value = hm.email || "";
  document.getElementById("hmSkills").value = (hm.skills || []).join(", ");
  document.getElementById("hmExp").value = hm.experienceYears || "";
  await fillFreeCards(hm.assignedCardToken);
  openModal("mAddHM");
}

// ── GEN CARDS ─────────────────────────────────────────────────
var genStockCache = [];
function updateGenPreview() {
  var count = parseInt(document.getElementById("genCnt").value, 10) || 0;
  var startPid = parseInt(document.getElementById("genStartPid").value, 10) || 0;
  document.getElementById("genPreview").innerHTML = assignPreviewHTML(genStockCache, count, startPid);
}
async function openAssignCardsModal() {
  document.getElementById("genCnt").value = "10";
  document.getElementById("genStartPid").value = "";
  document.getElementById("genPreview").innerHTML = "";
  genStockCache = [];
  document.getElementById("mGenSub").textContent = t("modal_assign_stock_checking");
  var btn = document.getElementById("genBtn");
  if (btn) { btn.disabled = false; btn.classList.remove("loading"); }
  document.getElementById("genProg").textContent = "";
  openModal("mGenCards");
  try {
    var stock = await fsQ("nfc_cards", [{field:"companyId", value:""}]);
    genStockCache = stock;
    document.getElementById("mGenSub").textContent = tf("label_cards_available_stock", {count: stock.length});
    updateGenPreview();
  } catch(e) {
    document.getElementById("mGenSub").textContent = t("toast_could_not_check_stock");
  }
}

async function createShortfallRequest(count) {
  var co = CC.cos[cdId] || {};
  var reqId = "cardreq-admin-" + Date.now().toString(36);
  await fsP("card_requests", reqId, {
    companyId: sv(cdId),
    companyName: sv(co.name || cdId),
    email: sv(co.email || ""),
    count: count,
    notes: sv(t("note_auto_shortfall")),
    status: sv("pending"),
    createdAt: sv(new Date().toISOString())
  });
}

async function assignStockCards() {
  var cnt = parseInt(document.getElementById("genCnt").value);
  if (!cnt || cnt < 1) { toast(t("toast_enter_number_of_cards")); return; }
  var btn = document.getElementById("genBtn"); btn.disabled = true; btn.classList.add("loading");
  var prog = document.getElementById("genProg");
  prog.textContent = t("toast_checking_stock");

  var stock = await fsQ("nfc_cards", [{field:"companyId", value:""}]);
  var startPid = parseInt(document.getElementById("genStartPid").value, 10) || 0;
  var pickable = pickStockCards(stock, cnt, startPid);
  if (startPid && pickable.length < cnt) {
    // With an explicit start number don't silently fall back to other cards —
    // the admin is pulling a specific block out of the box.
    prog.textContent = tf("warn_only_n_from_start", {count: pickable.length, start: startPid});
    btn.disabled = false; btn.classList.remove("loading");
    return;
  }
  var toAssignCount = Math.min(cnt, pickable.length);
  var shortfall = cnt - toAssignCount;

  if (toAssignCount === 0) {
    prog.textContent = "";
    await createShortfallRequest(cnt);
    btn.disabled = false; btn.classList.remove("loading");
    closeModal("mGenCards");
    toast(tf("toast_no_stock_request_recorded", {count: cnt}));
    await loadCDCards();
    return;
  }

  // Consume bonus leads first (free), remainder is a standard/paid assignment
  var coFresh = await fsGet("companies", cdId);
  var bonusLeads = (coFresh && coFresh.bonusLeads) || 0;
  var freeCount = Math.min(toAssignCount, bonusLeads);
  var paidCount = toAssignCount - freeCount;

  var toAssign = pickable.slice(0, toAssignCount);
  var assignedRange = pidRangeInfo(toAssign).label;
  var saved = 0;
  for (var i = 0; i < toAssign.length; i++) {
    prog.textContent = tf("label_assigning_progress", {i: i+1, total: toAssignCount});
    var isFree = i < freeCount;
    var ok = await fsMerge("nfc_cards", toAssign[i].id, { companyId: sv(cdId), status: sv("unassigned"), source: sv(isFree ? "lead" : "paid") });
    if (ok) saved++;
  }
  if (freeCount > 0) {
    var newBonusLeads = bonusLeads - freeCount;
    await fsMerge("companies", cdId, { bonusLeads: nv(newBonusLeads) });
    if (CC.cos[cdId]) CC.cos[cdId].bonusLeads = newBonusLeads;
  }
  if (shortfall > 0) await createShortfallRequest(shortfall);
  btn.disabled = false; btn.classList.remove("loading");
  closeModal("mGenCards");
  var msg = tf("toast_assigned_from_stock", {count: saved});
  if (assignedRange) msg += " (" + assignedRange + ")";
  if (freeCount > 0) msg += tf("toast_free_leads_suffix", {count: freeCount, paid: paidCount > 0 ? tf("toast_paid_suffix", {count: paidCount}) : ""});
  if (shortfall > 0) msg += " " + tf("toast_shortfall_suffix", {count: shortfall});
  toast(msg);
  await loadCDCards();
}

async function cleanCompanyData() {
  var name = (CC.cos[cdId] || {}).name || cdId;
  if (!confirm(tf("confirm_delete_all_test_data", {name: name}))) return;
  if (!confirm(tf("confirm_absolutely_sure", {count: cdCards.length}))) return;

  toast(t("toast_cleaning"));
  var cards = await fsQ("nfc_cards", [{field:"companyId", value:cdId}]);
  var handymen = await fsQ("handymen", [{field:"companyIds", value:cdId, op:"ARRAY_CONTAINS"}]);

  for (var i = 0; i < cards.length; i++) await fsDel("nfc_cards", cards[i].id);
  for (var i = 0; i < handymen.length; i++) await fsDel("handymen", handymen[i].id);

  toast(tf("toast_deleted_cards_handymen", {cards: cards.length, handymen: handymen.length}));
  await loadCDCards();
}

// ── CLIENTS ───────────────────────────────────────────────────
async function loadCls() {
  var tb = document.getElementById("clBody");
  tb.innerHTML = '<tr><td colspan="7" class="empty">' + t("loading_text") + '</td></tr>';
  var cls = await fsL("clients");
  CC.cl = {};
  cls.forEach(function(c) { CC.cl[c.id] = c; });
  var oc = {};
  try { var ords = await fsL("orders"); ords.forEach(function(o) { oc[o.clientId] = (oc[o.clientId] || 0) + 1; }); } catch (e) {}
  CC._allCl = cls; CC._clOC = oc;
  renderCls(cls, oc);
}

function renderCls(cls, oc) {
  var tb = document.getElementById("clBody");
  if (!cls.length) { tb.innerHTML = '<tr><td colspan="8" class="pg-empty">' + t("empty_no_clients") + '</td></tr>'; return; }
  tb.innerHTML = cls.map(function(c) {
    return '<tr>' +
      '<td><input type="checkbox" class="pg-cb cl-cb" value="' + c.id + '" onchange="updateClBulk()"/></td>' +
      '<td><div style="display:flex;align-items:center;gap:10px"><div class="pg-av">' + ini(c.name) + '</div>' +
        '<span class="pg-link" onclick="openCl(\'' + c.id + '\')">' + (esc(c.name) || "—") + '</span>' +
      '</div></td>' +
      '<td style="color:#858585">' + esc(c.phone || "—") + '</td>' +
      '<td style="color:#858585">' + esc(c.email || "—") + '</td>' +
      '<td style="color:#858585">' + esc(c.address || "—") + '</td>' +
      '<td style="font-weight:700;color:#4f00df">' + (oc[c.id] || 0) + '</td>' +
      '<td style="color:#858585">' + fd(c.createdAt) + '</td>' +
      '<td style="text-align:right"><button class="cd-action-btn" onclick="openCl(\'' + c.id + '\')" title="View"><svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3681 13.4307L15.0556 20.7432C14.9401 20.8508 14.7873 20.9094 14.6295 20.9066C14.4716 20.9039 14.321 20.8399 14.2093 20.7283C14.0977 20.6166 14.0337 20.466 14.0309 20.3081C14.0281 20.1502 14.0867 19.9975 14.1944 19.8819L20.4659 13.6094H4.0625C3.90088 13.6094 3.74589 13.5452 3.63161 13.431C3.51733 13.3167 3.45313 13.1617 3.45312 13.0001C3.45312 12.8384 3.51733 12.6834 3.63161 12.5692C3.74589 12.4549 3.90088 12.3907 4.0625 12.3907H20.4659L14.1944 6.11818C14.0867 6.00267 14.0281 5.84988 14.0309 5.69201C14.0337 5.53414 14.0977 5.38351 14.2093 5.27187C14.321 5.16022 14.4716 5.09626 14.6295 5.09348C14.7873 5.09069 14.9401 5.14929 15.0556 5.25693L22.3681 12.5694C22.4822 12.6837 22.5463 12.8386 22.5463 13.0001C22.5463 13.1615 22.4822 13.3164 22.3681 13.4307Z" fill="#4F00DF"/></svg></button></td>' +
    '</tr>';
  }).join("");
}

function getClSel() { return Array.from(document.querySelectorAll(".cl-cb:checked")).map(function(x){return x.value;}); }
function clearClSel() { document.querySelectorAll(".cl-cb").forEach(function(x){x.checked=false;}); var sa=document.getElementById("clSelAll"); if(sa)sa.checked=false; updateClBulk(); }
function toggleClSelAll(cb) { document.querySelectorAll(".cl-cb").forEach(function(x){x.checked=cb.checked;}); updateClBulk(); }
function updateClBulk() {
  var sel = getClSel();
  var bar = document.getElementById("clBulkBar");
  if (sel.length > 0) { bar.classList.add("show"); document.getElementById("clBulkCount").textContent = tf("label_n_selected", {count: sel.length}); }
  else bar.classList.remove("show");
}
async function bulkDeleteCl() {
  var sel = getClSel(); if (!sel.length) return;
  cfm(tf("confirm_delete_n_clients", {count: sel.length}), t("confirm_clients_profiles_removed"), async function(btn) {
    for (var i = 0; i < sel.length; i++) {
      if (btn) btn.textContent = tf("confirm_deleting_progress", {done: i+1, total: sel.length});
      await fsDel("clients", sel[i]);
    }
    closeModal("mConfirm");
    toast(tf("toast_deleted_clients", {count: sel.length}));
    clearClSel();
    await loadCls();
  });
}

function searchCl(q) {
  var all = CC._allCl || []; var oc = CC._clOC || {};
  if (!q) { renderCls(all, oc); return; }
  q = q.toLowerCase();
  renderCls(all.filter(function(c) { return (esc(c.name) || "").toLowerCase().includes(q) || (c.phone || "").includes(q); }), oc);
}

async function openCl(id) {
  nav("cl-detail");
  var c = CC.cl[id] || {};
  document.getElementById("clName").textContent = c.name || id;
  document.getElementById("clMeta").textContent = (c.phone || "") + (c.email ? " · " + c.email : "");
  document.getElementById("clInfo").innerHTML =
    '<div><div class="pg-info-label">' + t("th_phone") + '</div><div class="pg-info-value">' + esc(c.phone || "—") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("th_email") + '</div><div class="pg-info-value">' + esc(c.email || "—") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("info_address") + '</div><div class="pg-info-value">' + esc(c.address || "—") + '</div></div>' +
    '<div><div class="pg-info-label">' + t("th_registered") + '</div><div class="pg-info-value">' + fd(c.createdAt) + '</div></div>';
  var tb = document.getElementById("clOBody");
  tb.innerHTML = '<tr><td colspan="5" class="pg-empty">' + t("loading_text") + '</td></tr>';
  var ords = await fsQ("orders", [{ field: "clientId", value: id }]);
  if (!ords.length) { tb.innerHTML = '<tr><td colspan="5" class="pg-empty">' + t("empty_no_orders") + '</td></tr>'; return; }
  var hma = {};
  try { var hms = await fsL("handymen"); hms.forEach(function(h) { hma[h.id] = h.name; }); } catch (e) {}
  tb.innerHTML = ords.map(function(o) {
    return '<tr style="cursor:pointer" onclick="showOrderDetail(\''+o.id+'\',\'cl-detail\')">' +
      '<td style="color:#858585">' + fd(o.createdAt) + '</td>' +
      '<td>' + (esc(o.category) || "—") + '</td>' +
      '<td>' + esc(hma[o.handymanId] || "—") + '</td>' +
      '<td>' + bdg(o.status || "new") + '</td>' +
      '<td>' + (o.price ? "$" + o.price : "—") + '</td>' +
    '</tr>';
  }).join("");
}

async function showCardDetail(cardId) {
  sp("card-detail");
  var backEl = document.getElementById("cardDetBack");
  backEl.setAttribute("onclick", "sp('co-detail')");
  var content = document.getElementById("cardDetContent");
  content.innerHTML = '<div style="padding:60px;text-align:center;color:#aaa">' + t("loading_text") + '</div>';

  var card = await fsGet("nfc_cards", cardId);
  if (!card) { content.innerHTML = '<div style="padding:24px;text-align:center;color:#aaa">' + t("card_not_found") + '</div>'; return; }

  var [hm, cl, orders] = await Promise.all([
    card.handymanId ? fsGet("handymen", card.handymanId) : Promise.resolve(null),
    card.clientId ? fsGet("clients", card.clientId) : Promise.resolve(null),
    fsQ("orders", [{field:"cardToken", value:cardId}])
  ]);
  orders.sort(function(a,b){return (b.createdAt||"").localeCompare(a.createdAt||"");});

  var url = BURL + "/c/" + cardId;
  var printId = card.printId || "—";

  content.innerHTML =
    '<div class="pg-header" style="margin-bottom:20px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">' +
          '<div>' +
            '<div class="cd-title" style="font-size:32px;font-family:monospace">' + printId + '</div>' +
            '<div style="font-size:14px;color:#858585;margin-top:4px">' + t("info_physical_card_id") + '</div>' +
          '</div>' +
          '<div>' + bdg(card.status || "unassigned") + '</div>' +
        '</div>' +
        '<div class="pg-info-grid">' +
          '<div><div class="pg-info-label">' + t("th_token") + '</div><div class="pg-info-value" style="font-family:monospace;font-size:13px">' + cardId + '</div></div>' +
          '<div><div class="pg-info-label">' + t("info_created") + '</div><div class="pg-info-value">' + fd(card.createdAt) + '</div></div>' +
          '<div style="grid-column:1/-1"><div class="pg-info-label">' + t("th_url") + '</div>' +
            '<div style="display:flex;align-items:center;gap:10px;margin-top:6px">' +
              '<span style="font-family:monospace;font-size:13px;color:#4f00df">' + url + '</span>' +
              '<button class="cd-action-btn" onclick="cp(\'' + url + '\')" title="Copy"><svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6875 7.51562H4.0625C3.6854 7.51562 3.32374 7.66543 3.05708 7.93208C2.79043 8.19874 2.64063 8.5604 2.64062 8.9375V20.3125C2.64062 20.6896 2.79043 21.0513 3.05708 21.3179C3.32374 21.5846 3.6854 21.7344 4.0625 21.7344H18.6875C19.0646 21.7344 19.4263 21.5846 19.6929 21.3179C19.9596 21.0513 20.1094 20.6896 20.1094 20.3125V8.9375C20.1094 8.5604 19.9596 8.19874 19.6929 7.93208C19.4263 7.66543 19.0646 7.51562 18.6875 7.51562Z" fill="#164E23"/></svg></button>' +
            '</div>' +
          '</div>' +
        '</div>' +
    '</div>' +

    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">' +
      '<div class="pg-card" style="margin-bottom:0">' +
        '<div class="pg-section-title">' + t("section_handyman") + '</div>' +
          (hm ? '<div style="display:flex;align-items:center;gap:12px">' +
            '<div class="pg-av">' + ini(hm.name) + '</div>' +
            '<div><div class="pg-link" style="font-weight:600" onclick="openHMDetail(\'' + hm.id + '\',\'card-detail\')">' + esc(hm.name) + '</div>' +
            '<div style="color:#858585;font-size:13px">' + esc(hm.phone||"") + '</div>' +
            (hm.ratingAvg ? '<div style="color:#EF9F27;font-size:13px">★ ' + Number(hm.ratingAvg).toFixed(1) + '</div>' : "") +
            '</div></div>' :
            '<div style="color:#aaa;font-size:14px">' + t("empty_no_handyman_assigned") + '</div>') +
      '</div>' +
      '<div class="pg-card" style="margin-bottom:0">' +
        '<div class="pg-section-title">' + t("section_client") + '</div>' +
          (cl ? '<div style="display:flex;align-items:center;gap:12px">' +
            '<div class="pg-av">' + ini(cl.name) + '</div>' +
            '<div><div class="pg-link" style="font-weight:600" onclick="openCl(\'' + cl.id + '\')">' + esc(cl.name) + '</div>' +
            '<div style="color:#858585;font-size:13px">' + esc(cl.phone||"") + '</div>' +
            '<div style="color:#858585;font-size:13px">' + esc(cl.email||"") + '</div>' +
            '</div></div>' :
            '<div style="color:#aaa;font-size:14px">' + t("empty_card_not_activated") + '</div>') +
      '</div>' +
    '</div>' +

    '<div class="pg-section-title">' + tf("order_history_count", {count: orders.length}) + '</div>' +
    '<div class="pg-table-wrap">' +
      '<table class="pg-table"><thead><tr><th>' + t("th_date") + '</th><th>' + t("th_category") + '</th><th>' + t("th_status") + '</th><th>' + t("th_rating") + '</th><th>' + t("th_price") + '</th><th style="width:90px"></th></tr></thead>' +
        '<tbody>' + (orders.length ? orders.map(function(o) {
          return '<tr style="cursor:pointer" onclick="showOrderDetail(\'' + o.id + '\')">' +
            '<td style="color:#858585">' + fd(o.createdAt) + '</td>' +
            '<td>' + esc(o.category||"—") + '</td>' +
            '<td>' + bdg(o.status||"new") + '</td>' +
            '<td>' + (o.clientRating ? '<span style="color:#EF9F27">★ ' + o.clientRating + '</span>' : '<span style="color:#bbb">—</span>') + '</td>' +
            '<td>' + (o.price ? "$" + o.price : "<span style=\'color:#bbb\'>—</span>") + '</td>' +
            '<td style="text-align:right"><span style="font-size:13px;color:#4f00df;font-weight:600">' + t("label_view") + '</span></td>' +
          '</tr>';
        }).join("") : '<tr><td colspan="6" class="pg-empty">' + t("empty_no_orders") + '</td></tr>') +
        '</tbody>' +
      '</table>' +
    '</div>';
}
// ── ORDER DETAIL ──────────────────────────────────────────────
async function showOrderDetail(orderId, backPage) {
  nav("order-detail");
  var backBtn = document.getElementById("ordDetBack");
  // "nfc-pool-all" is a special backPage value meaning: return to the Cards page with the All Cards tab active
  backBtn.setAttribute("onclick",
    backPage === "nfc-pool-all" ? "nav('nfc-pool');switchPoolTab('all')" : "nav('" + backPage + "')");
  var content = document.getElementById("ordDetContent");
  content.innerHTML = '<div style="padding:60px;text-align:center"><div style="color:#aaa">' + t("loading_text") + '</div></div>';

  var order = await fsGet("orders", orderId);
  if (!order) { content.innerHTML = '<div style="padding:24px;text-align:center;color:#aaa">' + t("order_not_found") + '</div>'; return; }

  var [hm, cl, co] = await Promise.all([
    order.handymanId ? fsGet("handymen", order.handymanId) : Promise.resolve(null),
    order.clientId ? fsGet("clients", order.clientId) : Promise.resolve(null),
    order.companyId ? fsGet("companies", order.companyId) : Promise.resolve(null)
  ]);

  var statusOptions = ["new","in_progress","completed","cancelled"];
  var statusLabels = {new:t("pill_new"),in_progress:t("pill_in_progress"),completed:t("pill_completed"),cancelled:t("pill_cancelled")};
  var badgeMap = {new:"bu",in_progress:"bbl",completed:"ba",cancelled:"bi"};

  var photosHtml = "";
  var photoUrls = order.photoUrls || [];
  if (photoUrls.length) {
    photosHtml = '<div class="pg-card"><div class="pg-section-title">' + t("section_photos") + '</div>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
      photoUrls.map(function(url){ return '<img src="'+esc(url)+'" data-url="'+esc(url)+'" class="pg-photo" onclick="window.open(this.dataset.url,\'_blank\',\'noopener\')" />'; }).join("")+
      '</div></div>';
  }

  var reviewHtml = "";
  if (order.clientRating) {
    reviewHtml = '<div class="pg-card"><div class="pg-section-title">' + t("review_title") + '</div>'+
        '<div style="color:#EF9F27;font-size:20px;margin-bottom:8px">' + "★".repeat(order.clientRating) + '<span style="color:#ddd">' + "★".repeat(5 - order.clientRating) + '</span></div>'+
        (order.clientReview ? '<div style="font-size:14px;color:#555;line-height:1.6">' + esc(order.clientReview) + '</div>' : '<div style="color:#aaa">' + t("no_written_review") + '</div>')+
      '</div>';
  }

  content.innerHTML =
    // Header
    '<div class="pg-header" style="margin-bottom:20px">'+
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">'+
          bdg(order.status||"new") +
          '<span style="color:#858585;font-size:14px">' + fd(order.createdAt) + '</span>'+
        '</div>'+
        '<div class="cd-title" style="font-size:28px">' + (esc(order.category) || "—") + '</div>'+
        (order.description ? '<div style="font-size:15px;color:#555;line-height:1.6;margin-top:10px">' + esc(order.description) + '</div>' : '')+
    '</div>'+

    // Parties
    '<div class="pg-card">'+
      '<div class="pg-info-grid">'+
        '<div>'+
          '<div class="pg-info-label" style="margin-bottom:10px">' + t("section_client") + '</div>'+
          (cl ? '<div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="openCl(\''+cl.id+'\')"><div class="pg-av">'+ini(cl.name)+'</div><div><div class="pg-link" style="font-weight:600">'+(esc(cl.name) || "—")+'</div><div style="color:#858585;font-size:13px">'+esc(cl.phone||"")+'</div></div></div>' : '<span style="color:#bbb">—</span>')+
        '</div>'+
        '<div>'+
          '<div class="pg-info-label" style="margin-bottom:10px">' + t("section_handyman") + '</div>'+
          (hm ? '<div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="openHMDetail(\''+hm.id+'\',\'order-detail\')"><div class="pg-av">'+ini(hm.name)+'</div><div><div class="pg-link" style="font-weight:600">'+(esc(hm.name) || "—")+'</div><div style="color:#858585;font-size:13px">'+(esc(hm.phone) || "")+'</div></div></div>' : (order.isPublic ? '<div style="font-size:13px;color:#8B5CF6">&#x1F50D; ' + t("open_request_label") + '</div>' : '<span style="color:#bbb">—</span>'))+
        '</div>'+
      '</div>'+
    '</div>'+

    // Details
    '<div class="pg-card">'+
        '<div class="pg-section-title">' + t("section_details") + '</div>'+
        '<div class="pg-info-grid">'+
          '<div><div class="pg-info-label">' + t("info_company") + '</div><div class="pg-info-value">' + (co ? esc(co.name) : "—") + '</div></div>'+
          '<div><div class="pg-info-label">' + t("info_price") + '</div><div class="pg-info-value">' + (order.price ? "$" + esc(order.price) : "—") + '</div></div>'+
          '<div><div class="pg-info-label">' + t("info_created") + '</div><div class="pg-info-value">' + fd(order.createdAt) + '</div></div>'+
          (order.completedAt ? '<div><div class="pg-info-label">' + t("info_completed") + '</div><div class="pg-info-value">' + fd(order.completedAt) + '</div></div>' : '')+
        '</div>'+
    '</div>'+

    photosHtml + reviewHtml +

    // Status update
    '<div class="pg-card">'+
        '<div class="pg-section-title">' + t("section_update_status") + '</div>'+
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px">'+
          statusOptions.map(function(s){
            var isCurrent = order.status === s;
            return '<button class="pg-pill'+(isCurrent?" active":"")+'" '+(isCurrent?"disabled":"")+' onclick="updateOrderStatus(\''+orderId+'\',\''+s+'\')">'+statusLabels[s]+'</button>';
          }).join("")+
        '</div>'+
        '<div style="display:flex;gap:10px;align-items:center">'+
          '<input id="ordPrice" type="number" placeholder="' + t("ph_set_price") + '" style="max-width:160px;padding:11px 14px;background:#fef9f9;border:1px solid #f1eeee;border-radius:10px;font-size:14px" value="'+esc(order.price||"")+'"/>'+
          '<button class="dbtn-save" style="padding:11px 20px" onclick="updateOrderPrice(\''+orderId+'\')">' + t("btn_save_price") + '</button>'+
        '</div>'+
    '</div>';
}

async function updateOrderStatus(orderId, newStatus) {
  var extra = {};
  if (newStatus === "completed") extra.completedAt = sv(new Date().toISOString());
  var ok = await fsMerge("orders", orderId, Object.assign({ status: sv(newStatus) }, extra));
  if (ok) { toast(tf("toast_status_updated_to", {status: newStatus})); showOrderDetail(orderId, "orders"); }
  else toast(t("toast_error_updating_status"));
}

async function updateOrderPrice(orderId) {
  var price = document.getElementById("ordPrice").value.trim();
  if (!price) { toast(t("toast_enter_price")); return; }
  var ok = await fsMerge("orders", orderId, { price: sv(price) });
  if (ok) toast(tf("toast_price_saved", {price: price}));
  else toast(t("toast_error_saving_price"));
}
async function loadOrds() {
  var tb = document.getElementById("ordBody");
  tb.innerHTML = '<tr><td colspan="7" class="empty">' + t("loading_text") + '</td></tr>';
  var loaded = await Promise.all([fsL("orders"), fsL("handymen").catch(function() { return []; })]);
  allOrds = loaded[0];
  var hma = {};
  loaded[1].forEach(function(h) { hma[h.id] = h.name; });
  CC._hma = hma;
  renderOrds();
}

function renderOrds() {
  var tb = document.getElementById("ordBody");
  var fil = allOrds.filter(function(o) { return ordF === "all" || o.status === ordF; });
  if (!fil.length) { tb.innerHTML = '<tr><td colspan="7" class="pg-empty">' + t("empty_no_orders_found") + '</td></tr>'; return; }
  var hma = CC._hma || {};
  tb.innerHTML = fil.map(function(o) {
    var cn = (CC.cos[o.companyId] || {}).name || o.companyId || "—";
    var cln = (CC.cl[o.clientId] || {}).name || o.clientId || "—";
    return '<tr style="cursor:pointer" onclick="showOrderDetail(\''+o.id+'\',\'orders\')">' +
      '<td style="color:#858585">' + fd(o.createdAt) + '</td>' +
      '<td>' + cln + '</td>' +
      '<td>' + esc(hma[o.handymanId] || "—") + '</td>' +
      '<td style="color:#858585">' + cn + '</td>' +
      '<td>' + (esc(o.category) || "—") + '</td>' +
      '<td>' + bdg(o.status || "new") + '</td>' +
      '<td style="font-weight:600">' + (o.price ? "$" + o.price : "—") + '</td>' +
    '</tr>';
  }).join("");
}

function filterOrds(s, btn) {
  ordF = s;
  document.querySelectorAll("#page-orders .pg-pill").forEach(function(b) { b.classList.remove("active"); });
  btn.classList.add("active");
  renderOrds();
}

// ── EMAIL ─────────────────────────────────────────────────────
async function sendEmail(to, subject, html) {
  var r = await adminApi("send-mail", { to: to, subject: subject, html: html });
  if (!r.ok) console.warn("sendEmail failed", r.error);
  return r;
}

function emailApproved(app, dashLink) {
  var adminMsg = app.adminMessage ? "<div style='background:#f0f6ff;border-radius:8px;padding:14px;margin:16px 0'><strong>" + t("email_note_from_team") + "</strong><br>" + esc(app.adminMessage) + "</div>" : "";
  return sendEmail(app.email,
    tf("email_approved_subject", {company: app.companyName}),
    "<div style='font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px'>" +
    "<h2 style='color:#185FA5'>HandyCat</h2>" +
    "<p>" + tf("email_greeting", {name: esc(app.contactPerson)}) + "</p>" +
    "<p>" + tf("email_approved_body1", {company: esc(app.companyName)}) + "</p>" +
    "<p>" + tf("email_approved_body2", {count: Number(app.requestedCards) || 0}) + "</p>" +
    adminMsg +
    "<div style='margin:24px 0'>" +
    "<p style='margin-bottom:12px'>" + t("email_access_dashboard") + "</p>" +
    "<a href='" + dashLink + "' style='display:inline-block;background:#185FA5;color:#fff;text-decoration:none;padding:14px 28px;border-radius:12px;font-weight:600;font-size:15px'>" + t("email_open_dashboard") + "</a>" +
    "</div>" +
    "<p style='font-size:13px;color:#888'>" + t("email_magic_link_expiry") + "</p>" +
    "<p>" + tf("email_application_id", {id: app.id}) + "</p>" +
    "<p>" + t("email_signature") + "</p>" +
    "</div>"
  );
}

function emailRevision(app) {
  var adminMsg = app.adminMessage ? "<div style='background:#fff8e6;border-radius:8px;padding:14px;margin:16px 0'><strong>" + t("email_feedback_from_team") + "</strong><br>" + esc(app.adminMessage) + "</div>" : "";
  return sendEmail(app.email,
    t("email_revision_subject"),
    "<div style='font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px'>" +
    "<h2 style='color:#185FA5'>HandyCat</h2>" +
    "<p>" + tf("email_greeting", {name: esc(app.contactPerson)}) + "</p>" +
    "<p>" + tf("email_revision_body", {company: esc(app.companyName)}) + "</p>" +
    adminMsg +
    "<div style='margin:24px 0'>" +
    "<a href='https://app.handycat.us/apply' style='display:inline-block;background:#F59E0B;color:#fff;text-decoration:none;padding:14px 28px;border-radius:12px;font-weight:600;font-size:15px'>" + t("email_resubmit_application") + "</a>" +
    "</div>" +
    "<p>" + tf("email_original_application_id", {id: app.id}) + "</p>" +
    "<p>" + t("email_signature") + "</p>" +
    "</div>"
  );
}

function emailRejected(app) {
  var adminMsg = app.adminMessage ? "<div style='background:#fef2f2;border-radius:8px;padding:14px;margin:16px 0'><strong>" + t("email_reason") + "</strong><br>" + esc(app.adminMessage) + "</div>" : "";
  return sendEmail(app.email,
    tf("email_rejected_subject", {company: app.companyName}),
    "<div style='font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px'>" +
    "<h2 style='color:#185FA5'>HandyCat</h2>" +
    "<p>" + tf("email_greeting", {name: esc(app.contactPerson)}) + "</p>" +
    "<p>" + t("email_thank_you_interest") + "</p>" +
    "<p>" + tf("email_rejected_body", {company: esc(app.companyName)}) + "</p>" +
    adminMsg +
    "<p>" + t("email_reapply_notice") + "</p>" +
    "<p>" + t("email_signature") + "</p>" +
    "</div>"
  );
}

// ── APPLICATIONS ──────────────────────────────────────────────
var allApps = [], appFilter = "all";
var APP_ST = {
  pending:       { cls: "bu",   label: "&#x1F7E1; " + t("pill_pending") },
  approved:      { cls: "ba",   label: "&#x1F7E2; " + t("pill_approved") },
  rejected:      { cls: "bred", label: "&#x1F534; " + t("pill_rejected") },
  needs_revision:{ cls: "bw",   label: "&#x1F7E0; " + t("pill_needs_revision") }
};

async function loadApps() {
  var tb = document.getElementById("appsBody");
  tb.innerHTML = '<tr><td colspan="8" class="empty">' + t("loading_text") + '</td></tr>';
  allApps = await fsL("company_applications", 200);
  allApps.sort(function(a, b) { return (b.createdAt || "").localeCompare(a.createdAt || ""); });
  renderApps();
}

// ── CARD REQUESTS ─────────────────────────────────────────────
var allCardReqs = [];
var cardReqPage = 1, cardReqPageSize = 10;

function renderPagerHTML(page, totalPages, pageSize, ns) {
  return '<div class="pg-pager">' +
    '<select class="dfg-select pg-pager-size" onchange="' + ns + 'SetPageSize(this.value)">' +
      '<option value="10"' + (pageSize === 10 ? ' selected' : '') + '>10 / page</option>' +
      '<option value="20"' + (pageSize === 20 ? ' selected' : '') + '>20 / page</option>' +
    '</select>' +
    '<div class="pg-pager-nav">' +
      '<button class="pg-pager-btn" ' + (page <= 1 ? 'disabled' : '') + ' onclick="' + ns + 'GoPage(' + (page - 1) + ')">&#8249;</button>' +
      '<span class="pg-pager-label">Page ' + page + ' of ' + totalPages + '</span>' +
      '<button class="pg-pager-btn" ' + (page >= totalPages ? 'disabled' : '') + ' onclick="' + ns + 'GoPage(' + (page + 1) + ')">&#8250;</button>' +
    '</div>' +
  '</div>';
}

function cardReqSetPageSize(v) { cardReqPageSize = parseInt(v, 10); cardReqPage = 1; renderCardReqs(); }
function cardReqGoPage(p) { cardReqPage = p; renderCardReqs(); }

async function loadCardRequests() {
  var tb = document.getElementById("cardReqBody");
  tb.innerHTML = '<tr><td colspan="6" class="empty">' + t("loading_text") + '</td></tr>';
  allCardReqs = await fsL("card_requests", 200);
  allCardReqs.sort(function(a, b) { return (b.createdAt || "").localeCompare(a.createdAt || ""); });
  // Update badge
  var pendingCR = allCardReqs.filter(function(r) { return r.status === "pending"; }).length;
  var badge = document.getElementById("cardReqBadge");
  if (pendingCR > 0) { badge.textContent = pendingCR + " pending"; badge.style.display = "inline"; }
  else badge.style.display = "none";
  renderCardReqs();
}

function renderCardReqs() {
  var tb = document.getElementById("cardReqBody");
  var pagerEl = document.getElementById("cardReqPager");
  if (!allCardReqs.length) { tb.innerHTML = '<tr><td colspan="7" class="pg-empty">' + t("empty_no_card_requests_yet") + '</td></tr>'; if (pagerEl) pagerEl.innerHTML = ""; return; }
  var totalPages = Math.max(1, Math.ceil(allCardReqs.length / cardReqPageSize));
  if (cardReqPage > totalPages) cardReqPage = totalPages;
  var start = (cardReqPage - 1) * cardReqPageSize;
  var pageItems = allCardReqs.slice(start, start + cardReqPageSize);
  var stMap = {
    pending:     { cls: "pg-badge-yellow", label: t("pill_pending") },
    in_progress: { cls: "pg-badge-blue",   label: t("pill_in_progress") },
    approved:    { cls: "pg-badge-green",  label: t("pill_approved") },
    rejected:    { cls: "pg-badge-red",    label: t("pill_rejected") }
  };
  tb.innerHTML = pageItems.map(function(req) {
    var st = stMap[req.status] || stMap.pending;
    var total = req.count || 10;
    var btns = cardReqActionsHTML(req);
    return '<tr style="cursor:pointer" onclick="openCardReqDetail(\'' + req.id + '\')">' +
      '<td style="color:#858585">' + fd(req.createdAt) + '</td>' +
      '<td style="font-weight:600">' + esc(req.companyName || req.companyId || "—") + '</td>' +
      '<td style="font-weight:700;color:#4f00df;font-size:16px">' + total + '</td>' +
      '<td style="color:#858585">' + esc(req.notes || "—") + '</td>' +
      '<td><span class="pg-badge ' + st.cls + '">' + st.label + '</span></td>' +
      '<td onclick="event.stopPropagation()">' + btns + '</td>' +
      '<td style="text-align:right"><button class="cd-action-btn" title="View"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></td>' +
    '</tr>';
  }).join("");
  if (pagerEl) pagerEl.innerHTML = renderPagerHTML(cardReqPage, totalPages, cardReqPageSize, "cardReq");
}

// Print IDs are plain integers for generated cards ("112") and short codes for
// legacy ones ("B0T3H1"). Numeric ones sort numerically, codes go after them.
function pidNum(c) { var p = String(c.printId == null ? "" : c.printId); return /^\d+$/.test(p) ? parseInt(p, 10) : NaN; }
function pidSortDesc(a, b) {
  var na = pidNum(a), nb = pidNum(b), ia = !isNaN(na), ib = !isNaN(nb);
  if (ia && ib) return nb - na;
  if (ia) return -1;
  if (ib) return 1;
  return String(b.printId || "").localeCompare(String(a.printId || ""));
}
// Pick `count` stock cards. With a start Print ID, take the run of cards
// beginning at that number (ascending) so the admin can pull a contiguous
// block out of the box; without one, take the lowest numbers first.
function pickStockCards(stock, count, startPid) {
  var sorted = stock.slice().sort(function(a, b) { return -pidSortDesc(a, b); });
  if (startPid) sorted = sorted.filter(function(c) { var n = pidNum(c); return !isNaN(n) && n >= startPid; });
  return sorted.slice(0, count);
}
function pidRangeInfo(cards) {
  var nums = cards.map(pidNum).filter(function(n) { return !isNaN(n); }).sort(function(a, b) { return a - b; });
  if (!nums.length) return { label: "", gaps: [] };
  var gaps = [];
  for (var i = 1; i < nums.length; i++) for (var g = nums[i-1] + 1; g < nums[i]; g++) gaps.push(g);
  return { label: "#" + nums[0] + (nums.length > 1 ? " – #" + nums[nums.length-1] : ""), gaps: gaps };
}
function assignPreviewHTML(stock, count, startPid) {
  if (!count || count < 1) return "";
  var picked = pickStockCards(stock, count, startPid);
  if (!picked.length) return '<span style="color:#D93025">' + tf("warn_none_from_start", {start: startPid}) + '</span>';
  var info = pidRangeInfo(picked);
  var html = tf("preview_will_assign", {range: info.label, count: picked.length});
  if (picked.length < count) html += ' <span style="color:#D93025">' + tf("warn_only_n_from_start", {count: picked.length, start: startPid}) + '</span>';
  if (info.gaps.length) html += '<br><span style="color:#b26a00">' + tf("warn_range_gaps", {skips: info.gaps.slice(0, 12).map(function(g){ return "#" + g; }).join(", ") + (info.gaps.length > 12 ? "…" : "")}) + '</span>';
  return html;
}

var CSV_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="#164e23" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var CHECK_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="pg-icon"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#111" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Action cell shared by the Requests table and the request detail page.
function cardReqActionsHTML(req) {
  var total = req.count || 10;
  var generated = req.generatedCount || 0;
  var rid = req.id.replace(/'/g, "");
  var cid = (req.companyId || "").replace(/'/g, "");
  if (req.status === "pending") {
    return '<div style="display:flex;gap:8px;align-items:center">' +
      '<button class="pg-circle-btn pg-circle-approve" title="' + t("btn_approve") + '" onclick="openAssignModal(this,\'' + rid + '\',\'' + cid + '\',' + total + ')"><span class="pg-spin"></span>' + CHECK_ICON + '</button>' +
      '<button class="pg-circle-btn pg-circle-reject" title="' + t("btn_reject") + '" onclick="rejectCardReq(\'' + rid + '\')"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="pg-icon"><path d="M19.207 0.707031L10.3105 9.60352L19.207 18.5L18.5 19.207L9.60352 10.3105L0.707031 19.207L0 18.5L8.89648 9.60352L0 0.707031L0.707031 0L9.60352 8.89648L18.5 0L19.207 0.707031Z" fill="#D93025"/></svg></button>' +
    '</div>';
  }
  if (req.status === "in_progress") {
    return '<div style="display:flex;align-items:center;gap:10px">' +
      '<span style="font-size:13px;color:#858585">' + tf("label_generated_created", {generated: generated, total: total}) + '</span>' +
      '<button class="pg-decision-btn pg-decision-revision" onclick="approveCardReq(this,\'' + rid + '\',' + total + ',\'' + cid + '\')">' + t("btn_resume") + '</button>' +
    '</div>';
  }
  if (req.status === "rejected") {
    return '<span style="color:#858585;font-size:13px">' + fd(req.rejectedAt || req.createdAt) + '</span>';
  }
  return '<div style="display:flex;align-items:center;gap:10px">' +
    '<span style="color:#858585;font-size:13px">' + fd(req.approvedAt || req.createdAt) + '</span>' +
    '<button class="cd-add-cards-btn" style="background:#fff;border:1.5px solid #eceae6;color:#111;gap:6px;padding:7px 12px;font-size:13px;margin:0" onclick="exportReqCards(\'' + rid + '\',\'' + esc(req.companyName || "").replace(/'/g, "") + '\')">' + CSV_ICON + ' <span data-i18n="btn_export_csv">' + t("btn_export_csv") + '</span></button>' +
  '</div>';
}

// ═══════════════════════════════════════════════════════════
// CARD REQUEST DETAIL PAGE
// ═══════════════════════════════════════════════════════════
var crdReqId = null, crdCards = [];

async function openCardReqDetail(reqId, keepHistory) {
  var req = allCardReqs.find(function(r) { return r.id === reqId; }) || await fsGet("card_requests", reqId);
  if (!req) { toast(t("toast_request_not_found")); return; }
  crdReqId = reqId;
  var stMap = {
    pending:     { cls: "pg-badge-yellow", label: t("pill_pending") },
    in_progress: { cls: "pg-badge-blue",   label: t("pill_in_progress") },
    approved:    { cls: "pg-badge-green",  label: t("pill_approved") },
    rejected:    { cls: "pg-badge-red",    label: t("pill_rejected") }
  };
  var st = stMap[req.status] || stMap.pending;
  var coName = req.companyName || (CC.cos[req.companyId] || {}).name || req.companyId || "—";
  document.getElementById("crdTitle").textContent = coName;
  document.getElementById("crdMeta").textContent = [fd(req.createdAt), req.email, req.id].filter(Boolean).join(" · ");
  document.getElementById("crdStatus").innerHTML = '<span class="pg-badge ' + st.cls + '">' + st.label + '</span>';
  document.getElementById("crdActions").innerHTML = cardReqActionsHTML(req);
  var coBtn = document.getElementById("crdOpenCo");
  coBtn.style.display = req.companyId ? "" : "none";
  coBtn.onclick = function() { nav("companies", 1); openCo(req.companyId); };
  document.getElementById("crdNotes").textContent = req.notes || "—";

  var tb = document.getElementById("crdBody");
  tb.innerHTML = '<tr><td colspan="6" class="pg-empty">' + t("loading_text") + '</td></tr>';
  if (!keepHistory) nav("card-req-detail"); else if (!document.getElementById("page-card-req-detail").classList.contains("active")) nav("card-req-detail");

  // Cards tied to this request; older requests pre-date requestId, fall back to company cards.
  crdCards = await fsQ("nfc_cards", [{field:"requestId", value:reqId}]);
  var isFallback = false;
  if (!crdCards.length && req.companyId && req.status === "approved") {
    crdCards = await fsQ("nfc_cards", [{field:"companyId", value:req.companyId}]);
    isFallback = crdCards.length > 0;
  }
  var total = req.count || 0;
  var active = crdCards.filter(function(c){ return c.status === "active"; }).length;
  var assigned = crdCards.filter(function(c){ return c.status === "assigned"; }).length;
  var free = crdCards.filter(function(c){ return c.status === "unassigned"; }).length;
  document.getElementById("crdStats").innerHTML =
    '<div class="cd-stat"><div class="cd-stat-num">' + total + '</div><div class="cd-stat-label">' + t("label_requested_cards") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num" style="color:#4f00df">' + crdCards.length + '</div><div class="cd-stat-label">' + t("label_issued_cards") + (isFallback ? ' *' : '') + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + free + '</div><div class="cd-stat-label">' + t("status_available") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">' + assigned + '</div><div class="cd-stat-label">' + t("status_assigned") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num" style="color:#164e23">' + active + '</div><div class="cd-stat-label">' + t("status_activated") + '</div></div>';
  document.getElementById("crdFallbackNote").style.display = isFallback ? "" : "none";

  if (!crdCards.length) { tb.innerHTML = '<tr><td colspan="6" class="pg-empty">' + t("empty_no_cards_found") + '</td></tr>'; return; }
  var hmById = CC._hmById || {};
  crdCards.sort(function(a,b){ return String(a.printId||"").localeCompare(String(b.printId||"")); });
  tb.innerHTML = crdCards.map(function(c) {
    var hm = c.handymanId ? (hmById[c.handymanId] || c.handymanId) : "—";
    return '<tr style="cursor:pointer" onclick="showAllCardDetail(\'' + c.id + '\')">' +
      '<td><span class="cd-pid">' + esc(c.printId || c.id.slice(-6).toUpperCase()) + '</span></td>' +
      '<td class="cd-token">' + esc(c.id) + '</td>' +
      '<td>' + bdg(c.status || "unassigned") + '</td>' +
      '<td style="color:#858585">' + esc(hm) + '</td>' +
      '<td style="color:#858585">' + (c.clientId ? t("status_activated") : "—") + '</td>' +
      '<td style="color:#858585">' + csvDate(c.createdAt) + '</td>' +
    '</tr>';
  }).join("");
}

function refreshCardReqDetailIfOpen() {
  var pg = document.getElementById("page-card-req-detail");
  if (pg && pg.classList.contains("active") && crdReqId) openCardReqDetail(crdReqId, true);
}

// ═══════════════════════════════════════════════════════════
// CARDS → COMPANIES TAB
// ═══════════════════════════════════════════════════════════
var poolCompanies = [];

async function loadPoolCompanies() {
  var tb = document.getElementById("pcBody");
  tb.innerHTML = '<tr><td colspan="7" class="pg-empty">' + t("loading_text") + '</td></tr>';
  var results = await Promise.all([
    fsL("companies", 2000),
    poolAllCards.length ? Promise.resolve(poolAllCards) : fsL("nfc_cards", 20000)
  ]);
  var cos = results[0], cards = results[1];
  cos.forEach(function(c) { CC.cos[c.id] = Object.assign(CC.cos[c.id] || {}, c); });
  var agg = {};
  cards.forEach(function(c) {
    if (!c.companyId) return;
    var a = agg[c.companyId] || (agg[c.companyId] = { total: 0, free: 0, assigned: 0, active: 0 });
    a.total++;
    if (c.status === "unassigned") a.free++;
    else if (c.status === "assigned") a.assigned++;
    else if (c.status === "active") a.active++;
  });
  poolCompanies = cos.map(function(c) {
    return Object.assign({}, c, { _cards: agg[c.id] || { total: 0, free: 0, assigned: 0, active: 0 } });
  }).sort(function(a, b) { return b._cards.total - a._cards.total || (a.name || "").localeCompare(b.name || ""); });
  renderPoolCompanies();
}

function renderPoolCompanies() {
  var q = (document.getElementById("pcSearch") || {value:""}).value.trim().toLowerCase();
  var tb = document.getElementById("pcBody");
  var fil = poolCompanies.filter(function(c) {
    if (!q) return true;
    return (c.name || "").toLowerCase().includes(q) || (c.email || "").toLowerCase().includes(q) || (c.id || "").toLowerCase().includes(q);
  });
  if (!fil.length) { tb.innerHTML = '<tr><td colspan="7" class="pg-empty">' + t("empty_no_companies") + '</td></tr>'; return; }
  tb.innerHTML = fil.map(function(c) {
    var a = c._cards;
    var cid = c.id.replace(/'/g, "");
    return '<tr style="cursor:pointer" onclick="nav(\'companies\',1);openCo(\'' + cid + '\')">' +
      '<td><div style="font-weight:600">' + esc(c.name || c.id) + '</div><div style="font-size:12px;color:#858585">' + esc(c.email || "") + '</div></td>' +
      '<td>' + bdg(c.status === "inactive" ? "inactive" : "active") + '</td>' +
      '<td style="font-weight:700;color:#4f00df;font-size:16px">' + a.total + '</td>' +
      '<td>' + a.free + '</td>' +
      '<td>' + a.assigned + '</td>' +
      '<td style="color:#164e23;font-weight:600">' + a.active + '</td>' +
      '<td style="text-align:right"><button class="cd-action-btn" title="View"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></td>' +
    '</tr>';
  }).join("");
}

// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// NFC POOL — generate → export → manufacturer → assign
// ═══════════════════════════════════════════════════════════

var poolAllCards = [];
var poolAllBatches = [];
var poolBatchPage = 1, poolBatchPageSize = 10;
function poolBatchSetPageSize(v) { poolBatchPageSize = parseInt(v, 10); poolBatchPage = 1; renderPoolBatches(); }
function poolBatchGoPage(p) { poolBatchPage = p; renderPoolBatches(); }
var pbdBatchId = null;
var pbdFilter = 'all';
var pbdCards = [];                              // every card of the open order
var pbdSort = { key: 'printId', dir: 1 };       // default: Print ID ascending

function switchPoolTab(tab) {
  document.getElementById('poolTabOrders').classList.toggle('active', tab === 'orders');
  document.getElementById('poolTabAll').classList.toggle('active', tab === 'all');
  document.getElementById('poolTabReq').classList.toggle('active', tab === 'requests');
  document.getElementById('poolTabCos').classList.toggle('active', tab === 'companies');
  document.getElementById('poolPanelOrders').style.display = tab === 'orders' ? '' : 'none';
  document.getElementById('poolPanelAll').style.display = tab === 'all' ? '' : 'none';
  document.getElementById('poolPanelRequests').style.display = tab === 'requests' ? '' : 'none';
  document.getElementById('poolPanelCompanies').style.display = tab === 'companies' ? '' : 'none';
  if (tab === 'all') loadAllCards();
  if (tab === 'companies') loadPoolCompanies();
}

async function loadPool() {
  nav('nfc-pool');
  switchPoolTab('requests');
  loadCardRequests();
  document.getElementById('poolBatchBody').innerHTML =
    '<tr><td colspan="5" class="pg-empty">' + t("loading_text") + '</td></tr>';

  var loaded = await Promise.all([
    fsL('nfc_cards', 5000).catch(function() { return []; }),
    fsL('nfc_batches', 500).catch(function() { return []; })
  ]);
  poolAllCards = loaded[0];
  poolAllBatches = loaded[1];

  await ensureLegacyBatch();
  if (poolBatchesRulesMissing) {
    poolBatchesRulesMissing = false;
    toast(t("toast_rules_missing_batches"));
  }

  // Stats
  var stockCount    = poolAllCards.filter(function(x){ return !x.companyId || x.companyId === ''; }).length;
  var totalCount    = poolAllCards.length;
  var assignedCount = totalCount - stockCount;

  document.getElementById('poolStatsRow').innerHTML =
    '<div class="cd-stat"><div class="cd-stat-num">'+totalCount+'</div><div class="cd-stat-label">' + t("stat_total_generated") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num" style="color:#164e23">'+stockCount+'</div><div class="cd-stat-label">' + t("stat_in_stock") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num" style="color:#4f00df">'+assignedCount+'</div><div class="cd-stat-label">' + t("stat_assigned") + '</div></div>';

  // Export button: disabled if nothing in stock
  var exportBtn = document.getElementById('poolExportBtn');
  if (exportBtn) exportBtn.disabled = stockCount === 0;

  renderPoolBatches();
}

// One-time migration: group any pre-existing cards that have no order/batch
// into a single "Legacy" order so the hierarchy is consistent going forward.
// Also recovers cards that were tagged batch_legacy in an earlier attempt
// where the batch document itself failed to write (e.g. missing Firestore rule).
var poolBatchesRulesMissing = false;
async function ensureLegacyBatch() {
  var hasLegacy = poolAllBatches.some(function(b){ return b.id === 'batch_legacy'; });
  if (hasLegacy) return;

  var orphans = poolAllCards.filter(function(c){
    return !c.batchId || c.batchId === '' || c.batchId === 'batch_legacy';
  });
  if (!orphans.length) return;

  var earliest = null;
  orphans.forEach(function(c) {
    if (c.createdAt && (!earliest || c.createdAt < earliest)) earliest = c.createdAt;
  });

  var ok = await fsP('nfc_batches', 'batch_legacy', {
    number:    nv(0),
    label:     sv('Legacy'),
    count:     nv(orphans.length),
    status:    sv('delivered'),
    createdAt: sv(earliest || new Date().toISOString())
  });

  if (!ok) {
    // Don't tag cards with a batchId that points at a batch we couldn't create —
    // that would silently orphan them. Surface this once so it can be fixed.
    poolBatchesRulesMissing = true;
    return;
  }

  var untagged = orphans.filter(function(c){ return !c.batchId || c.batchId === ''; });
  var chunkSize = 5;
  for (var i = 0; i < untagged.length; i += chunkSize) {
    var slice = untagged.slice(i, i + chunkSize);
    await Promise.all(slice.map(function(c) {
      return fsMerge('nfc_cards', c.id, { batchId: sv('batch_legacy') });
    }));
  }

  orphans.forEach(function(c){ c.batchId = 'batch_legacy'; });
  poolAllBatches.push({
    id: 'batch_legacy', number: 0, label: 'Legacy',
    count: orphans.length, status: 'delivered',
    createdAt: earliest || new Date().toISOString()
  });
}

var POOL_STATUS_KEYS = { ordered: 'status_ordered', manufactured: 'status_manufactured', delivered: 'status_delivered' };

function poolStatusSelectHTML(batchId, current, extraStyle) {
  return '<select class="dfg-select" style="' + (extraStyle||'') + '" onchange="updateBatchStatus(\'' + batchId + '\', this.value)">' +
    Object.keys(POOL_STATUS_KEYS).map(function(k) {
      return '<option value="' + k + '"' + (k === current ? ' selected' : '') + '>' + t(POOL_STATUS_KEYS[k]) + '</option>';
    }).join('') +
  '</select>';
}

function renderPoolBatches() {
  var tb = document.getElementById('poolBatchBody');
  var pagerEl = document.getElementById('poolBatchPager');
  if (!poolAllBatches.length) {
    tb.innerHTML = '<tr><td colspan="5" class="pg-empty">' + t("empty_no_orders_click_generate") + '</td></tr>';
    if (pagerEl) pagerEl.innerHTML = '';
    return;
  }
  var sorted = poolAllBatches.slice().sort(function(a,b){ return (b.number||0) - (a.number||0); });
  var totalPages = Math.max(1, Math.ceil(sorted.length / poolBatchPageSize));
  if (poolBatchPage > totalPages) poolBatchPage = totalPages;
  var start = (poolBatchPage - 1) * poolBatchPageSize;
  var pageItems = sorted.slice(start, start + poolBatchPageSize);
  tb.innerHTML = pageItems.map(function(b) {
    var title = b.label ? esc(b.label) : tf('label_order_num', {num: b.number||'—'});
    var st = b.status || 'ordered';
    var actual = poolAllCards.filter(function(c){ return c.batchId === b.id; }).length;
    var cnt = actual === (b.count||0) ? String(actual) : actual + ' <span style="color:#858585;font-size:12px" title="' + t("label_ordered_count") + '">/ ' + (b.count||0) + '</span>';
    return '<tr style="cursor:pointer" onclick="openBatchDetail(\'' + b.id + '\')">' +
      '<td style="font-weight:600;color:#4f00df">' + title + '</td>' +
      '<td style="color:#858585">' + fd(b.createdAt) + '</td>' +
      '<td>' + cnt + '</td>' +
      '<td onclick="event.stopPropagation()">' + poolStatusSelectHTML(b.id, st, 'padding:6px 30px 6px 10px;font-size:12px') + '</td>' +
      '<td style="text-align:right"><button class="cd-action-btn" onclick="event.stopPropagation();openBatchDetail(\'' + b.id + '\')" title="View"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></td>' +
    '</tr>';
  }).join('');
  if (pagerEl) pagerEl.innerHTML = renderPagerHTML(poolBatchPage, totalPages, poolBatchPageSize, 'poolBatch');
}

async function updateBatchStatus(batchId, status) {
  var ok = await fsMerge('nfc_batches', batchId, { status: sv(status) });
  if (!ok) { toast(t('toast_could_not_update_status')); return; }
  var b = poolAllBatches.find(function(x){ return x.id === batchId; });
  if (b) b.status = status;
  toast(t('toast_status_updated'));
  if (document.getElementById('page-nfc-pool').classList.contains('active')) renderPoolBatches();
}

function deleteBatchConfirm() {
  if (!pbdBatchId) return;
  var b = poolAllBatches.find(function(x){ return x.id === pbdBatchId; });
  var title = b && b.label ? b.label : tf('label_order_num', {num: b ? (b.number||'—') : '—'});
  cfm(tf('confirm_delete_order_title', {title: title}), t('confirm_delete_order_sub'), async function() {
    var ok = await fsDel('nfc_batches', pbdBatchId);
    closeModal('mConfirm');
    if (ok) {
      toast(t('toast_order_deleted'));
      poolAllBatches = poolAllBatches.filter(function(x){ return x.id !== pbdBatchId; });
      nav('nfc-pool');
      switchPoolTab('orders');
      renderPoolBatches();
    } else {
      toast(t('toast_error_deleting_order'));
    }
  });
}

async function openBatchDetail(batchId) {
  pbdBatchId = batchId;
  pbdFilter = 'all';
  var b = poolAllBatches.find(function(x){ return x.id === batchId; });
  if (!b) { toast(t('order_not_found')); return; }

  document.getElementById('pbdTitle').textContent = b.label ? b.label : tf('label_order_num', {num: b.number||'—'});
  document.getElementById('pbdMeta').textContent = tf('label_created_cards_meta', {date: fd(b.createdAt), count: b.count||0});
  document.getElementById('pbdStatusSelect').value = b.status || 'ordered';

  document.querySelectorAll('#page-pool-batch-detail .pg-pill').forEach(function(x){ x.classList.remove('active'); });
  var firstPill = document.querySelector('#page-pool-batch-detail .pg-pill');
  if (firstPill) firstPill.classList.add('active');
  ['pbdSearchInput', 'pbdFrom', 'pbdTo', 'pbdCompany'].forEach(function(id) { var el = document.getElementById(id); if (el) el.value = ''; });
  var mobileSel = document.querySelector('#page-pool-batch-detail .pool-filter-mobile');
  if (mobileSel) mobileSel.value = 'all';
  pbdSort = { key: 'printId', dir: 1 };

  // Show what the pool already has right away, then load the whole order: the pool list is capped
  // (5000 rows), so for a large pool it can hold only part of this order.
  pbdCards = poolAllCards.filter(function(c){ return c.batchId === batchId; });
  nav('pool-batch-detail');
  renderPoolDetail();
  var loaded = await fsQ('nfc_cards', [{ field: 'batchId', value: batchId }], 20000);
  if (pbdBatchId !== batchId) return;           // another order was opened meanwhile
  var byId = {};
  pbdCards.concat(loaded).forEach(function(c) { byId[c.id] = c; });   // a failed/partial read never loses cards
  pbdCards = Object.keys(byId).map(function(id) { return byId[id]; });
  renderPoolDetail();
}

function isStockCard(c) { return !c.companyId || c.companyId === ''; }

function renderPoolDetailStats() {
  var stock = pbdCards.filter(isStockCard).length;
  var assigned = pbdCards.length - stock;
  document.getElementById('pbdStats').innerHTML =
    '<div class="cd-stat"><div class="cd-stat-num">'+pbdCards.length+'</div><div class="cd-stat-label">' + t("stat_total_cards_short") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num" style="color:#164e23">'+stock+'</div><div class="cd-stat-label">' + t("stat_in_stock") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num" style="color:#4f00df">'+assigned+'</div><div class="cd-stat-label">' + t("stat_assigned") + '</div></div>';
}

// Company filter lists only the companies that actually hold cards of this order.
function renderPoolDetailCompanies() {
  var sel = document.getElementById('pbdCompany');
  if (!sel) return;
  var cur = sel.value, seen = {};
  pbdCards.forEach(function(c) { if (!isStockCard(c)) seen[c.companyId] = ((CC.cos[c.companyId] || {}).name) || c.companyId; });
  var ids = Object.keys(seen).sort(function(a, b) { return String(seen[a]).localeCompare(String(seen[b])); });
  sel.innerHTML = '<option value="">' + t("filter_all_companies") + '</option>' +
    ids.map(function(id) { return '<option value="' + esc(id) + '">' + esc(seen[id]) + '</option>'; }).join('');
  sel.value = seen[cur] ? cur : '';
}

function printIdNum(c) { var n = parseInt(c.printId, 10); return isNaN(n) ? null : n; }

function sortPoolDetail(key) {
  pbdSort = pbdSort.key === key ? { key: key, dir: -pbdSort.dir } : { key: key, dir: 1 };
  renderPoolDetail();
}

// The rows the table shows (and the CSV exports): status pill + company + Print ID range + search, sorted.
function poolDetailRows() {
  var q = (document.getElementById('pbdSearchInput')||{value:''}).value.trim().toLowerCase();
  var co = (document.getElementById('pbdCompany')||{value:''}).value;
  var from = parseInt((document.getElementById('pbdFrom')||{value:''}).value, 10);
  var to = parseInt((document.getElementById('pbdTo')||{value:''}).value, 10);
  var fil = pbdCards.filter(function(c) {
    if (pbdFilter === 'stock' && !isStockCard(c)) return false;
    if (pbdFilter === 'assigned' && isStockCard(c)) return false;
    if (co && c.companyId !== co) return false;
    if (!isNaN(from) || !isNaN(to)) {
      var n = printIdNum(c);
      if (n === null || (!isNaN(from) && n < from) || (!isNaN(to) && n > to)) return false;
    }
    if (q && !String(c.id||'').toLowerCase().includes(q) && !String(c.printId||'').toLowerCase().includes(q)) return false;
    return true;
  });
  var k = pbdSort.key, dir = pbdSort.dir;
  return fil.sort(function(a, b) {
    var r;
    if (k === 'printId') {
      var x = printIdNum(a), y = printIdNum(b);
      if (x === null || y === null) return x === y ? 0 : (x === null ? 1 : -1);   // cards without a Print ID always last
      r = x - y;
    } else {
      r = String(a[k]||'').localeCompare(String(b[k]||''));
    }
    return (r * dir) || String(a.id).localeCompare(String(b.id));
  });
}

function filterPoolDetail(f, btn) {
  pbdFilter = f;
  document.querySelectorAll('#page-pool-batch-detail .pg-pill').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  renderPoolDetail();
}

function filterPoolDetailMobile(sel) {
  pbdFilter = sel.value;
  renderPoolDetail();
}

function renderPoolDetail() {
  renderPoolDetailStats();
  renderPoolDetailCompanies();
  document.querySelectorAll('#page-pool-batch-detail .pbd-sort-ind').forEach(function(el) {
    el.textContent = el.dataset.key === pbdSort.key ? (pbdSort.dir > 0 ? '↑' : '↓') : '';
  });
  var fil = poolDetailRows();
  var cnt = document.getElementById('pbdCount');
  if (cnt) cnt.textContent = tf("label_showing_n_of_m", {shown: fil.length, total: pbdCards.length});
  var tb = document.getElementById('pbdBody');
  if (!fil.length) { tb.innerHTML = '<tr><td colspan="6" class="pg-empty">' + t("empty_no_cards_found") + '</td></tr>'; return; }

  var BASE_URL = 'https://app.handycat.us/c/';
  tb.innerHTML = fil.map(function(card) {
    var coName = (card.companyId && CC.cos[card.companyId]) ? CC.cos[card.companyId].name : '';
    var badge = isStockCard(card)
      ? '<span class="pg-badge pg-badge-yellow">' + t("badge_stock") + '</span>'
      : '<span class="pg-badge pg-badge-green">' + t("status_assigned") + '</span>';
    var url = BASE_URL + card.id;
    return '<tr>' +
      '<td style="font-weight:600;color:#4f00df">' + esc(card.printId || '—') + '</td>' +
      '<td class="cd-token">' + esc(card.id) + '</td>' +
      '<td><span style="font-size:12px;color:#858585;font-family:monospace">' + esc(url) + '</span></td>' +
      '<td>' + badge + '</td>' +
      '<td style="color:#858585">' + esc(coName || '—') + '</td>' +
      '<td style="color:#858585">' + fd(card.createdAt) + '</td>' +
    '</tr>';
  }).join('');
}

// Exports exactly what the table shows: same filters, same order. Company is the last column so the
// existing columns keep their positions for whatever reads these files.
function exportBatchCSV() {
  var toExport = poolDetailRows();
  if (!toExport.length) { toast(t('toast_no_cards_in_order')); return; }

  function csvCell(v) { v = String(v == null ? '' : v); return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
  var BASE_URL = 'https://app.handycat.us/c/';
  var header = 'Print ID,Token,URL,Status,Created,Company';
  var rows = toExport.map(function(card) {
    return [
      card.printId || '',
      card.id,
      BASE_URL + card.id,
      isStockCard(card) ? 'stock' : 'assigned',
      card.createdAt ? new Date(card.createdAt).toISOString().split('T')[0] : '',
      isStockCard(card) ? '' : (((CC.cos[card.companyId] || {}).name) || card.companyId)
    ].map(csvCell).join(',');
  });

  var csv = [header].concat(rows).join('\n');
  var blob = new Blob([csv], { type: 'text/csv' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  var b = poolAllBatches.find(function(x){ return x.id === pbdBatchId; });
  var label = b ? (b.label ? b.label.toLowerCase() : 'order-' + b.number) : pbdBatchId;
  a.download = 'handycat-nfc-' + label + '-' + new Date().toISOString().split('T')[0] + '.csv';
  a.click();
  URL.revokeObjectURL(url);
}

// ── GENERATE CARDS ─────────────────────────────────────────
function openGenerateModal() {
  document.getElementById('generateCount').value = '50';
  var btn = document.getElementById('generateBtn');
  if (btn) { btn.disabled = false; btn.classList.remove('loading'); }
  openModal('mGenerateCards');
}

async function doGenerateCards() {
  var count = parseInt(document.getElementById('generateCount').value, 10);
  if (!count || count < 1 || count > 1000) { toast(t('toast_enter_number_1_1000')); return; }

  var btn = document.getElementById('generateBtn');
  btn.disabled = true; btn.classList.add('loading');

  // Get current max printId to avoid duplicates
  var lastNum = poolAllCards.length;
  poolAllCards.forEach(function(c) {
    if (c.printId) { var n = parseInt(c.printId, 10); if (!isNaN(n) && n > lastNum) lastNum = n; }
  });

  // Every "Generate Cards" click is a brand new order — never merged into a prior one
  var nextBatchNum = 1;
  poolAllBatches.forEach(function(b) {
    if (typeof b.number === 'number' && b.number >= nextBatchNum) nextBatchNum = b.number + 1;
  });
  var newBatchId = 'batch_' + Date.now();
  var now = new Date().toISOString();
  var batchOk = await fsP('nfc_batches', newBatchId, {
    number:    nv(nextBatchNum),
    count:     nv(count),
    status:    sv('ordered'),
    createdAt: sv(now)
  });
  if (!batchOk) {
    btn.disabled = false; btn.classList.remove('loading');
    toast(t("toast_could_not_create_order"));
    return;
  }
  poolAllBatches.push({ id: newBatchId, number: nextBatchNum, count: count, status: 'ordered', createdAt: now });

  // Show progress
  var progEl  = document.getElementById('poolGenProgress');
  var barEl   = document.getElementById('poolGenBar');
  var labelEl = document.getElementById('poolGenLabel');
  var cntEl   = document.getElementById('poolGenCount');
  progEl.style.display = 'block';

  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var toCreate = [];

  for (var i = 0; i < count; i++) {
    var token = 'hc-';
    for (var j = 0; j < 8; j++) token += randChar(chars);
    lastNum++;
    toCreate.push({ token: token, printId: String(lastNum).padStart(6, '0') });
  }

  closeModal('mGenerateCards');

  var done = 0;
  var chunkSize = 5;

  for (var i = 0; i < toCreate.length; i += chunkSize) {
    var slice = toCreate.slice(i, i + chunkSize);
    await Promise.all(slice.map(function(item) {
      return fsP('nfc_cards', item.token, {
        printId:    sv(item.printId),
        status:     sv('stock'),
        companyId:  sv(''),
        handymanId: sv(''),
        clientId:   sv(''),
        batchId:    sv(newBatchId),
        createdAt:  sv(now)
      });
    }));
    done += slice.length;
    var pct = Math.round((done / toCreate.length) * 100);
    barEl.style.width  = pct + '%';
    cntEl.textContent  = done + ' / ' + toCreate.length;
    labelEl.textContent = t('gen_progress_generating');
  }

  labelEl.textContent = t('gen_progress_done');
  setTimeout(function(){ progEl.style.display = 'none'; }, 2000);
  toast(tf('toast_order_generated', {num: nextBatchNum, count: done}));
  await loadPool();
}

// ── EXPORT CSV ─────────────────────────────────────────────
function exportPoolCSV() {
  // Export all stock cards (not yet assigned) across every order
  var toExport = poolAllCards.filter(function(c){ return !c.companyId || c.companyId === ''; });

  if (!toExport.length) {
    toast(t('toast_no_stock_to_export'));
    return;
  }

  var BASE_URL = 'https://app.handycat.us/c/';
  var header = 'Print ID,Token,URL,Status,Created';
  var rows = toExport.map(function(card) {
    return [
      card.printId || '',
      card.id,
      BASE_URL + card.id,
      (!card.companyId || card.companyId === '') ? 'stock' : 'assigned',
      card.createdAt ? new Date(card.createdAt).toISOString().split('T')[0] : ''
    ].join(',');
  });

  var csv = [header].concat(rows).join('\n');
  var blob = new Blob([csv], { type: 'text/csv' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'handycat-nfc-pool-' + new Date().toISOString().split('T')[0] + '.csv';
  a.click();
  URL.revokeObjectURL(url);
  toast(tf('toast_csv_exported', {count: toExport.length}));
}

// ── ASSIGN CARDS TO COMPANY ────────────────────────────────
async function openAssignModal(btn, reqId, companyId, requested) {
  if (btn) btn.classList.add('loading');

  // Подсчитываем реальный сток прямо сейчас
  var allStock = await fsQ('nfc_cards', [{field:'companyId', value:''}]);
  var stockCount = allStock.length;
  assignStockCache = allStock;

  if (btn) btn.classList.remove('loading');

  document.getElementById('assignStartPid').value    = '';
  document.getElementById('assignReqId').value      = reqId;
  document.getElementById('assignCompanyId').value   = companyId;
  document.getElementById('assignStockCount').textContent    = stockCount;
  document.getElementById('assignRequestedCount').textContent = requested;
  document.getElementById('assignCount').value       = Math.min(requested, stockCount);
  document.getElementById('assignWarning').style.display = 'none';

  var co = CC.cos[companyId] || {};
  document.getElementById('assignModalSub').textContent =
    tf('toast_assigning_to', {name: co.name || companyId});

  var assignBtn = document.getElementById('assignBtn');
  if (stockCount === 0) {
    document.getElementById('assignWarning').textContent = t('toast_no_stock_import_csv');
    document.getElementById('assignWarning').style.display = 'block';
    assignBtn.disabled = true;
  } else {
    assignBtn.disabled = false;
  }

  updateAssignPreview();
  openModal('mAssignCards');
}

var assignStockCache = [];
function updateAssignPreview() {
  var count = parseInt(document.getElementById('assignCount').value, 10) || 0;
  var startPid = parseInt(document.getElementById('assignStartPid').value, 10) || 0;
  document.getElementById('assignPreview').innerHTML = assignPreviewHTML(assignStockCache, count, startPid);
}

async function doAssignCards() {
  listCacheClear();   // stock is read and then written: always use fresh rows
  var reqId     = document.getElementById('assignReqId').value;
  var companyId = document.getElementById('assignCompanyId').value;
  var count     = parseInt(document.getElementById('assignCount').value, 10);
  var startPid  = parseInt(document.getElementById('assignStartPid').value, 10) || 0;
  var warnEl    = document.getElementById('assignWarning');
  warnEl.style.display = 'none';

  if (!count || count < 1) { warnEl.textContent = t('toast_enter_valid_number'); warnEl.style.display = 'block'; return; }

  var btn = document.getElementById('assignBtn');
  btn.disabled = true; btn.classList.add('loading');

  // Берём N карточек из пула (companyId == "")
  try {
    var stockCards = await fsQ('nfc_cards', [{field:'companyId', value:''}]);
    if (stockCards.length < count) {
      warnEl.textContent = tf('toast_only_x_in_stock_adjust', {count: stockCards.length});
      warnEl.style.display = 'block';
      btn.disabled = false; btn.classList.remove('loading');
      return;
    }

    // Consume bonus leads first (free), remainder is a standard/paid assignment
    var coFresh = await fsGet('companies', companyId);
    var bonusLeads = (coFresh && coFresh.bonusLeads) || 0;
    var freeCount = Math.min(count, bonusLeads);
    var paidCount = count - freeCount;

    // Contiguous run from the chosen Print ID (or lowest numbers first)
    var toAssign = pickStockCards(stockCards, count, startPid);
    if (toAssign.length < count) {
      warnEl.textContent = tf('warn_only_n_from_start', {count: toAssign.length, start: startPid});
      warnEl.style.display = 'block';
      btn.disabled = false; btn.classList.remove('loading');
      return;
    }
    var assignedRange = pidRangeInfo(toAssign).label;
    var now = new Date().toISOString();

    var batchSize = 5;
    for (var i = 0; i < toAssign.length; i += batchSize) {
      var batch = toAssign.slice(i, i + batchSize);
      await Promise.all(batch.map(function(card, bi) {
        var idxInAll = i + bi;
        return fsMerge('nfc_cards', card.id, {
          companyId:  sv(companyId),
          requestId:  sv(reqId),
          status:     sv('unassigned'),
          assignedAt: sv(now),
          source:     sv(idxInAll < freeCount ? 'lead' : 'paid')
        });
      }));
    }

    if (freeCount > 0) {
      var newBonusLeads = bonusLeads - freeCount;
      await fsMerge('companies', companyId, { bonusLeads: nv(newBonusLeads) });
      if (CC.cos[companyId]) CC.cos[companyId].bonusLeads = newBonusLeads;
    }

    // Mark request as fulfilled
    await fsMerge('card_requests', reqId, {
      status:      sv('approved'),
      approvedAt:  sv(now),
      fulfilledCount: count
    });

    // Update local state
    var idx = allCardReqs.findIndex(function(r){ return r.id === reqId; });
    if (idx >= 0) { allCardReqs[idx].status = 'approved'; allCardReqs[idx].approvedAt = new Date().toISOString(); }

    closeModal('mAssignCards');
    renderCardReqs();
    refreshCardReqDetailIfOpen();
    loadNotifications();
    var msg = tf('toast_cards_assigned_to_company', {count: count});
    if (assignedRange) msg += ' (' + assignedRange + ')';
    if (freeCount > 0) msg += tf('toast_free_leads_suffix', {count: freeCount, paid: paidCount > 0 ? tf('toast_paid_suffix', {count: paidCount}) : ''});
    toast(msg);

  } catch(e) {
    console.error(e);
    warnEl.textContent = tf('toast_error_colon', {msg: e.message});
    warnEl.style.display = 'block';
    btn.disabled = false; btn.classList.remove('loading');
  }
}

async function approveCardReq(btn, reqId, count, companyId) {
  if (!companyId) { toast(t("toast_no_company_id")); return; }
  listCacheClear();   // print ids and existing cards are read and then written: always use fresh rows
  if (btn) btn.classList.add("loading");
  if (btn) btn.disabled = true;

  var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  var pfx = "hc";

  // Get next printId by scanning all cards for the actual max (no counters table in Supabase)
  var lastNum = 0;
  try {
    var allCards = await fsL("nfc_cards", 5000);
    allCards.forEach(function(c) {
      if (c.printId) { var n = parseInt(c.printId, 10); if (!isNaN(n) && n > lastNum) lastNum = n; }
    });
  } catch(e) {}

  // Also check existing cards for this request (idempotent)
  var allExisting = await fsQ("nfc_cards", [{field:"requestId", value:reqId}]);
  var alreadyCreated = allExisting.length;
  var remaining = count - alreadyCreated;

  if (remaining <= 0) {
    toast(tf("toast_all_cards_already_created", {count: count}));
    await fsMerge("card_requests", reqId, { status: sv("approved"), approvedAt: sv(new Date().toISOString()) });
    var idx0 = allCardReqs.findIndex(function(r) { return r.id === reqId; });
    if (idx0 >= 0) allCardReqs[idx0].status = "approved";
    renderCardReqs(); return;
  }

  if (alreadyCreated > 0) {
    toast(tf("toast_resuming", {done: alreadyCreated, remaining: remaining}));
  } else {
    if (!confirm(tf("confirm_generate_cards", {count: count}))) {
      if (btn) { btn.classList.remove("loading"); btn.disabled = false; }
      return;
    }
    toast(tf("toast_generating_cards", {count: count}));
  }

  await fsMerge("card_requests", reqId, { status: sv("in_progress"), startedAt: sv(new Date().toISOString()) });

  var saved = alreadyCreated;
  var currentNum = lastNum;
  for (var i = 0; i < remaining; i++) {
    var token = pfx + "-";
    for (var j = 0; j < 8; j++) token += randChar(chars);
    currentNum++;
    var printId = currentNum;
    var ok = await fsP("nfc_cards", token, {
      companyId: sv(companyId),
      requestId: sv(reqId),
      printId: printId,
      status: sv("unassigned"),
      clientId: sv(""), handymanId: sv(""),
      createdAt: sv(new Date().toISOString())
    });
    if (ok) {
      saved++;
      // Update progress
      await fsMerge("card_requests", reqId, { generatedCount: saved });
    }
  }

  // Mark fully approved
  await fsMerge("card_requests", reqId, {
    status: sv("approved"),
    approvedAt: sv(new Date().toISOString()),
    generatedCount: saved
  });

  // Email company only when all done
  var req = allCardReqs.find(function(r) { return r.id === reqId; });
  if (req && req.email) {
    await sendEmail(req.email,
      tf("email_cards_ready_subject", {company: esc(req.companyName || "")}),
      "<div style='font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px'>" +
      "<h2 style='color:#185FA5'>HandyCat</h2>" +
      "<p>" + tf("email_cards_ready_body1", {count: saved}) + "</p>" +
      "<p>" + t("email_cards_ready_body2") + "</p>" +
      "<div style='margin:24px 0'><a href='https://app.handycat.us/company' style='display:inline-block;background:#185FA5;color:#fff;text-decoration:none;padding:14px 28px;border-radius:12px;font-weight:600'>" + t("email_open_dashboard_generic") + "</a></div>" +
      "<p>" + t("email_signature") + "</p></div>"
    );
  }

  var idx = allCardReqs.findIndex(function(r) { return r.id === reqId; });
  if (idx >= 0) { allCardReqs[idx].status = "approved"; allCardReqs[idx].generatedCount = saved; }
  renderCardReqs();
  toast(tf("toast_cards_generated_notified", {count: saved}));
}


async function exportReqCards(reqId, companyName) {
  toast(t("toast_loading_cards"));

  // Try by requestId first (new cards with requestId field)
  var cards = await fsQ("nfc_cards", [{field:"requestId", value:reqId}]);

  // Fallback: old cards don't have requestId — load all cards for this company
  if (!cards.length) {
    var req = allCardReqs.find(function(r) { return r.id === reqId; });
    var companyId = req ? req.companyId : null;
    // Second fallback: derive companyId from companyName if companyId is missing
    if (!companyId && companyName) {
      var matchCo = Object.values(CC.cos || {}).find(function(co) { return co.name === companyName; });
      if (matchCo) companyId = matchCo.id;
    }
    if (companyId) {
      cards = await fsQ("nfc_cards", [{field:"companyId", value:companyId}]);
    }
  }

  if (!cards.length) { toast(t("toast_no_cards_found_request")); return; }

  var hmById = CC._hmById || {};
  var rows = [csvRow(["Print ID","Token","URL","Status","Handyman","Client","Created"])];
  cards.forEach(function(c) {
    rows.push(csvRow([
      c.printId || "—",
      c.id,
      BURL + "/c/" + c.id,
      c.status || "unassigned",
      c.handymanId ? (hmById[c.handymanId] || c.handymanId) : "—",
      c.clientId || "—",
      csvDate(c.createdAt)
    ]));
  });

  var blob = new Blob(["\uFEFF" + rows.join("\r\n")], {type:"text/csv;charset=utf-8;"});
  var l = document.createElement("a"); l.href = URL.createObjectURL(blob);
  l.download = "cards-" + (companyName || reqId) + "-" + new Date().toISOString().slice(0,10) + ".csv";
  l.click();
  toast(tf("toast_csv_downloaded_dash", {count: cards.length}));
}

async function rejectCardReq(reqId) {
  if (!confirm(t("confirm_reject_card_request"))) return;
  await fsMerge("card_requests", reqId, { status: sv("rejected"), rejectedAt: sv(new Date().toISOString()) });
  var req = allCardReqs.find(function(r) { return r.id === reqId; });
  if (req && req.email) {
    await sendEmail(req.email,
      t("email_card_request_update_subject"),
      "<div style='font-family:sans-serif;padding:32px'><h2 style='color:#185FA5'>HandyCat</h2><p>" + t("email_card_request_rejected_body") + "</p><p>" + t("email_signature") + "</p></div>"
    );
  }
  var idx = allCardReqs.findIndex(function(r) { return r.id === reqId; });
  if (idx >= 0) { allCardReqs[idx].status = "rejected"; allCardReqs[idx].rejectedAt = new Date().toISOString(); }
  renderCardReqs();
  refreshCardReqDetailIfOpen();
  loadNotifications();
  toast(t("toast_request_rejected"));
}

function renderApps() {
  var tb = document.getElementById("appsBody");
  var fil = allApps.filter(function(a) { return appFilter === "all" || a.status === appFilter; });
  if (!fil.length) { tb.innerHTML = '<tr><td colspan="8" class="pg-empty">' + t("empty_no_applications") + '</td></tr>'; return; }
  var stMap = { pending:"pg-badge-yellow", approved:"pg-badge-green", rejected:"pg-badge-red", needs_revision:"pg-badge-purple" };
  var lblMap = { pending:t("pill_pending"), approved:t("pill_approved"), rejected:t("pill_rejected"), needs_revision:t("pill_needs_revision") };
  tb.innerHTML = fil.map(function(a) {
    var stCls = stMap[a.status] || "pg-badge-gray";
    var stLbl = lblMap[a.status] || a.status;
    return '<tr style="cursor:pointer" onclick="showAppDetail(\'' + a.id + '\')">' +
      '<td style="color:#858585">' + fd(a.createdAt) + '</td>' +
      '<td style="font-weight:600">' + (esc(a.companyName) || "—") + '</td>' +
      '<td style="color:#858585">' + (esc(a.contactPerson) || "—") + '</td>' +
      '<td style="color:#858585">' + (esc(a.businessType) || "—") + '</td>' +
      '<td style="font-weight:700;color:#4f00df">' + (a.requestedCards || 0) + '</td>' +
      '<td style="color:#858585">' + (esc(a.region) || "—") + '</td>' +
      '<td><span class="pg-badge ' + stCls + '">' + stLbl + '</span></td>' +
      '<td style="text-align:right"><button class="cd-action-btn" title="View"><svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3681 13.4307L15.0556 20.7432C14.9401 20.8508 14.7873 20.9094 14.6295 20.9066C14.4716 20.9039 14.321 20.8399 14.2093 20.7283C14.0977 20.6166 14.0337 20.466 14.0309 20.3081C14.0281 20.1502 14.0867 19.9975 14.1944 19.8819L20.4659 13.6094H4.0625C3.90088 13.6094 3.74589 13.5452 3.63161 13.431C3.51733 13.3167 3.45313 13.1617 3.45312 13.0001C3.45312 12.8384 3.51733 12.6834 3.63161 12.5692C3.74589 12.4549 3.90088 12.3907 4.0625 12.3907H20.4659L14.1944 6.11818C14.0867 6.00267 14.0281 5.84988 14.0309 5.69201C14.0337 5.53414 14.0977 5.38351 14.2093 5.27187C14.321 5.16022 14.4716 5.09626 14.6295 5.09348C14.7873 5.09069 14.9401 5.14929 15.0556 5.25693L22.3681 12.5694C22.4822 12.6837 22.5463 12.8386 22.5463 13.0001C22.5463 13.1615 22.4822 13.3164 22.3681 13.4307Z" fill="#4F00DF"/></svg></button></td>' +
    '</tr>';
  }).join("");
}

function filterApps(s, btn) {
  appFilter = s;
  document.querySelectorAll("#page-applications .pg-pill").forEach(function(b) { b.classList.remove("active"); });
  btn.classList.add("active");
  renderApps();
}

async function showAppDetail(appId) {
  sp("app-detail");
  var content = document.getElementById("appDetContent");
  content.innerHTML = '<div style="padding:60px;text-align:center;color:#aaa">' + t("loading_text") + '</div>';
  var app = allApps.find(function(a) { return a.id === appId; }) || await fsGet("company_applications", appId);
  if (!app) { content.innerHTML = '<div style="padding:24px;text-align:center;color:#aaa">' + t("not_found") + '</div>'; return; }
  var stMap = { pending:"pg-badge-yellow", approved:"pg-badge-green", rejected:"pg-badge-red", needs_revision:"pg-badge-purple" };
  var lblMap = { pending:t("pill_pending"), approved:t("pill_approved"), rejected:t("pill_rejected"), needs_revision:t("pill_needs_revision") };
  var stCls = stMap[app.status] || "pg-badge-gray";
  var stLbl = lblMap[app.status] || app.status;
  content.innerHTML =
    '<div class="pg-header" style="margin-bottom:20px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">' +
          '<span class="pg-badge ' + stCls + '">' + stLbl + '</span>' +
          '<span style="color:#858585;font-size:14px">' + fd(app.createdAt) + '</span>' +
        '</div>' +
        '<div class="cd-title" style="font-size:26px">' + (esc(app.companyName) || "—") + '</div>' +
        '<div style="color:#858585;font-size:14px;margin-top:4px">' + tf("app_id_label", {id: app.id}) + '</div>' +
    '</div>' +

    '<div class="pg-card">' +
      '<div class="pg-section-title">' + t("section_contact_information") + '</div>' +
      '<div class="pg-info-grid">' +
      '<div><div class="pg-info-label">' + t("info_contact_person") + '</div><div class="pg-info-value">' + (esc(app.contactPerson) || "—") + '</div></div>' +
      '<div><div class="pg-info-label">' + t("th_email") + '</div><div class="pg-info-value"><a href="mailto:' + (esc(app.email) || "") + '" style="color:#4f00df">' + (esc(app.email) || "—") + '</a></div></div>' +
      '<div><div class="pg-info-label">' + t("th_phone") + '</div><div class="pg-info-value">' + (esc(app.phone) || "—") + '</div></div>' +
      '<div><div class="pg-info-label">' + t("info_region") + '</div><div class="pg-info-value">' + (esc(app.region) || "—") + '</div></div>' +
      '<div style="grid-column:1/-1"><div class="pg-info-label">' + t("info_address") + '</div><div class="pg-info-value">' + (esc(app.address) || "—") + '</div></div>' +
      '</div>' +
    '</div>' +

    '<div class="pg-card">' +
      '<div class="pg-section-title">' + t("section_business_details") + '</div>' +
      '<div class="pg-info-grid">' +
      '<div><div class="pg-info-label">' + t("info_type") + '</div><div class="pg-info-value">' + (esc(app.businessType) || "—") + '</div></div>' +
      '<div><div class="pg-info-label">' + t("info_team_size") + '</div><div class="pg-info-value">' + (esc(app.teamSize) || "—") + '</div></div>' +
      '<div><div class="pg-info-label">' + t("info_years_in_business") + '</div><div class="pg-info-value">' + (esc(app.yearsInBusiness) || "—") + '</div></div>' +
      '<div><div class="pg-info-label">' + t("info_license_number") + '</div><div class="pg-info-value" style="font-family:monospace">' + (esc(app.licenseNumber) || "—") + '</div></div>' +
      '<div><div class="pg-info-label">' + t("info_insurance") + '</div><div class="pg-info-value">' + (esc(app.insuranceProvider) || "—") + '</div></div>' +
      '<div><div class="pg-info-label">' + t("info_cards_requested") + '</div><div style="font-size:22px;font-weight:700;color:#4f00df">' + (app.requestedCards || 0) + '</div></div>' +
      '<div style="grid-column:1/-1"><div class="pg-info-label" style="margin-bottom:8px">' + t("info_services") + '</div><div style="display:flex;flex-wrap:wrap;gap:8px">' +
        (app.services || []).map(function(s) { return '<span class="pg-badge pg-badge-blue">' + esc(s) + '</span>'; }).join("") +
      '</div></div>' +
      (app.website ? '<div style="grid-column:1/-1"><div class="pg-info-label">' + t("info_website") + '</div><div class="pg-info-value"><a href="' + esc(safeUrl(app.website) || safeUrl("https://" + app.website)) + '" target="_blank" rel="noopener noreferrer" style="color:#4f00df">' + esc(app.website) + '</a></div></div>' : "") +
      (app.notes ? '<div style="grid-column:1/-1"><div class="pg-info-label">' + t("info_notes") + '</div><div style="font-size:14px;color:#555;line-height:1.6">' + esc(app.notes) + '</div></div>' : "") +
      '</div>' +
    '</div>' +

    (function() {
      var decided = app.status === "approved" || app.status === "rejected";
      var suggestedLeads = Math.floor((app.requestedCards || 0) / 10) * 2;
      if (decided) {
        return '<div class="pg-card">' +
          '<div class="pg-section-title">' + t("section_decision") + '</div>' +
          '<div style="color:#858585;font-size:14px">' + t("decision_already_made") + '</div>' +
        '</div>';
      }
      return '<div class="pg-card">' +
        '<div class="pg-section-title">' + t("section_decision") + '</div>' +
        '<div class="dfg" style="margin-bottom:16px"><label>' + t("label_message_to_company") + ' <span style="font-weight:400;color:#aaa">' + t("label_included_in_email") + '</span></label>' +
          '<textarea id="appMsg" class="pg-textarea" placeholder="' + t("ph_appmsg") + '">' + esc(app.adminMessage || "") + '</textarea>' +
        '</div>' +
        '<div class="dfg" style="margin-bottom:16px;max-width:260px"><label>' + t("label_bonus_leads_grant") + '</label>' +
          '<input type="number" id="appBonusLeads" min="0" value="' + suggestedLeads + '"/>' +
          '<div style="font-size:12px;color:#aaa;margin-top:4px">' + t("hint_bonus_leads_grant") + '</div>' +
        '</div>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
          '<button class="pg-decision-btn pg-decision-approve" id="approveBtn" onclick="updateAppStatus(\'' + appId + '\',\'approved\')">' + t("btn_approve_send") + '</button>' +
          '<button class="pg-decision-btn pg-decision-revision" id="revisionBtn" onclick="updateAppStatus(\'' + appId + '\',\'needs_revision\')">' + t("btn_needs_revision") + '</button>' +
          '<button class="pg-decision-btn pg-decision-reject" id="rejectBtn" onclick="updateAppStatus(\'' + appId + '\',\'rejected\')">' + t("btn_reject") + '</button>' +
        '</div>' +
      '</div>';
    })();
}

// Creates everything an approved application needs and returns the company's one-time sign-in link.
// Safe to re-run after a partial failure: the company is merged and the card request id is fixed per application.
async function provisionApprovedCompany(app, inline) {
  var companyId = app.id.toLowerCase();
  // Bonus leads: use the admin-editable field if present, else fall back to
  // the auto-grant formula (2 free leads per 10 cards requested)
  var leadsInput = inline ? null : document.getElementById("appBonusLeads");
  var bonusLeadsGrant = leadsInput ? parseInt(leadsInput.value, 10) : NaN;
  if (isNaN(bonusLeadsGrant) || bonusLeadsGrant < 0) bonusLeadsGrant = Math.floor((app.requestedCards || 0) / 10) * 2;
  var companyOk = await fsMerge("companies", companyId, {
    name: sv(app.companyName), email: sv(app.email), phone: sv(app.phone),
    location: sv(app.region), status: sv("active"), applicationId: sv(app.id),
    requestedCards: app.requestedCards || 0,
    bonusLeads: nv(bonusLeadsGrant),
    createdAt: sv(new Date().toISOString())
  });
  // Stop here if the company record failed to write — otherwise the
  // token/card-request inserts below would fail their FK check against
  // companies(id) with confusing "409 Conflict" errors that mask the
  // real problem.
  if (!companyOk) throw new Error("Failed to create company record for " + companyId);
  // One-time sign-in link (7 days), created and stored (hashed) by the server
  var link = await adminApi("issue-company-link", { company_id: companyId });
  if (!link.ok || !link.url) throw new Error("Failed to create sign-in link for " + companyId);
  // Auto-create a pending card request for the cards they asked for on
  // signup, so it shows up immediately in both the company's own dashboard
  // (pending banner) and the admin Cards > Requests tab, ready to fulfill —
  // instead of silently requiring the admin to remember to assign cards later.
  if ((app.requestedCards || 0) > 0) {
    var initialReqId = "cardreq-signup-" + companyId;
    if (!(await fsGet("card_requests", initialReqId))) {
      var reqOk = await fsP("card_requests", initialReqId, {
        companyId: sv(companyId), companyName: sv(app.companyName || ""),
        email: sv(app.email || ""),
        count: app.requestedCards,
        notes: sv(t("note_initial_cards_from_signup")),
        status: sv("pending"),
        createdAt: sv(new Date().toISOString())
      });
      if (!reqOk) throw new Error("Failed to create the initial card request for " + companyId);
    }
  }
  return link.url;
}

// inline: called from the Companies page, where the application-detail inputs (#appMsg, #appBonusLeads)
// may belong to another application, so they are not read.
async function updateAppStatus(appId, newStatus, inline) {
  var msg = !inline && document.getElementById("appMsg") ? document.getElementById("appMsg").value.trim() : "";
  var app = allApps.find(function(a) { return a.id === appId; });
  if (!app) {
    // allApps is only populated by loadApps() (the Company Applications list page).
    // If this page was reached another way (e.g. a link from the Companies page),
    // allApps can still be empty on the very first visit — fall back to a direct
    // fetch instead of silently doing nothing.
    app = await fsGet("company_applications", appId);
    if (app) allApps.push(app);
  }
  if (!app) { toast(t("toast_error_updating_status")); return; }

  // Disable all decision buttons and show a loading label on the one clicked,
  // so the admin gets immediate feedback instead of the button looking dead.
  var btnIds = { approved: "approveBtn", needs_revision: "revisionBtn", rejected: "rejectBtn" };
  var clickedBtn = document.getElementById(btnIds[newStatus]);
  ["approveBtn", "revisionBtn", "rejectBtn"].forEach(function(id) {
    var b = document.getElementById(id);
    if (b) b.disabled = true;
  });
  if (clickedBtn) clickedBtn.textContent = newStatus === "approved" ? t("btn_approving_progress") : t("btn_processing_progress");
  toast(t("toast_processing_request"));

  function restoreButtons() {
    ["approveBtn", "revisionBtn", "rejectBtn"].forEach(function(id) {
      var b = document.getElementById(id);
      if (b) b.disabled = false;
    });
    if (clickedBtn) clickedBtn.textContent = newStatus === "approved" ? t("btn_approve_send") : (newStatus === "needs_revision" ? t("btn_needs_revision") : t("btn_reject"));
  }

  // Approval: create the company, its sign-in link and the initial card request BEFORE the status
  // changes. If any of it fails the application stays as it was, so the admin can simply retry.
  var dashLink = "";
  if (newStatus === "approved") {
    try { dashLink = await provisionApprovedCompany(app, inline); }
    catch (e) { console.error("Approval failed:", e); toast(t("toast_error_updating_status")); restoreButtons(); return; }
  }

  // Update status in Supabase
  var wrOk = await fsMerge("company_applications", appId, {
    status: newStatus,
    adminMessage: msg,
    updatedAt: new Date().toISOString()
  });
  if (!wrOk) {
    toast(t("toast_error_updating_status"));
    restoreButtons();
    return;
  }

  app.status = newStatus; app.adminMessage = msg;

  // Send email based on status (sendEmail reports failure as {ok:false}, it does not throw)
  try {
    var mailApp = Object.assign({}, app, { adminMessage: msg });
    var mail = newStatus === "approved" ? await emailApproved(mailApp, dashLink)
      : newStatus === "needs_revision" ? await emailRevision(mailApp)
      : await emailRejected(mailApp);
    if (!mail || !mail.ok) throw new Error("send-mail failed: " + ((mail && mail.error) || "unknown"));
    toast(newStatus === "approved" ? tf("toast_approved_email_sent", {email: app.email})
      : newStatus === "needs_revision" ? t("toast_email_sent_revision") : t("toast_email_sent_rejected"));
  } catch(e) {
    console.error("Email error:", e);
    toast(t("toast_status_updated_email_failed"));
  }

  // Refresh notifications badge
  loadNotifications();
  showAppDetail(appId);
}

// ── ALL CARDS ─────────────────────────────────────────────────
var allCardsData = [];

async function loadAllCards() {
  var tb = document.getElementById("acBody");
  var stats = document.getElementById("acStats");
  tb.innerHTML = '<tr><td colspan="7" class="empty">' + t("loading_all_cards") + '</td></tr>';
  stats.innerHTML = '';

  // Load all data in parallel
  var [cards, companies, handymen, clients] = await Promise.all([
    fsL("nfc_cards", 5000),
    fsL("companies", 500),
    fsL("handymen", 500),
    fsL("clients", 500)
  ]);

  // Build lookup maps
  var coMap = {}; companies.forEach(function(c) { coMap[c.id] = c; });
  var hmMap = {}; handymen.forEach(function(h) { hmMap[h.id] = h; });
  var clMap = {}; clients.forEach(function(c) { clMap[c.id] = c; });

  allCardsData = cards.map(function(c) {
    return Object.assign({}, c, {
      _company: coMap[c.companyId] || null,
      _handyman: c.handymanId ? hmMap[c.handymanId] : null,
      _client: c.clientId ? clMap[c.clientId] : null
    });
  });
  allCardsData.sort(pidSortDesc);

  // Populate company filter
  var sel = document.getElementById("acCompany");
  sel.innerHTML = '<option value="">' + t("filter_all_companies") + '</option>';
  companies.sort(function(a,b){return(a.name||"").localeCompare(b.name||"");}).forEach(function(c) {
    sel.innerHTML += '<option value="' + c.id + '">' + esc(c.name||c.id) + '</option>';
  });

  // Stats
  var total = cards.length;
  var active = cards.filter(function(c){return c.status==="active";}).length;
  var assigned = cards.filter(function(c){return c.status==="assigned";}).length;
  var free = cards.filter(function(c){return c.status==="unassigned";}).length;
  stats.innerHTML =
    '<div class="cd-stat"><div class="cd-stat-num">'+total+'</div><div class="cd-stat-label">' + t("stat_total") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">'+free+'</div><div class="cd-stat-label">' + t("status_available") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">'+assigned+'</div><div class="cd-stat-label">' + t("status_assigned") + '</div></div>' +
    '<div class="cd-stat"><div class="cd-stat-num">'+active+'</div><div class="cd-stat-label">' + t("status_activated") + '</div></div>';

  renderAllCards();
}

function renderAllCards() {
  var q = (document.getElementById("acSearch")||{value:""}).value.trim().toLowerCase();
  var filterCo = (document.getElementById("acCompany")||{value:""}).value;
  var filterSt = (document.getElementById("acStatus")||{value:""}).value;
  var tb = document.getElementById("acBody");

  var fil = allCardsData.filter(function(c) {
    if (filterCo && c.companyId !== filterCo) return false;
    if (filterSt && c.status !== filterSt) return false;
    if (q) {
      var pid = (c.printId||"").toLowerCase();
      var tok = (c.id||"").toLowerCase();
      var cl = c._client ? (c._client.name||"").toLowerCase() : "";
      var hm = c._handyman ? (c._handyman.name||"").toLowerCase() : "";
      if (!pid.includes(q) && !tok.includes(q) && !cl.includes(q) && !hm.includes(q)) return false;
    }
    return true;
  });

  if (!fil.length) { tb.innerHTML = '<tr><td colspan="8" class="pg-empty">' + t("empty_no_cards_found") + '</td></tr>'; acClearSel(); return; }

  tb.innerHTML = fil.map(function(c) {
    var printId = c.printId || c.id.slice(-6).toUpperCase();
    var co = c._company ? esc(c._company.name) : (c.companyId ? c.companyId.slice(0,8)+"…" : "—");
    var hm = c._handyman ? esc(c._handyman.name) : "—";
    var cl = c._client ? esc(c._client.name) : (c.clientId ? t("status_activated") : "—");
    return '<tr style="cursor:pointer" onclick="showAllCardDetail(\'' + c.id + '\')">' +
      '<td onclick="event.stopPropagation()" onmousedown="if(event.shiftKey)event.preventDefault()"><input type="checkbox" class="ac-cb" value="' + c.id + '" onclick="event.stopPropagation();acCbClick(event,this)"/></td>' +
      '<td><span class="cd-pid">' + printId + '</span></td>' +
      '<td>' + bdg(c.status||"unassigned") + '</td>' +
      '<td style="color:#858585">' + co + '</td>' +
      '<td style="color:#858585">' + hm + '</td>' +
      '<td style="color:#858585">' + cl + '</td>' +
      '<td style="color:#858585">' + csvDate(c.createdAt) + '</td>' +
      '<td style="text-align:right"><button class="cd-action-btn" title="View"><svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3681 13.4307L15.0556 20.7432C14.9401 20.8508 14.7873 20.9094 14.6295 20.9066C14.4716 20.9039 14.321 20.8399 14.2093 20.7283C14.0977 20.6166 14.0337 20.466 14.0309 20.3081C14.0281 20.1502 14.0867 19.9975 14.1944 19.8819L20.4659 13.6094H4.0625C3.90088 13.6094 3.74589 13.5452 3.63161 13.431C3.51733 13.3167 3.45313 13.1617 3.45312 13.0001C3.45312 12.8384 3.51733 12.6834 3.63161 12.5692C3.74589 12.4549 3.90088 12.3907 4.0625 12.3907H20.4659L14.1944 6.11818C14.0867 6.00267 14.0281 5.84988 14.0309 5.69201C14.0337 5.53414 14.0977 5.38351 14.2093 5.27187C14.321 5.16022 14.4716 5.09626 14.6295 5.09348C14.7873 5.09069 14.9401 5.14929 15.0556 5.25693L22.3681 12.5694C22.4822 12.6837 22.5463 12.8386 22.5463 13.0001C22.5463 13.1615 22.4822 13.3164 22.3681 13.4307Z" fill="#4F00DF"/></svg></button></td>' +
    '</tr>';
  }).join("");
  acClearSel();
}

// Shift-click selects every row between the previously clicked checkbox and this one.
var acLastCb = null;
function acCbClick(e, cb) {
  var cbs = Array.from(document.querySelectorAll(".ac-cb"));
  var idx = cbs.indexOf(cb);
  if (e.shiftKey && acLastCb !== null && acLastCb !== idx && cbs[acLastCb]) {
    var lo = Math.min(acLastCb, idx), hi = Math.max(acLastCb, idx);
    for (var i = lo; i <= hi; i++) cbs[i].checked = cb.checked;
  }
  acLastCb = idx;
  acUpdateBulk();
}
function acGetSel() { return Array.from(document.querySelectorAll(".ac-cb:checked")).map(function(x) { return x.value; }); }
function acClearSel() {
  acLastCb = null;
  document.querySelectorAll(".ac-cb").forEach(function(x) { x.checked = false; });
  var sa = document.getElementById("acSelAll"); if (sa) sa.checked = false;
  acUpdateBulk();
}
function acToggleSelAll(cb) { document.querySelectorAll(".ac-cb").forEach(function(x) { x.checked = cb.checked; }); acUpdateBulk(); }
function acUpdateBulk() {
  var sel = acGetSel();
  var bar = document.getElementById("acBulkBar");
  if (!bar) return;
  if (sel.length > 0) { bar.classList.add("show"); document.getElementById("acBulkCount").textContent = tf("label_n_selected", {count: sel.length}); }
  else bar.classList.remove("show");
}
async function acBulkDelete() {
  var sel = acGetSel(); if (!sel.length) return;
  var assigned = sel.filter(function(id) {
    var c = allCardsData.find(function(x) { return x.id === id; });
    return c && (c.status === "active" || c.clientId);
  });
  var warn = assigned.length ? tf("confirm_cards_active_warning", {count: assigned.length}) : "";
  cfm(tf("confirm_delete_n_cards", {count: sel.length}), t("confirm_cannot_undone_short") + warn, async function(btn) {
    var deleted = 0;
    for (var i = 0; i < sel.length; i++) {
      if (btn) btn.textContent = tf("confirm_deleting_progress", {done: i+1, total: sel.length});
      var ok = await fsDel("nfc_cards", sel[i]);
      if (ok) deleted++;
    }
    closeModal("mConfirm");
    toast(tf("toast_deleted_of_cards", {deleted: deleted, total: sel.length}));
    await loadAllCards();
  });
}

async function showAllCardDetail(cardId) {
  var card = allCardsData.find(function(c){ return c.id === cardId; }) || await fsGet("nfc_cards", cardId);
  if (!card) return;

  // Re-use existing showCardDetail but set back button to the Cards page, All Cards tab
  sp("card-detail");
  document.getElementById("cardDetBack").setAttribute("onclick", "sp('nfc-pool');switchPoolTab('all')");
  var content = document.getElementById("cardDetContent");
  content.innerHTML = '<div style="padding:40px;text-align:center;color:#aaa">' + t("loading_text") + '</div>';

  var [hm, cl, co, orders] = await Promise.all([
    card.handymanId ? fsGet("handymen", card.handymanId) : Promise.resolve(card._handyman || null),
    card.clientId ? fsGet("clients", card.clientId) : Promise.resolve(card._client || null),
    card.companyId ? fsGet("companies", card.companyId) : Promise.resolve(card._company || null),
    fsQ("orders", [{field:"cardToken", value:cardId}])
  ]);
  orders.sort(function(a,b){return(b.createdAt||"").localeCompare(a.createdAt||"");});

  var url = BURL + "/c/" + cardId;
  var printId = card.printId || card.id.slice(-6).toUpperCase();

  content.innerHTML =
    '<div class="pg-header" style="margin-bottom:20px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">' +
          '<div><div class="cd-title" style="font-size:32px;font-family:monospace">' + printId + '</div>' +
          '<div style="font-size:14px;color:#858585;margin-top:4px">' + t("info_physical_card_id") + '</div></div>' +
          '<div>' + bdg(card.status||"unassigned") + '</div>' +
        '</div>' +
        '<div class="pg-info-grid">' +
          '<div><div class="pg-info-label">' + t("th_token") + '</div><div class="pg-info-value" style="font-family:monospace;font-size:13px">' + cardId + '</div></div>' +
          '<div><div class="pg-info-label">' + t("info_company") + '</div><div class="pg-info-value">' + esc(co ? co.name : "—") + '</div></div>' +
          '<div><div class="pg-info-label">' + t("info_created") + '</div><div class="pg-info-value">' + csvDate(card.createdAt) + '</div></div>' +
          '<div style="grid-column:1/-1"><div class="pg-info-label">' + t("th_url") + '</div>' +
            '<div style="display:flex;align-items:center;gap:10px;margin-top:6px">' +
              '<span style="font-family:monospace;font-size:13px;color:#4f00df">' + url + '</span>' +
              '<button class="cd-action-btn" onclick="cp(\''+url+'\')" title="Copy"><svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6875 7.51562H4.0625C3.6854 7.51562 3.32374 7.66543 3.05708 7.93208C2.79043 8.19874 2.64063 8.5604 2.64062 8.9375V20.3125C2.64062 20.6896 2.79043 21.0513 3.05708 21.3179C3.32374 21.5846 3.6854 21.7344 4.0625 21.7344H18.6875C19.0646 21.7344 19.4263 21.5846 19.6929 21.3179C19.9596 21.0513 20.1094 20.6896 20.1094 20.3125V8.9375C20.1094 8.5604 19.9596 8.19874 19.6929 7.93208C19.4263 7.66543 19.0646 7.51562 18.6875 7.51562Z" fill="#164E23"/></svg></button>' +
            '</div>' +
          '</div>' +
        '</div>' +
    '</div>' +

    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">' +
      '<div class="pg-card" style="margin-bottom:0"><div class="pg-section-title">' + t("section_handyman") + '</div>' +
        (hm ? '<div style="display:flex;align-items:center;gap:12px"><div class="pg-av">'+ini(hm.name)+'</div><div>' +
          '<div class="pg-link" style="font-weight:600" onclick="openHMDetail(\''+hm.id+'\',\'nfc-pool-all\')">'+esc(hm.name)+'</div>' +
          '<div style="color:#858585;font-size:13px">'+esc(hm.phone||"")+'</div>' +
          (hm.ratingAvg?'<div style="color:#EF9F27;font-size:13px">★ '+Number(hm.ratingAvg).toFixed(1)+'</div>':'') +
        '</div></div>' : '<div style="color:#aaa;font-size:14px">' + t("empty_no_handyman_assigned") + '</div>') +
      '</div>' +
      '<div class="pg-card" style="margin-bottom:0"><div class="pg-section-title">' + t("section_client") + '</div>' +
        (cl ? '<div style="display:flex;align-items:center;gap:12px"><div class="pg-av">'+ini(cl.name)+'</div><div>' +
          '<div class="pg-link" style="font-weight:600" onclick="openCl(\''+cl.id+'\')">'+esc(cl.name)+'</div>' +
          '<div style="color:#858585;font-size:13px">'+esc(cl.phone||"")+'</div>' +
          '<div style="color:#858585;font-size:13px">'+esc(cl.email||"")+'</div>' +
        '</div></div>' : '<div style="color:#aaa;font-size:14px">' + t("empty_card_not_activated") + '</div>') +
      '</div>' +
    '</div>' +

    '<div class="pg-section-title">' + tf("order_history_count", {count: orders.length}) + '</div>' +
    '<div class="pg-table-wrap">' +
    '<table class="pg-table"><thead><tr><th>' + t("th_date") + '</th><th>' + t("th_category") + '</th><th>' + t("th_status") + '</th><th>' + t("th_rating") + '</th><th>' + t("th_price") + '</th><th style="width:90px"></th></tr></thead>' +
    '<tbody>'+(orders.length ? orders.map(function(o) {
      return '<tr style="cursor:pointer" onclick="showOrderDetail(\''+o.id+'\',\'nfc-pool-all\')">' +
        '<td style="color:#858585">'+csvDate(o.createdAt)+'</td>' +
        '<td>'+esc(o.category||"—")+'</td>' +
        '<td>'+bdg(o.status||"new")+'</td>' +
        '<td>'+(o.clientRating?'<span style="color:#EF9F27">★ '+o.clientRating+'</span>':'<span style="color:#bbb">—</span>')+'</td>' +
        '<td>'+(o.price?"$"+o.price:"<span style=\'color:#bbb\'>—</span>")+'</td>' +
        '<td style="text-align:right"><span style="font-size:13px;color:#4f00df;font-weight:600">' + t("label_view") + '</span></td>' +
      '</tr>';
    }).join("") : '<tr><td colspan="6" class="pg-empty">' + t("empty_no_orders") + '</td></tr>') +
    '</tbody></table></div>';
}

// ── ARCHIVE ───────────────────────────────────────────────────
async function loadArchiveBadge() {
  try {
    var items = await fsL("archive", 100);
    var now = new Date();
    var active = items.filter(function(x) { return new Date(x.expiresAt) > now; });
    var badge = document.getElementById("archiveBadge");
    if (active.length > 0) { badge.textContent = active.length; badge.style.display = "inline"; }
    else badge.style.display = "none";
  } catch(e) {}
}

async function loadArchive() {
  var el = document.getElementById("archiveList");
  el.innerHTML = '<div class="pg-card"><div class="pg-empty">' + t("archive_loading") + '</div></div>';
  var items = await fsL("archive", 100);
  if (!items.length) {
    el.innerHTML = '<div class="pg-card"><div class="pg-empty">' + t("archive_empty") + '</div></div>';
    return;
  }
  var now = new Date();
  items.sort(function(a,b) { return (b.deletedAt||"").localeCompare(a.deletedAt||""); });

  el.innerHTML = items.map(function(item) {
    var expired = new Date(item.expiresAt) < now;
    var daysLeft = Math.max(0, Math.ceil((new Date(item.expiresAt) - now) / (1000*60*60*24)));
    var co = JSON.parse(item.company || "{}");
    var cards = JSON.parse(item.cards || "[]");
    var handymen = JSON.parse(item.handymen || "[]");

    return '<div class="pg-card" style="margin-bottom:16px;' + (expired ? 'opacity:0.5' : '') + '">' +
        '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px">' +
          '<div>' +
            '<div style="font-size:20px;font-weight:600;color:#111;font-family:\'Inter\',sans-serif">' + esc(item.name || "—") + '</div>' +
            '<div style="color:#858585;font-size:14px;margin-top:6px">' + tf("deleted_label", {date: csvDate(item.deletedAt)}) +
              (expired ? ' · <span style="color:#D93025;font-weight:600">' + t("expired_label") + '</span>' : ' · <span style="color:#059669;font-weight:600">' + tf("days_left_label", {days: daysLeft}) + '</span>') +
            '</div>' +
          '</div>' +
          (!expired ? '<div style="display:flex;gap:10px">' +
            '<button class="dbtn-cancel" onclick="downloadArchiveBackup(\'' + item.id + '\')">' + t("btn_download") + '</button>' +
            '<button class="dbtn-save" onclick="restoreFromArchive(\'' + item.id + '\')">' + t("btn_restore") + '</button>' +
          '</div>' : '<span style="color:#D93025;font-size:14px;font-weight:600">' + t("expired_cannot_restore") + '</span>') +
        '</div>' +
        '<div style="display:flex;gap:20px;font-size:14px;color:#858585;flex-wrap:wrap">' +
          '<span>' + t("label_company_data") + '</span>' +
          '<span>' + tf("label_cards_count", {count: cards.length}) + '</span>' +
          '<span>' + tf("label_handymen_count", {count: handymen.length}) + '</span>' +
          (item.deletedCards ? '<span class="pg-badge pg-badge-gray">' + t("badge_cards_deleted") + '</span>' : '<span class="pg-badge pg-badge-green">' + t("badge_cards_preserved") + '</span>') +
        '</div>' +
    '</div>';
  }).join("");
}

function downloadArchiveBackup(archiveId) {
  fsGet("archive", archiveId).then(function(item) {
    if (!item) { toast(t("toast_archive_item_not_found")); return; }
    var backup = {
      company: JSON.parse(item.company || "{}"),
      cards: JSON.parse(item.cards || "[]"),
      handymen: JSON.parse(item.handymen || "[]"),
      archivedAt: item.deletedAt
    };
    var blob = new Blob([JSON.stringify(backup, null, 2)], {type:"application/json"});
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "backup-" + (item.name||"company").replace(/\s+/g,"-") + "-" + csvDate(item.deletedAt) + ".json";
    link.click();
    toast(t("toast_backup_downloaded"));
  });
}

// Re-creates an archived/backed-up company with its cards and handymen, keeping every value's
// original type (arrays, numbers, booleans, null). Card and handyman rows can reference each other,
// so rows that fail are retried once after all the others. Returns how many rows could not be written.
async function restoreCompanyRows(co, cards, handymen, btn) {
  function fieldsOf(row) {
    var f = {};
    Object.keys(row).forEach(function(k) { if (k !== "id" && row[k] !== undefined) f[k] = row[k]; });
    return f;
  }
  if (btn) btn.textContent = t("toast_restoring_company");
  if (!(await fsP("companies", co.id, fieldsOf(co)))) return 1 + cards.length + handymen.length;   // nothing can reference a missing company

  var jobs = cards.map(function(c, i) { return { table: "nfc_cards", row: c, label: tf("toast_restoring_cards", {done: i + 1, total: cards.length}) }; })
    .concat(handymen.map(function(h, i) { return { table: "handymen", row: h, label: tf("toast_restoring_handymen", {done: i + 1, total: handymen.length}) }; }));
  var failed = [];
  for (var i = 0; i < jobs.length; i++) {
    if (btn) btn.textContent = jobs[i].label;
    if (!(await fsP(jobs[i].table, jobs[i].row.id, fieldsOf(jobs[i].row)))) failed.push(jobs[i]);
  }
  var still = 0;
  for (var j = 0; j < failed.length; j++) {
    if (!(await fsP(failed[j].table, failed[j].row.id, fieldsOf(failed[j].row)))) still++;
  }
  return still;
}

async function restoreFromJSON(input) {
  var file = input.files[0];
  if (!file) return;
  input.value = "";

  var text = await file.text();
  var backup;
  try { backup = JSON.parse(text); } catch(e) { toast(t("toast_invalid_json")); return; }

  var co = backup.company || {};
  var cards = backup.cards || [];
  var handymen = backup.handymen || [];
  var name = co.name || "Unknown Company";

  if (!co.id) { toast(t("toast_invalid_backup_no_id")); return; }

  var restoreCards = cards.length > 0 ? confirm(tf("confirm_restore_cards", {count: cards.length})) : false;
  var restoreHM = handymen.length > 0 ? confirm(tf("confirm_restore_handymen", {count: handymen.length})) : false;

  cfm(tf("confirm_restore_from_file", {name: name}),
    tf("restore_will_be_recreated", {cards: (restoreCards ? " + " + cards.length + " cards" : ""), handymen: (restoreHM ? " + " + handymen.length + " handymen" : "")}),
    async function(btn) {
      var failed = await restoreCompanyRows(co, restoreCards ? cards : [], restoreHM ? handymen : [], btn);
      closeModal("mConfirm");
      toast(failed ? tf("toast_restore_partial", {name: name, count: failed}) : tf("toast_restored_from_file", {name: name}));
      if (document.getElementById("page-archive").classList.contains("active")) loadArchive();
    }
  );
}

async function restoreFromArchive(archiveId) {
  var item = await fsGet("archive", archiveId);
  if (!item) { toast(t("toast_archive_item_not_found")); return; }

  var co = JSON.parse(item.company || "{}");
  var cards = JSON.parse(item.cards || "[]");
  var handymen = JSON.parse(item.handymen || "[]");
  var name = item.name || co.name || "Company";

  var restoreCards = item.deletedCards && cards.length > 0 ? confirm(tf("confirm_restore_cards", {count: cards.length})) : false;
  var restoreHM = item.deletedHandymen && handymen.length > 0 ? confirm(tf("confirm_restore_handymen", {count: handymen.length})) : false;

  cfm(tf("confirm_restore_from_archive", {name: name}),
    tf("restore_this_will_recreate", {cards: (restoreCards ? ", " + cards.length + " cards" : ""), handymen: (restoreHM ? ", " + handymen.length + " handymen" : "")}),
    async function(btn) {
      var failed = await restoreCompanyRows(co, restoreCards ? cards : [], restoreHM ? handymen : [], btn);
      if (failed) {
        // Keep the archive entry: it is the only copy of what could not be written.
        closeModal("mConfirm");
        toast(tf("toast_restore_partial", {name: name, count: failed}));
        await loadArchive();
        return;
      }

      // Delete archive entry after successful restore
      var delOk = await fsDel("archive", archiveId);
      console.log("Archive delete result:", delOk, "ID:", archiveId);
      if (!delOk) toast(t("toast_could_not_remove_archive"));

      closeModal("mConfirm");
      toast(tf("toast_restored_successfully", {name: name}));
      loadArchiveBadge();
      await loadArchive();
    }
  );
}

function renderCDStats(cards) {
  var tot = cards.length;
  var avail = cards.filter(function(c){ var withHM = c.status==="assigned"||!!((CC._hmByToken||{})[c.id]); return !withHM&&c.status!=="active"&&c.status!=="deactivated"; }).length;
  var withHM = cards.filter(function(c){ return c.status==="assigned"||!!((CC._hmByToken||{})[c.id]); }).length;
  var activated = cards.filter(function(c){ return c.status==="active"; }).length;
  var items = [{n:tot,l:t("stat_total_cards")},{n:avail,l:t("status_available")},{n:withHM,l:t("stat_with_handymen")},{n:activated,l:t("stat_activated_by_client")}];
  document.getElementById("cdStats").innerHTML = items.map(function(i){
    return '<div class="cd-stat"><div class="cd-stat-num">'+i.n+'</div><div class="cd-stat-label">'+i.l+'</div></div>';
  }).join("");
}


// ── MOBILE SIDEBAR ────────────────────────────────────────
function toggleSidebar() {
  var sb = document.querySelector('.sidebar');
  var bd = document.getElementById('sidebarBackdrop');
  var isOpen = sb.classList.toggle('open');
  bd.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeSidebar() {
  document.querySelector('.sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}
// Close sidebar on nav click (mobile)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nb').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (window.innerWidth <= 600) closeSidebar();
    });
  });
});

