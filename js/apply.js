function STEP_LABELS(){ return [t("step_label_1"),t("step_label_2"),t("step_label_3")]; }
var currentStep=1,totalSteps=3,cardCount=10;

// Tiered per-card pricing (base $5/card, discount unlocks at higher volumes).
// Custom quantities start at CUSTOM_MIN cards and are billed at CUSTOM_RATE.
var CARD_PRICE_TIERS=[{min:0,rate:5.0},{min:100,rate:4.7}];
var CARD_PACKAGES=[10,50,100];
var CUSTOM_MIN=300;
var CUSTOM_RATE=4.2;
var selectedPackage=10,customQty=0;

function tieredRate(qty){
  var rate=CARD_PRICE_TIERS[0].rate;
  for(var i=0;i<CARD_PRICE_TIERS.length;i++){ if(qty>=CARD_PRICE_TIERS[i].min) rate=CARD_PRICE_TIERS[i].rate; }
  return rate;
}
function fmtMoney(n){ return "$"+(Math.round(n*100)/100).toFixed(2).replace(/\.00$/,""); }

function buildPackages(){
  var html=CARD_PACKAGES.map(function(qty){
    var rate=tieredRate(qty),total=qty*rate;
    return '<div class="pkg-card" data-qty="'+qty+'" onclick="selectPackage('+qty+')">'+
      '<div class="pkg-qty">'+qty+'</div><div class="pkg-label">'+t("pkg_cards_label")+'</div>'+
      '<div class="pkg-price">'+fmtMoney(total)+'</div><div class="pkg-rate">'+fmtMoney(rate)+'/card</div></div>';
  }).join("");
  html+='<div class="pkg-card" data-qty="custom" onclick="selectPackage(\'custom\')">'+
    '<div class="pkg-qty">'+t("pkg_custom_label")+'</div><div class="pkg-label">'+t("pkg_custom_sub")+'</div>'+
    '<div class="pkg-price" id="pkgCustomPrice">&mdash;</div><div class="pkg-rate">'+fmtMoney(CUSTOM_RATE)+'/card</div></div>';
  document.getElementById("pkgGrid").innerHTML=html;
  selectPackage(selectedPackage);
}

function selectPackage(qty){
  selectedPackage=qty;
  document.querySelectorAll(".pkg-card").forEach(function(c){c.classList.toggle("sel",String(c.dataset.qty)===String(qty));});
  var customWrap=document.getElementById("customQtyWrap");
  if(qty==="custom"){
    customWrap.style.display="block";
    updateCustomQty();
  }else{
    customWrap.style.display="none";
    cardCount=qty;
  }
}

function updateCustomQty(){
  var v=parseInt(document.getElementById("customQtyInput").value,10);
  if(!v||v<1)v=0;
  customQty=v;
  cardCount=v;
  document.getElementById("pkgCustomPrice").textContent=v?fmtMoney(v*CUSTOM_RATE):"\u2014";
}
// -- API: all database access and e-mail go through the public-api edge function --
// The key below is only the gateway (anon) key; it grants no database access once the
// tables are locked down server-side, so it is safe to ship in the page.
var HC_PROD={url:"https://leiztsecokpeombovobc.supabase.co/functions/v1/public-api",key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlaXp0c2Vjb2twZW9tYm92b2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyMzg2OTIsImV4cCI6MjEwMzgxNDY5Mn0.RIit75wOCwBAwMTrBjiY3MOF7ERqmPo_y1nx__rXk_s"};
var API=HC_PROD;
var verifyTicket=null;
async function api(action,payload){
  var res;
  try{
    res=await fetch(API.url,{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+API.key,"apikey":API.key},
      body:JSON.stringify(Object.assign({action:action},payload||{}))
    });
  }catch(e){return {ok:false,error:"network",status:0};}
  var j=null;try{j=await res.json();}catch(e){}
  if(!j||typeof j!=="object")j={ok:false,error:"bad_response"};
  j.status=res.status;
  return j;
}
var I18N = {
 "en": {
  "logo_sub": "Company registration",
  "verify_title": "Verify your email",
  "verify_sub": "We'll send a 6-digit code to confirm it's really you before you apply.",
  "btn_send_code": "Send Code",
  "label_verification_code": "Verification Code",
  "btn_verify_code": "Verify Code",
  "label_didnt_get_code": "Didn't get a code?",
  "btn_resend_code": "Resend",
  "btn_resend_in_seconds": "Resend in {seconds}s",
  "toast_enter_valid_email": "Please enter a valid email address",
  "toast_code_sent": "Code sent! Check your inbox.",
  "toast_code_resent": "Code resent! Check your inbox.",
  "toast_enter_code": "Please enter the code",
  "toast_code_invalid": "Something went wrong, please try sending the code again",
  "toast_code_expired": "This code has expired. Please request a new one.",
  "toast_code_incorrect": "Incorrect code, please try again",
  "toast_too_many_attempts": "Too many attempts. Please request a new code.",
  "toast_rate_limited": "Too many requests. Please wait a bit and try again.",
  "toast_mail_failed": "We couldn't send the email. Please try again in a minute.",
  "toast_cooldown": "Please wait {seconds}s before requesting another code.",
  "toast_form_invalid": "Please check the form: some fields are invalid.",
  "toast_email_verified": "Email verified!",
  "toast_email_not_verified": "Please verify your email first",
  "email_otp_subject": "Your HandyCat verification code",
  "email_otp_greeting": "Hi,",
  "email_otp_body": "Use the code below to verify your email and continue your HandyCat application:",
  "email_otp_expiry": "This code expires in 10 minutes.",
  "preview_default_name": "Your Handyman",
  "preview_default_title": "Service professional",
  "preview_default_loc": "Your service area",
  "preview_more": "+ more",
  "step1_title": "Let's start with your details",
  "step1_sub": "Tell us about your company and how we can reach you.",
  "label_company_name": "Company Name *",
  "ph_company_name": "FixPro Services",
  "label_contact_person": "Contact Person *",
  "ph_contact_person": "John Smith",
  "label_email_address": "Email Address *",
  "ph_email_address": "john@fixpro.com",
  "label_phone_number": "Phone Number *",
  "ph_phone_number": "+1 (555) 000-0000",
  "label_business_address": "Business Address *",
  "ph_business_address": "123 Main St, New York, NY",
  "label_service_region": "Service Region *",
  "ph_service_region": "New York metropolitan area",
  "btn_back": "Back",
  "btn_next": "Next",
  "existing_co_title": "You already have a company",
  "existing_co_sub": "This email is already linked to the company below. Continue to your dashboard, or register a new company instead.",
  "btn_register_new_company": "Register a new company",
  "btn_continue_dashboard": "Continue",
  "toast_redirecting": "Redirecting to your dashboard...",
  "step2_title": "About your business",
  "step2_sub": "Help us understand your company better.",
  "label_business_type": "Business Type *",
  "select_type_placeholder": "Select type...",
  "biztype_home_services": "Home Services Company",
  "biztype_facility_mgmt": "Facility Management",
  "biztype_property_mgmt": "Property Management",
  "biztype_construction": "Construction Company",
  "biztype_cleaning": "Cleaning Services",
  "biztype_hvac_plumbing": "HVAC & Plumbing",
  "biztype_electrical": "Electrical Services",
  "biztype_general_contracting": "General Contracting",
  "biztype_other": "Other",
  "label_team_size": "Team Size *",
  "select_size_placeholder": "Select size...",
  "teamsize_1_5": "1–5 people",
  "teamsize_6_15": "6–15 people",
  "teamsize_16_50": "16–50 people",
  "teamsize_51_100": "51–100 people",
  "teamsize_100_plus": "100+ people",
  "label_services_offered": "Services Offered *",
  "ph_custom_service": "Add your own skill/service...",
  "btn_add": "+ Add",
  "label_website": "Website or Social Media",
  "ph_website": "https://yourwebsite.com",
  "step3_title": "How many NFC cards do you need?",
  "step3_sub": "Each card is assigned to one handyman. We'll prepare your order after approval.",
  "label_num_cards": "Number of cards",
  "ph_custom_qty": "e.g. 500",
  "pkg_cards_label": "cards",
  "pkg_custom_label": "Custom",
  "pkg_custom_sub": "from 300 cards",
  "whats_included": "What's included with each card:",
  "feat_nfc_chip": "NFC chip pre-programmed with handyman's profile URL",
  "feat_client_reg": "Client registration & review system",
  "feat_order_tracking": "Order tracking & history",
  "feat_dashboard": "Company dashboard access",
  "step4_title": "Licensing & insurance",
  "step4_sub": "This helps us verify your legitimacy and build trust with clients.",
  "label_license_number": "Business License Number *",
  "ph_license_number": "LIC-XXXXXXXX",
  "label_years_business": "Years in Business *",
  "label_insurance_provider": "Insurance Provider *",
  "ph_insurance_provider": "e.g. State Farm, Allstate...",
  "label_additional_notes": "Additional Notes",
  "ph_additional_notes": "Any additional information about your company, certifications, or anything else you'd like us to know...",
  "btn_skip_for_now": "Skip for now",
  "btn_submit_application": "Submit Application",
  "success_title": "Application submitted!",
  "success_body": "We've received your application and will review it within 1–2 business days. Check your email for confirmation.",
  "application_id_label": "Application ID:",
  "btn_copy": "Copy",
  "confirmation_sent_to": "Confirmation sent to",
  "optional": "(optional)",
  "step_label_1": "Contact Info",
  "step_label_2": "Business Details",
  "step_label_3": "NFC Cards",
  "step_label_4": "License & Insurance",
  "toast_already_added": "Already added",
  "toast_enter_company_name": "Please enter your company name",
  "toast_enter_contact": "Please enter contact person name",
  "toast_valid_email": "Please enter a valid email address",
  "toast_enter_phone": "Please enter your phone number",
  "toast_enter_address": "Please enter your business address",
  "toast_enter_region": "Please enter your service region",
  "toast_select_biztype": "Please select your business type",
  "toast_select_teamsize": "Please select your team size",
  "toast_select_one_service": "Please select at least one service",
  "toast_valid_custom_qty": "Please enter a valid custom quantity (min {min} cards)",
  "toast_select_package": "Please select a card package",
  "toast_enter_license": "Please enter your license number",
  "toast_enter_years": "Please enter years in business",
  "toast_enter_insurance": "Please enter your insurance provider",
  "toast_something_wrong": "Something went wrong. Please try again.",
  "toast_appid_copied": "Application ID copied!",
  "email_subject": "We received your HandyCat application — {company}",
  "email_greeting": "Hi {contact},",
  "email_thanks": "Thank you for applying to join HandyCat as a company partner.",
  "email_received": "We've received your application for {company} and our team will review it within 1–2 business days.",
  "email_cards_requested_label": "Cards requested:",
  "email_cards_requested_value": "{count} ({rate}/card, {total} total)",
  "email_submitted_label": "Submitted:",
  "email_will_notify": "You'll receive an email once a decision has been made.",
  "email_regards": "Best regards,",
  "email_team_sign": "The HandyCat Team",
  "cat_plumbing": "Plumbing",
  "cat_electrical": "Electrical",
  "cat_painting": "Painting",
  "cat_hvac": "HVAC",
  "cat_carpentry": "Carpentry",
  "cat_flooring": "Flooring",
  "cat_cleaning": "Cleaning",
  "cat_appliances": "Appliances",
  "cat_tiling": "Tiling",
  "cat_landscaping": "Landscaping",
  "cat_moving": "Moving",
  "cat_drywall": "Drywall"
 },
 "uk": {
  "logo_sub": "Реєстрація компанії",
  "verify_title": "Підтвердьте свою електронну адресу",
  "verify_sub": "Ми надішлемо 6-значний код, щоб підтвердити, що це справді ви, перш ніж подати заявку.",
  "btn_send_code": "Надіслати код",
  "label_verification_code": "Код підтвердження",
  "btn_verify_code": "Підтвердити код",
  "label_didnt_get_code": "Не отримали код?",
  "btn_resend_code": "Надіслати ще раз",
  "btn_resend_in_seconds": "Повторно через {seconds}с",
  "toast_enter_valid_email": "Будь ласка, введіть дійсну електронну адресу",
  "toast_code_sent": "Код надіслано! Перевірте пошту.",
  "toast_code_resent": "Код надіслано повторно! Перевірте пошту.",
  "toast_enter_code": "Будь ласка, введіть код",
  "toast_code_invalid": "Щось пішло не так, спробуйте надіслати код ще раз",
  "toast_code_expired": "Термін дії цього коду минув. Будь ласка, запросіть новий.",
  "toast_code_incorrect": "Невірний код, спробуйте ще раз",
  "toast_too_many_attempts": "Забагато спроб. Будь ласка, запросіть новий код.",
  "toast_rate_limited": "Забагато запитів. Зачекайте трохи й спробуйте ще раз.",
  "toast_mail_failed": "Не вдалося надіслати лист. Спробуйте ще раз за хвилину.",
  "toast_cooldown": "Зачекайте {seconds} с, перш ніж запитувати новий код.",
  "toast_form_invalid": "Перевірте форму: деякі поля заповнено некоректно.",
  "toast_email_verified": "Email підтверджено!",
  "toast_email_not_verified": "Будь ласка, спочатку підтвердьте свою електронну адресу",
  "email_otp_subject": "Ваш код підтвердження HandyCat",
  "email_otp_greeting": "Вітаємо,",
  "email_otp_body": "Використайте код нижче, щоб підтвердити свою електронну адресу та продовжити заявку в HandyCat:",
  "email_otp_expiry": "Термін дії цього коду — 10 хвилин.",
  "preview_default_name": "Ваш майстер",
  "preview_default_title": "Спеціаліст з обслуговування",
  "preview_default_loc": "Ваш район обслуговування",
  "preview_more": "+ ще",
  "step1_title": "Почнемо з ваших даних",
  "step1_sub": "Розкажіть про вашу компанію і як з вами зв'язатися.",
  "label_company_name": "Назва компанії *",
  "ph_company_name": "FixPro Services",
  "label_contact_person": "Контактна особа *",
  "ph_contact_person": "Іван Петренко",
  "label_email_address": "Email адреса *",
  "ph_email_address": "ivan@fixpro.com",
  "label_phone_number": "Номер телефону *",
  "ph_phone_number": "+380 (00) 000-0000",
  "label_business_address": "Адреса компанії *",
  "ph_business_address": "вул. Головна 123, Київ",
  "label_service_region": "Регіон обслуговування *",
  "ph_service_region": "Київ та область",
  "btn_back": "Назад",
  "btn_next": "Далі",
  "existing_co_title": "У вас вже є компанія",
  "existing_co_sub": "Цей email вже пов'язаний із компанією нижче. Перейдіть у свій кабінет або зареєструйте нову компанію.",
  "btn_register_new_company": "Зареєструвати нову компанію",
  "btn_continue_dashboard": "Продовжити",
  "toast_redirecting": "Перенаправлення до вашого кабінету...",
  "step2_title": "Про ваш бізнес",
  "step2_sub": "Допоможіть нам краще зрозуміти вашу компанію.",
  "label_business_type": "Тип бізнесу *",
  "select_type_placeholder": "Оберіть тип...",
  "biztype_home_services": "Компанія побутових послуг",
  "biztype_facility_mgmt": "Управління об'єктами",
  "biztype_property_mgmt": "Управління нерухомістю",
  "biztype_construction": "Будівельна компанія",
  "biztype_cleaning": "Клінінгові послуги",
  "biztype_hvac_plumbing": "Опалення та сантехніка",
  "biztype_electrical": "Електротехнічні послуги",
  "biztype_general_contracting": "Генеральний підряд",
  "biztype_other": "Інше",
  "label_team_size": "Розмір команди *",
  "select_size_placeholder": "Оберіть розмір...",
  "teamsize_1_5": "1–5 осіб",
  "teamsize_6_15": "6–15 осіб",
  "teamsize_16_50": "16–50 осіб",
  "teamsize_51_100": "51–100 осіб",
  "teamsize_100_plus": "100+ осіб",
  "label_services_offered": "Пропоновані послуги *",
  "ph_custom_service": "Додайте власну навичку/послугу...",
  "btn_add": "+ Додати",
  "label_website": "Вебсайт або соцмережі",
  "ph_website": "https://yourwebsite.com",
  "step3_title": "Скільки NFC-карток вам потрібно?",
  "step3_sub": "Кожна картка призначається одному майстру. Ми підготуємо ваше замовлення після схвалення.",
  "label_num_cards": "Кількість карток",
  "ph_custom_qty": "напр. 500",
  "pkg_cards_label": "карток",
  "pkg_custom_label": "Свій варіант",
  "pkg_custom_sub": "від 300 карток",
  "whats_included": "Що включено в кожну картку:",
  "feat_nfc_chip": "NFC-чіп, попередньо запрограмований на профіль майстра",
  "feat_client_reg": "Реєстрація клієнтів та система відгуків",
  "feat_order_tracking": "Відстеження заявок та історія",
  "feat_dashboard": "Доступ до панелі компанії",
  "step4_title": "Ліцензування та страхування",
  "step4_sub": "Це допомагає нам підтвердити вашу легітимність і зміцнити довіру клієнтів.",
  "label_license_number": "Номер бізнес-ліцензії *",
  "ph_license_number": "LIC-XXXXXXXX",
  "label_years_business": "Років у бізнесі *",
  "label_insurance_provider": "Страхова компанія *",
  "ph_insurance_provider": "напр. Страхова компанія X",
  "label_additional_notes": "Додаткові примітки",
  "ph_additional_notes": "Будь-яка додаткова інформація про вашу компанію, сертифікати або що завгодно, що варто знати...",
  "btn_skip_for_now": "Пропустити",
  "btn_submit_application": "Надіслати заявку",
  "success_title": "Заявку надіслано!",
  "success_body": "Ми отримали вашу заявку і розглянемо її протягом 1–2 робочих днів. Перевірте email для підтвердження.",
  "application_id_label": "Номер заявки:",
  "btn_copy": "Копіювати",
  "confirmation_sent_to": "Підтвердження надіслано на",
  "optional": "(необов'язково)",
  "step_label_1": "Контактні дані",
  "step_label_2": "Про бізнес",
  "step_label_3": "NFC-картки",
  "step_label_4": "Ліцензія та страхування",
  "toast_already_added": "Вже додано",
  "toast_enter_company_name": "Будь ласка, введіть назву компанії",
  "toast_enter_contact": "Будь ласка, введіть ім'я контактної особи",
  "toast_valid_email": "Будь ласка, введіть коректну email адресу",
  "toast_enter_phone": "Будь ласка, введіть номер телефону",
  "toast_enter_address": "Будь ласка, введіть адресу компанії",
  "toast_enter_region": "Будь ласка, введіть регіон обслуговування",
  "toast_select_biztype": "Будь ласка, оберіть тип бізнесу",
  "toast_select_teamsize": "Будь ласка, оберіть розмір команди",
  "toast_select_one_service": "Будь ласка, оберіть принаймні одну послугу",
  "toast_valid_custom_qty": "Будь ласка, введіть коректну кількість (мінімум {min} карток)",
  "toast_select_package": "Будь ласка, оберіть пакет карток",
  "toast_enter_license": "Будь ласка, введіть номер ліцензії",
  "toast_enter_years": "Будь ласка, введіть кількість років у бізнесі",
  "toast_enter_insurance": "Будь ласка, введіть страхову компанію",
  "toast_something_wrong": "Щось пішло не так. Спробуйте ще раз.",
  "toast_appid_copied": "Номер заявки скопійовано!",
  "email_subject": "Ми отримали вашу заявку HandyCat — {company}",
  "email_greeting": "Вітаємо, {contact},",
  "email_thanks": "Дякуємо за подання заявки на партнерство з HandyCat.",
  "email_received": "Ми отримали вашу заявку для {company}, наша команда розгляне її протягом 1–2 робочих днів.",
  "email_cards_requested_label": "Кількість карток:",
  "email_cards_requested_value": "{count} ({rate}/картка, {total} загалом)",
  "email_submitted_label": "Надіслано:",
  "email_will_notify": "Ви отримаєте email, щойно рішення буде прийнято.",
  "email_regards": "З повагою,",
  "email_team_sign": "Команда HandyCat",
  "cat_plumbing": "Сантехніка",
  "cat_electrical": "Електрика",
  "cat_painting": "Малярні роботи",
  "cat_hvac": "Опалення та кондиціонування",
  "cat_carpentry": "Столярні роботи",
  "cat_flooring": "Підлогові роботи",
  "cat_cleaning": "Прибирання",
  "cat_appliances": "Побутова техніка",
  "cat_tiling": "Кахельні роботи",
  "cat_landscaping": "Ландшафтний дизайн",
  "cat_moving": "Переїзд",
  "cat_drywall": "Гіпсокартон"
 },
 "es": {
  "logo_sub": "Registro de empresa",
  "verify_title": "Verifica tu correo electrónico",
  "verify_sub": "Te enviaremos un código de 6 dígitos para confirmar que eres tú antes de continuar.",
  "btn_send_code": "Enviar código",
  "label_verification_code": "Código de verificación",
  "btn_verify_code": "Verificar código",
  "label_didnt_get_code": "¿No recibiste el código?",
  "btn_resend_code": "Reenviar",
  "btn_resend_in_seconds": "Reenviar en {seconds}s",
  "toast_enter_valid_email": "Por favor, introduce un correo electrónico válido",
  "toast_code_sent": "¡Código enviado! Revisa tu bandeja de entrada.",
  "toast_code_resent": "¡Código reenviado! Revisa tu bandeja de entrada.",
  "toast_enter_code": "Por favor, introduce el código",
  "toast_code_invalid": "Algo salió mal, intenta enviar el código de nuevo",
  "toast_code_expired": "Este código ha caducado. Solicita uno nuevo.",
  "toast_code_incorrect": "Código incorrecto, inténtalo de nuevo",
  "toast_too_many_attempts": "Demasiados intentos. Solicita un nuevo código.",
  "toast_rate_limited": "Demasiadas solicitudes. Espera un poco e inténtalo de nuevo.",
  "toast_mail_failed": "No pudimos enviar el correo. Inténtalo de nuevo en un minuto.",
  "toast_cooldown": "Espera {seconds} s antes de pedir otro código.",
  "toast_form_invalid": "Revisa el formulario: algunos campos no son válidos.",
  "toast_email_verified": "¡Correo verificado!",
  "toast_email_not_verified": "Por favor, verifica tu correo electrónico primero",
  "email_otp_subject": "Tu código de verificación de HandyCat",
  "email_otp_greeting": "Hola,",
  "email_otp_body": "Usa el código a continuación para verificar tu correo y continuar tu solicitud en HandyCat:",
  "email_otp_expiry": "Este código caduca en 10 minutos.",
  "preview_default_name": "Tu técnico",
  "preview_default_title": "Profesional de servicio",
  "preview_default_loc": "Tu área de servicio",
  "preview_more": "+ más",
  "step1_title": "Comencemos con tus datos",
  "step1_sub": "Cuéntanos sobre tu empresa y cómo podemos contactarte.",
  "label_company_name": "Nombre de la empresa *",
  "ph_company_name": "FixPro Services",
  "label_contact_person": "Persona de contacto *",
  "ph_contact_person": "Juan Pérez",
  "label_email_address": "Correo electrónico *",
  "ph_email_address": "juan@fixpro.com",
  "label_phone_number": "Número de teléfono *",
  "ph_phone_number": "+1 (555) 000-0000",
  "label_business_address": "Dirección de la empresa *",
  "ph_business_address": "Calle Principal 123, Madrid",
  "label_service_region": "Región de servicio *",
  "ph_service_region": "Área metropolitana de Madrid",
  "btn_back": "Atrás",
  "btn_next": "Siguiente",
  "existing_co_title": "Ya tienes una empresa",
  "existing_co_sub": "Este correo ya está vinculado a la empresa que se muestra abajo. Continúa a tu panel o registra una nueva empresa.",
  "btn_register_new_company": "Registrar una nueva empresa",
  "btn_continue_dashboard": "Continuar",
  "toast_redirecting": "Redirigiendo a tu panel...",
  "step2_title": "Sobre tu empresa",
  "step2_sub": "Ayúdanos a entender mejor tu empresa.",
  "label_business_type": "Tipo de negocio *",
  "select_type_placeholder": "Selecciona un tipo...",
  "biztype_home_services": "Empresa de servicios del hogar",
  "biztype_facility_mgmt": "Gestión de instalaciones",
  "biztype_property_mgmt": "Gestión de propiedades",
  "biztype_construction": "Empresa de construcción",
  "biztype_cleaning": "Servicios de limpieza",
  "biztype_hvac_plumbing": "Climatización y plomería",
  "biztype_electrical": "Servicios eléctricos",
  "biztype_general_contracting": "Contratación general",
  "biztype_other": "Otro",
  "label_team_size": "Tamaño del equipo *",
  "select_size_placeholder": "Selecciona un tamaño...",
  "teamsize_1_5": "1–5 personas",
  "teamsize_6_15": "6–15 personas",
  "teamsize_16_50": "16–50 personas",
  "teamsize_51_100": "51–100 personas",
  "teamsize_100_plus": "100+ personas",
  "label_services_offered": "Servicios ofrecidos *",
  "ph_custom_service": "Añade tu propia habilidad/servicio...",
  "btn_add": "+ Añadir",
  "label_website": "Sitio web o redes sociales",
  "ph_website": "https://tusitio.com",
  "step3_title": "¿Cuántas tarjetas NFC necesitas?",
  "step3_sub": "Cada tarjeta se asigna a un técnico. Prepararemos tu pedido después de la aprobación.",
  "label_num_cards": "Número de tarjetas",
  "ph_custom_qty": "ej. 500",
  "pkg_cards_label": "tarjetas",
  "pkg_custom_label": "Personalizado",
  "pkg_custom_sub": "desde 300 tarjetas",
  "whats_included": "Qué incluye cada tarjeta:",
  "feat_nfc_chip": "Chip NFC preprogramado con la URL del perfil del técnico",
  "feat_client_reg": "Registro de clientes y sistema de reseñas",
  "feat_order_tracking": "Seguimiento de solicitudes e historial",
  "feat_dashboard": "Acceso al panel de la empresa",
  "step4_title": "Licencias y seguro",
  "step4_sub": "Esto nos ayuda a verificar tu legitimidad y generar confianza con los clientes.",
  "label_license_number": "Número de licencia comercial *",
  "ph_license_number": "LIC-XXXXXXXX",
  "label_years_business": "Años en el negocio *",
  "label_insurance_provider": "Compañía de seguros *",
  "ph_insurance_provider": "ej. Compañía de seguros X",
  "label_additional_notes": "Notas adicionales",
  "ph_additional_notes": "Cualquier información adicional sobre tu empresa, certificaciones, o cualquier otra cosa que quieras que sepamos...",
  "btn_skip_for_now": "Omitir por ahora",
  "btn_submit_application": "Enviar solicitud",
  "success_title": "¡Solicitud enviada!",
  "success_body": "Hemos recibido tu solicitud y la revisaremos en 1 a 2 días hábiles. Revisa tu correo para la confirmación.",
  "application_id_label": "ID de solicitud:",
  "btn_copy": "Copiar",
  "confirmation_sent_to": "Confirmación enviada a",
  "optional": "(opcional)",
  "step_label_1": "Información de contacto",
  "step_label_2": "Detalles de la empresa",
  "step_label_3": "Tarjetas NFC",
  "step_label_4": "Licencia y seguro",
  "toast_already_added": "Ya añadido",
  "toast_enter_company_name": "Por favor ingresa el nombre de tu empresa",
  "toast_enter_contact": "Por favor ingresa el nombre de la persona de contacto",
  "toast_valid_email": "Por favor ingresa un correo electrónico válido",
  "toast_enter_phone": "Por favor ingresa tu número de teléfono",
  "toast_enter_address": "Por favor ingresa la dirección de tu empresa",
  "toast_enter_region": "Por favor ingresa tu región de servicio",
  "toast_select_biztype": "Por favor selecciona el tipo de negocio",
  "toast_select_teamsize": "Por favor selecciona el tamaño del equipo",
  "toast_select_one_service": "Por favor selecciona al menos un servicio",
  "toast_valid_custom_qty": "Por favor ingresa una cantidad válida (mínimo {min} tarjetas)",
  "toast_select_package": "Por favor selecciona un paquete de tarjetas",
  "toast_enter_license": "Por favor ingresa tu número de licencia",
  "toast_enter_years": "Por favor ingresa los años en el negocio",
  "toast_enter_insurance": "Por favor ingresa tu compañía de seguros",
  "toast_something_wrong": "Algo salió mal. Inténtalo de nuevo.",
  "toast_appid_copied": "¡ID de solicitud copiado!",
  "email_subject": "Recibimos tu solicitud de HandyCat — {company}",
  "email_greeting": "Hola {contact},",
  "email_thanks": "Gracias por postularte para unirte a HandyCat como empresa asociada.",
  "email_received": "Hemos recibido tu solicitud para {company} y nuestro equipo la revisará en 1 a 2 días hábiles.",
  "email_cards_requested_label": "Tarjetas solicitadas:",
  "email_cards_requested_value": "{count} ({rate}/tarjeta, {total} en total)",
  "email_submitted_label": "Enviado:",
  "email_will_notify": "Recibirás un correo una vez que se haya tomado una decisión.",
  "email_regards": "Saludos cordiales,",
  "email_team_sign": "El equipo de HandyCat",
  "cat_plumbing": "Plomería",
  "cat_electrical": "Electricidad",
  "cat_painting": "Pintura",
  "cat_hvac": "Climatización",
  "cat_carpentry": "Carpintería",
  "cat_flooring": "Pisos",
  "cat_cleaning": "Limpieza",
  "cat_appliances": "Electrodomésticos",
  "cat_tiling": "Azulejos",
  "cat_landscaping": "Jardinería",
  "cat_moving": "Mudanza",
  "cat_drywall": "Tabiquería"
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
  if (lbl) lbl.textContent = "🌐" + " " + labels[LANG];
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
  buildSteps();
  buildPackages();
  updatePreviewCard();
}

function toast(m){var e=document.getElementById("toast");e.textContent=m;e.classList.add("show");setTimeout(function(){e.classList.remove("show");},3000);}
function sv(v){return v==null?"":String(v);}
function nv(v){return Number(v||0);}
function dv(v){return Number(v||0);}

// ── EMAIL VERIFICATION (OTP gate before the application form) ──
var verifiedEmail=null;
var resendCooldownTimer=null;

function isValidEmail(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);}


async function sendVerificationCode(isResend){
  var email=document.getElementById("verifyEmail").value.trim();
  if(!isValidEmail(email)){toast(t("toast_enter_valid_email"));return;}
  var btn=document.getElementById("sendCodeBtn");
  if(btn){btn.disabled=true;btn.classList.add("loading");}
  var r=await api("send-code",{email:email,lang:LANG});
  if(btn){btn.disabled=false;btn.classList.remove("loading");}
  var cooldown=(!r.ok&&r.error==="cooldown");
  if(!r.ok&&!cooldown){
    if(r.error==="rate_limited")toast(t("toast_rate_limited"));
    else if(r.error==="mail_failed")toast(t("toast_mail_failed"));
    else if(r.error==="invalid_email")toast(t("toast_enter_valid_email"));
    else toast(t("toast_code_invalid"));
    return;
  }
  // A cooldown means a code was sent less than a minute ago, so the entry box is still the right place to be.
  document.getElementById("codeEntryWrap").style.display="block";
  document.getElementById("sendCodeActions").style.display="none";
  document.getElementById("verifyEmail").disabled=true;
  if(cooldown)toast(tf("toast_cooldown",{seconds:r.retry_after||60}));
  else toast(isResend?t("toast_code_resent"):t("toast_code_sent"));
  startResendCooldown(cooldown?(r.retry_after||60):60);
}

function startResendCooldown(initial){
  var link=document.getElementById("resendLink");
  if(!link)return;
  var seconds=initial||60;
  var original=t("btn_resend_code");
  link.style.pointerEvents="none";link.style.opacity=.5;
  clearInterval(resendCooldownTimer);
  resendCooldownTimer=setInterval(function(){
    seconds--;
    link.textContent=tf("btn_resend_in_seconds",{seconds:seconds});
    if(seconds<=0){
      clearInterval(resendCooldownTimer);
      link.style.pointerEvents="auto";link.style.opacity=1;
      link.textContent=original;
    }
  },1000);
}

function backToEmailEntry(){
  document.getElementById("codeEntryWrap").style.display="none";
  document.getElementById("sendCodeActions").style.display="flex";
  document.getElementById("verifyEmail").disabled=false;
  document.getElementById("verifyCode").value="";
  clearInterval(resendCooldownTimer);
}

async function verifyEnteredCode(){
  var email=document.getElementById("verifyEmail").value.trim();
  var code=document.getElementById("verifyCode").value.trim();
  if(!code){toast(t("toast_enter_code"));return;}
  var btn=document.getElementById("verifyCodeBtn");
  if(btn){btn.disabled=true;btn.classList.add("loading");}
  var r=await api("verify-code",{email:email,code:code});
  if(btn){btn.disabled=false;btn.classList.remove("loading");}
  if(!r.ok||!r.ticket){
    var keys={expired:"toast_code_expired",too_many_attempts:"toast_too_many_attempts",incorrect:"toast_code_incorrect",rate_limited:"toast_rate_limited"};
    toast(t(keys[r.error]||"toast_code_invalid"));
    return;
  }
  verifiedEmail=email.toLowerCase();
  verifyTicket=r.ticket;
  clearInterval(resendCooldownTimer);
  var existingCos=r.companies||[];
  if(existingCos.length){
    renderExistingCompanies(existingCos);
    document.getElementById("s-verify").classList.remove("active");
    document.getElementById("s-existing-company").classList.add("active");
  }else{
    unlockForm(verifiedEmail);
  }
}

function unlockForm(email){
  document.getElementById("s-verify").classList.remove("active");
  document.getElementById("s-existing-company").classList.remove("active");
  document.getElementById("step-1").classList.add("active");
  // Re-verification (after email_not_verified) can come from any step: start the walk over at step 1, fields keep their values.
  currentStep=1;updateProgress();
  var emailField=document.getElementById("f-email");
  if(emailField){emailField.value=email;emailField.readOnly=true;}
  toast(t("toast_email_verified"));
}

// ── EXISTING COMPANIES (returned by the server once the e-mail is verified) ──
function renderExistingCompanies(list){
  var wrap=document.getElementById("existingCoList");
  wrap.innerHTML=list.map(function(c){
    return '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px;border:1.5px solid #eceae6;border-radius:12px;margin-bottom:10px">'+
      '<div style="min-width:0"><div style="font-weight:600">'+esc(c.name||c.id)+'</div><div style="font-size:12px;color:#888">'+esc(c.location||"")+'</div></div>'+
      '<button class="btn-next" style="flex-shrink:0;padding:10px 18px;width:auto" data-id="'+esc(c.id)+'" onclick="continueToCompany(this.dataset.id)" data-i18n="btn_continue_dashboard">Continue</button>'+
    '</div>';
  }).join("");
}

function resetVerification(){
  verifiedEmail=null;verifyTicket=null;
  document.querySelectorAll(".ss").forEach(function(x){x.classList.remove("active");});
  document.getElementById("s-verify").classList.add("active");
  backToEmailEntry();
}

async function continueToCompany(companyId){
  toast(t("toast_redirecting"));
  var r=await api("continue-to-company",{ticket:verifyTicket,company_id:companyId});
  if(!r.ok||!r.url){
    if(r.error==="email_not_verified"){toast(t("toast_email_not_verified"));resetVerification();return;}
    toast(r.error==="rate_limited"?t("toast_rate_limited"):t("toast_something_wrong"));
    return;
  }
  window.location.href=r.url;
}

function proceedNewApplication(){
  unlockForm(verifiedEmail);
}

function cancelExistingCompany(){
  document.getElementById("s-existing-company").classList.remove("active");
  document.getElementById("s-verify").classList.add("active");
}

function buildSteps(){
  var el=document.getElementById("sideSteps");
  el.innerHTML=STEP_LABELS().map(function(l,i){
    var n=i+1,cls=n<currentStep?"done":n===currentStep?"active":"";
    return'<div class="si"><div class="sd '+cls+'"></div><div class="sl '+cls+'">'+l+'</div></div>';
  }).join("");
}

function updateProgress(){
  var pct=Math.round(((currentStep-1)/totalSteps)*100);
  document.getElementById("progFill").style.strokeDashoffset=238.76-(pct/100)*238.76;
  document.getElementById("progPct").textContent=pct+"%";
  buildSteps();
}

function esc(s){
  return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");
}

function initialsOf(name){
  var parts=String(name||"").trim().split(/\s+/).filter(Boolean);
  if(!parts.length)return "";
  if(parts.length===1)return parts[0].slice(0,2).toUpperCase();
  return (parts[0][0]+parts[1][0]).toUpperCase();
}

function updatePreviewCard(){
  var contact=document.getElementById("f-contact").value.trim();
  var company=document.getElementById("f-company").value.trim();
  var region=document.getElementById("f-region").value.trim();
  var address=document.getElementById("f-address").value.trim();

  document.getElementById("prevName").textContent = contact || t("preview_default_name");
  document.getElementById("prevTitle").textContent = company || t("preview_default_title");
  document.getElementById("prevAvatarText").textContent = contact ? initialsOf(contact) : "JL";
  document.getElementById("prevLoc").innerHTML = "&#x1F3E0; " + esc(region || address || t("preview_default_loc"));

  // Preview card is cosmetic only, so show whatever label is currently displayed
  // (translated) rather than the canonical English value used for storage.
  var selChips = Array.from(document.querySelectorAll("#serviceChips .chip.sel")).map(function(c){return c.textContent.trim();});
  var catsEl = document.getElementById("prevCats");
  if(!selChips.length){
    catsEl.innerHTML = '<span class="cat">'+esc(t("cat_plumbing"))+'</span><span class="cat">'+esc(t("cat_electrical"))+'</span><span class="cat">'+esc(t("cat_hvac"))+'</span><span class="cat">'+esc(t("preview_more"))+'</span>';
  } else {
    var shown = selChips.slice(0,3);
    var html = shown.map(function(s){return '<span class="cat">'+esc(s)+'</span>';}).join("");
    if (selChips.length > 3) html += '<span class="cat">+ ' + (selChips.length - 3) + ' '+esc(t("preview_more").replace(/^\+\s*/,""))+'</span>';
    catsEl.innerHTML = html;
  }
}

function togChip(el){el.classList.toggle("sel");updatePreviewCard();}

function addCustomService(){
  var inp=document.getElementById("customServiceInput");
  var val=inp.value.trim();
  if(!val)return;
  var exists=Array.from(document.querySelectorAll("#serviceChips .chip")).some(function(c){return (c.dataset.label||c.textContent).trim().toLowerCase()===val.toLowerCase();});
  if(exists){toast(t("toast_already_added"));inp.value="";return;}
  var chip=document.createElement("span");
  chip.className="chip sel chip-custom";
  chip.dataset.label=val;
  var labelSpan=document.createElement("span");
  labelSpan.textContent=val;
  var removeBtn=document.createElement("span");
  removeBtn.className="chip-remove";
  removeBtn.textContent="\u00d7";
  removeBtn.title="Remove";
  removeBtn.onclick=function(e){ e.stopPropagation(); chip.remove(); updatePreviewCard(); };
  chip.appendChild(labelSpan);
  chip.appendChild(removeBtn);
  chip.onclick=function(){ togChip(chip); };
  document.getElementById("serviceChips").appendChild(chip);
  inp.value="";
  inp.focus();
  updatePreviewCard();
}
function validate(step){
  if(step===1){
    if(!document.getElementById("f-company").value.trim()){toast(t("toast_enter_company_name"));return false;}
    if(!document.getElementById("f-contact").value.trim()){toast(t("toast_enter_contact"));return false;}
    var em=document.getElementById("f-email").value.trim();
    if(!em||!em.includes("@")){toast(t("toast_valid_email"));return false;}
    if(!document.getElementById("f-phone").value.trim()){toast(t("toast_enter_phone"));return false;}
    if(!document.getElementById("f-address").value.trim()){toast(t("toast_enter_address"));return false;}
    if(!document.getElementById("f-region").value.trim()){toast(t("toast_enter_region"));return false;}
  }
  if(step===2){
    if(!document.getElementById("f-biztype").value){toast(t("toast_select_biztype"));return false;}
    if(!document.getElementById("f-teamsize").value){toast(t("toast_select_teamsize"));return false;}
    if(!document.querySelectorAll("#serviceChips .chip.sel").length){toast(t("toast_select_one_service"));return false;}
  }
  if(step===3){
    if(selectedPackage==="custom"){
      if(!customQty||customQty<CUSTOM_MIN){toast(tf("toast_valid_custom_qty",{min:CUSTOM_MIN}));return false;}
    }else if(!cardCount||cardCount<1){
      toast(t("toast_select_package"));return false;
    }
  }
  return true;
}

function nextStep(){
  if(!validate(currentStep))return;
  currentStep++;
  document.querySelectorAll(".ss").forEach(function(s){s.classList.remove("active");});
  document.getElementById("step-"+currentStep).classList.add("active");
  updateProgress();window.scrollTo(0,0);
}

function prevStep(){
  currentStep--;
  document.querySelectorAll(".ss").forEach(function(s){s.classList.remove("active");});
  document.getElementById("step-"+currentStep).classList.add("active");
  updateProgress();window.scrollTo(0,0);
}

async function submitApplication(){
  if(!verifiedEmail||!verifyTicket){toast(t("toast_email_not_verified"));return;}
  if(!validate(3))return;
  var btn=document.getElementById("submitBtn");
  btn.disabled=true;btn.classList.add("loading");
  var services=Array.from(document.querySelectorAll("#serviceChips .chip.sel")).map(function(c){return c.dataset.label||c.textContent.trim();});

  // The server owns price, status, e-mail address and id; only what the person typed is sent.
  var r=await api("submit-application",{
    ticket:verifyTicket,lang:LANG,
    company_name:document.getElementById("f-company").value.trim(),
    contact_person:document.getElementById("f-contact").value.trim(),
    phone:document.getElementById("f-phone").value.trim(),
    address:document.getElementById("f-address").value.trim(),
    region:document.getElementById("f-region").value.trim(),
    business_type:document.getElementById("f-biztype").value,
    team_size:document.getElementById("f-teamsize").value,
    services:services,
    website:document.getElementById("f-website").value.trim(),
    package:selectedPackage,
    quantity:cardCount
  });

  if(!r.ok){
    console.error("submit failed",r.error);
    btn.disabled=false;btn.classList.remove("loading");
    if(r.error==="email_not_verified"){toast(t("toast_email_not_verified"));resetVerification();return;}
    if(r.error==="invalid_form"){toast(t("toast_form_invalid"));return;}
    if(r.error==="rate_limited"){toast(t("toast_rate_limited"));return;}
    toast(t("toast_something_wrong"));
    return;
  }

  document.getElementById("appIdDisplay").textContent=r.application_id;
  document.getElementById("emailDisplay").textContent=r.email;
  document.querySelectorAll(".ss").forEach(function(x){x.classList.remove("active");});
  document.getElementById("s-success").classList.add("active");
  document.getElementById("progFill").style.strokeDashoffset=0;
  document.getElementById("progPct").textContent="100%";
}

function copyAppId(){
  navigator.clipboard.writeText(document.getElementById("appIdDisplay").textContent);
  toast(t("toast_appid_copied"));
}

applyStaticTranslations();
renderLangSwitcher();
buildPackages();
updateProgress();
updatePreviewCard();
