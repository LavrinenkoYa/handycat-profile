// -- API: all data access and photo upload go through the card-api edge function --
// The key below is only the gateway (anon) key. The NFC card token in the address is the credential:
// the server derives the client from the card and checks every action against it.
var HC_PROD={url:"https://leiztsecokpeombovobc.supabase.co/functions/v1/card-api",key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlaXp0c2Vjb2twZW9tYm92b2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyMzg2OTIsImV4cCI6MjEwMzgxNDY5Mn0.RIit75wOCwBAwMTrBjiY3MOF7ERqmPo_y1nx__rXk_s"};
var API=HC_PROD;
async function api(action,payload){
  var res;
  try{
    res=await fetch(API.url,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+API.key,"apikey":API.key},body:JSON.stringify(Object.assign({action:action},payload||{}))});
  }catch(e){return {ok:false,error:"network",status:0};}
  var j=null;try{j=await res.json();}catch(e){}
  if(!j||typeof j!=="object")j={ok:false,error:"bad_response"};
  j.status=res.status;
  return j;
}
var I18N = {
 "en": {
  "loading_profile": "Loading your profile...",
  "error_title": "Card Not Found",
  "error_body": "This card is not activated or has been deactivated. Contact your handyman for help.",
  "welcome_title": "Welcome to HandyCat",
  "welcome_sub": "Your handyman left this card for you. Register once to track all your service requests and reviews.",
  "label_full_name": "Full Name *",
  "ph_full_name": "John Smith",
  "label_phone": "Phone Number *",
  "ph_phone": "+1 (555) 000-0000",
  "label_email": "Email",
  "optional": "(optional)",
  "ph_email": "john@email.com",
  "label_address": "Address",
  "ph_address": "123 Main St, New York",
  "btn_get_started": "Get Started →",
  "btn_new_request": "New Request",
  "filter_all": "All Orders",
  "filter_active": "Active",
  "filter_reviews": "Reviews",
  "btn_load_more": "Load more",
  "h1_order_details": "Order Details",
  "new_order_title": "What can we help you with?",
  "new_order_sub": "Tell us what happened and what kind of help you need.",
  "section_category": "Category",
  "ph_describe_other": "Describe the type of work...",
  "section_description": "Description *",
  "ph_description": "Describe the problem in detail so your handyman can come prepared. What's broken? Where is it? Any relevant history?",
  "section_photos": "Photos",
  "tap_add_photos": "Tap to add photos",
  "photos_hint": "Up to 4 photos, 5MB each",
  "section_handyman": "Handyman",
  "btn_submit_request": "Submit Request",
  "h1_rate": "Rate Your Experience",
  "job_completed_by": "Job completed by",
  "section_your_rating": "Your Rating *",
  "section_write_review": "Write a Review",
  "ph_review": "How was the service? Was the handyman professional, on time, and did a good job?",
  "btn_submit_review": "Submit Review",
  "btn_skip_for_now": "Skip for Now",
  "toast_name_phone_required": "Please enter your name and phone number",
  "toast_something_wrong": "Something went wrong. Please try again.",
  "toast_rate_limited": "Too many requests. Please wait a bit and try again.",
  "toast_handyman_unavailable": "This handyman is no longer available. Please pick another one.",
  "toast_connection_error": "Connection error. Please try again.",
  "toast_welcome": "Welcome to HandyCat! 🎉",
  "guest": "Guest",
  "finding_handyman": "Finding a handyman...",
  "pending_assignment": "Pending assignment",
  "status_new": "New",
  "status_in_progress": "In Progress",
  "status_completed": "Completed",
  "status_cancelled": "Cancelled",
  "read_more": "READ MORE",
  "no_orders_yet": "No orders yet. Tap Send above to create one.",
  "order_not_found": "Order not found",
  "tl_label_submitted": "Request submitted",
  "tl_label_assigned": "Handyman assigned",
  "tl_label_in_progress": "In progress",
  "section_status": "Status",
  "section_your_review": "Your Review",
  "btn_mark_completed": "✓ Mark as Completed",
  "btn_leave_review": "⭐ Leave a Review",
  "toast_order_completed": "Order marked as completed ✓",
  "quick_search": "Quick Search",
  "recommended": "Recommended",
  "quick_search_meta": "Post to all available handymen — fastest response",
  "worked_before": "Worked before",
  "toast_max_photos": "Max 4 photos allowed",
  "toast_photo_too_large": "Photo too large (max 5MB)",
  "photo_added": "Photo added!",
  "photos_added": "Photos added!",
  "toast_select_category": "Please select a category",
  "toast_select_handyman": "Please choose a handyman or Quick Search",
  "toast_describe_work": "Please describe the work needed",
  "toast_uploading_photos": "Uploading photos...",
  "toast_request_posted": "Request posted! Handymen will be notified. 🔍",
  "toast_request_sent_to": "Request sent to {name}! 🛠️",
  "your_handyman_cap": "Your Handyman",
  "your_handyman_lower": "your handyman",
  "tap_star_to_rate": "Tap a star to rate",
  "toast_select_rating": "Please select a rating",
  "toast_review_thanks": "Thank you for your review! ⭐",
  "star_poor": "Poor",
  "star_fair": "Fair",
  "star_good": "Good",
  "star_very_good": "Very Good",
  "star_excellent": "Excellent!",
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
  "cat_drywall": "Drywall",
  "cat_other": "Other",
  "toast_max_photos_per_request": "Max 4 photos per request",
  "toast_uploading": "Uploading...",
  "toast_upload_failed": "Upload failed. Please try again.",
  "toast_could_not_save_photo": "Could not save photo. Please try again.",
  "looking_for_handyman": "Looking for an available handyman",
  "will_notify": "We will notify you when someone accepts",
  "demo_intro_title": "Quick Test Run",
  "demo_intro_body": "Before you start using your profile, let's do a quick test together with your handyman — place a sample request so you both see exactly how it works. This won't be saved as a real request.",
  "btn_start_demo": "Start Test Run →",
  "demo_banner": "🧪 Test Run — this won't be saved as a real request",
  "toast_demo_complete": "🎉 That's exactly how it works! Here's your real profile."
 },
 "uk": {
  "loading_profile": "Завантаження вашого профілю...",
  "error_title": "Картку не знайдено",
  "error_body": "Ця картка не активована або була деактивована. Зверніться до свого майстра за допомогою.",
  "welcome_title": "Ласкаво просимо до HandyCat",
  "welcome_sub": "Ваш майстер залишив цю картку для вас. Зареєструйтеся один раз, щоб відстежувати всі свої заявки та відгуки.",
  "label_full_name": "Повне ім'я *",
  "ph_full_name": "Іван Петренко",
  "label_phone": "Номер телефону *",
  "ph_phone": "+380 (00) 000-0000",
  "label_email": "Email",
  "optional": "(необов'язково)",
  "ph_email": "ivan@email.com",
  "label_address": "Адреса",
  "ph_address": "вул. Головна 123, Київ",
  "btn_get_started": "Почати →",
  "btn_new_request": "Нова заявка",
  "filter_all": "Усі заявки",
  "filter_active": "Активні",
  "filter_reviews": "Відгуки",
  "btn_load_more": "Показати ще",
  "h1_order_details": "Деталі заявки",
  "new_order_title": "Чим ми можемо допомогти?",
  "new_order_sub": "Розкажіть, що сталося і яка допомога вам потрібна.",
  "section_category": "Категорія",
  "ph_describe_other": "Опишіть тип робіт...",
  "section_description": "Опис *",
  "ph_description": "Детально опишіть проблему, щоб майстер міг підготуватися. Що зламано? Де саме? Чи була відповідна історія?",
  "section_photos": "Фото",
  "tap_add_photos": "Натисніть, щоб додати фото",
  "photos_hint": "До 4 фото, до 5 МБ кожне",
  "section_handyman": "Майстер",
  "btn_submit_request": "Надіслати заявку",
  "h1_rate": "Оцініть якість роботи",
  "job_completed_by": "Роботу виконав(ла)",
  "section_your_rating": "Ваша оцінка *",
  "section_write_review": "Написати відгук",
  "ph_review": "Як пройшло обслуговування? Чи був майстер професійним, пунктуальним і чи добре виконав роботу?",
  "btn_submit_review": "Надіслати відгук",
  "btn_skip_for_now": "Пропустити",
  "toast_name_phone_required": "Будь ласка, введіть ім'я та номер телефону",
  "toast_something_wrong": "Щось пішло не так. Спробуйте ще раз.",
  "toast_rate_limited": "Забагато запитів. Зачекайте трохи й спробуйте ще раз.",
  "toast_handyman_unavailable": "Цей майстер більше недоступний. Оберіть іншого.",
  "toast_connection_error": "Помилка з'єднання. Спробуйте ще раз.",
  "toast_welcome": "Ласкаво просимо до HandyCat! 🎉",
  "guest": "Гість",
  "finding_handyman": "Пошук майстра...",
  "pending_assignment": "Очікує призначення",
  "status_new": "Нова",
  "status_in_progress": "В роботі",
  "status_completed": "Виконано",
  "status_cancelled": "Скасовано",
  "read_more": "ЧИТАТИ ДАЛІ",
  "no_orders_yet": "Поки що немає заявок. Натисніть кнопку вище, щоб створити нову.",
  "order_not_found": "Заявку не знайдено",
  "tl_label_submitted": "Заявку надіслано",
  "tl_label_assigned": "Майстра призначено",
  "tl_label_in_progress": "В процесі",
  "section_status": "Статус",
  "section_your_review": "Ваш відгук",
  "btn_mark_completed": "✓ Позначити як виконано",
  "btn_leave_review": "⭐ Залишити відгук",
  "toast_order_completed": "Заявку позначено як виконану ✓",
  "quick_search": "Швидкий пошук",
  "recommended": "Рекомендовано",
  "quick_search_meta": "Опублікувати для всіх доступних майстрів — найшвидша відповідь",
  "worked_before": "Вже працювали",
  "toast_max_photos": "Максимум 4 фото",
  "toast_photo_too_large": "Фото завелике (макс. 5 МБ)",
  "photo_added": "Фото додано!",
  "photos_added": "Фото додано!",
  "toast_select_category": "Будь ласка, оберіть категорію",
  "toast_select_handyman": "Будь ласка, оберіть майстра або швидкий пошук",
  "toast_describe_work": "Будь ласка, опишіть потрібну роботу",
  "toast_uploading_photos": "Завантаження фото...",
  "toast_request_posted": "Заявку опубліковано! Майстрів буде повідомлено. 🔍",
  "toast_request_sent_to": "Заявку надіслано {name}! 🛠️",
  "your_handyman_cap": "Ваш майстер",
  "your_handyman_lower": "вашого майстра",
  "tap_star_to_rate": "Торкніться зірки, щоб оцінити",
  "toast_select_rating": "Будь ласка, оберіть оцінку",
  "toast_review_thanks": "Дякуємо за ваш відгук! ⭐",
  "star_poor": "Погано",
  "star_fair": "Задовільно",
  "star_good": "Добре",
  "star_very_good": "Дуже добре",
  "star_excellent": "Відмінно!",
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
  "cat_drywall": "Гіпсокартон",
  "cat_other": "Інше",
  "toast_max_photos_per_request": "Максимум 4 фото на заявку",
  "toast_uploading": "Завантаження...",
  "toast_upload_failed": "Не вдалося завантажити. Спробуйте ще раз.",
  "toast_could_not_save_photo": "Не вдалося зберегти фото. Спробуйте ще раз.",
  "looking_for_handyman": "Пошук доступного майстра",
  "will_notify": "Ми повідомимо вас, коли хтось відгукнеться",
  "demo_intro_title": "Швидкий тест",
  "demo_intro_body": "Перш ніж ви почнете користуватися профілем, давайте разом з вашим майстром зробимо тестову заявку — щоб ви обидва побачили, як це працює. Це не збережеться як справжня заявка.",
  "btn_start_demo": "Почати тест →",
  "demo_banner": "🧪 Тестовий режим — це не збережеться як справжня заявка",
  "toast_demo_complete": "🎉 Отак саме це і працює! Ось ваш справжній профіль."
 },
 "es": {
  "loading_profile": "Cargando tu perfil...",
  "error_title": "Tarjeta no encontrada",
  "error_body": "Esta tarjeta no está activada o ha sido desactivada. Contacta a tu técnico para obtener ayuda.",
  "welcome_title": "Bienvenido a HandyCat",
  "welcome_sub": "Tu técnico dejó esta tarjeta para ti. Regístrate una vez para hacer seguimiento de todas tus solicitudes y reseñas.",
  "label_full_name": "Nombre completo *",
  "ph_full_name": "Juan Pérez",
  "label_phone": "Número de teléfono *",
  "ph_phone": "+1 (555) 000-0000",
  "label_email": "Correo electrónico",
  "optional": "(opcional)",
  "ph_email": "juan@email.com",
  "label_address": "Dirección",
  "ph_address": "Calle Principal 123, Madrid",
  "btn_get_started": "Comenzar →",
  "btn_new_request": "Nueva solicitud",
  "filter_all": "Todas las solicitudes",
  "filter_active": "Activas",
  "filter_reviews": "Reseñas",
  "btn_load_more": "Cargar más",
  "h1_order_details": "Detalles de la solicitud",
  "new_order_title": "¿En qué podemos ayudarte?",
  "new_order_sub": "Cuéntanos qué pasó y qué tipo de ayuda necesitas.",
  "section_category": "Categoría",
  "ph_describe_other": "Describe el tipo de trabajo...",
  "section_description": "Descripción *",
  "ph_description": "Describe el problema en detalle para que tu técnico pueda venir preparado. ¿Qué está roto? ¿Dónde está? ¿Algún antecedente relevante?",
  "section_photos": "Fotos",
  "tap_add_photos": "Toca para añadir fotos",
  "photos_hint": "Hasta 4 fotos, 5 MB cada una",
  "section_handyman": "Técnico",
  "btn_submit_request": "Enviar solicitud",
  "h1_rate": "Califica tu experiencia",
  "job_completed_by": "Trabajo realizado por",
  "section_your_rating": "Tu calificación *",
  "section_write_review": "Escribir una reseña",
  "ph_review": "¿Cómo fue el servicio? ¿El técnico fue profesional, puntual e hizo un buen trabajo?",
  "btn_submit_review": "Enviar reseña",
  "btn_skip_for_now": "Omitir por ahora",
  "toast_name_phone_required": "Por favor ingresa tu nombre y número de teléfono",
  "toast_something_wrong": "Algo salió mal. Inténtalo de nuevo.",
  "toast_rate_limited": "Demasiadas solicitudes. Espera un poco e inténtalo de nuevo.",
  "toast_handyman_unavailable": "Este técnico ya no está disponible. Elige otro.",
  "toast_connection_error": "Error de conexión. Inténtalo de nuevo.",
  "toast_welcome": "¡Bienvenido a HandyCat! 🎉",
  "guest": "Invitado",
  "finding_handyman": "Buscando un técnico...",
  "pending_assignment": "Asignación pendiente",
  "status_new": "Nueva",
  "status_in_progress": "En progreso",
  "status_completed": "Completada",
  "status_cancelled": "Cancelada",
  "read_more": "LEER MÁS",
  "no_orders_yet": "Aún no hay solicitudes. Toca el botón de arriba para crear una.",
  "order_not_found": "Solicitud no encontrada",
  "tl_label_submitted": "Solicitud enviada",
  "tl_label_assigned": "Técnico asignado",
  "tl_label_in_progress": "En progreso",
  "section_status": "Estado",
  "section_your_review": "Tu reseña",
  "btn_mark_completed": "✓ Marcar como completado",
  "btn_leave_review": "⭐ Dejar una reseña",
  "toast_order_completed": "Solicitud marcada como completada ✓",
  "quick_search": "Búsqueda rápida",
  "recommended": "Recomendado",
  "quick_search_meta": "Publicar a todos los técnicos disponibles — respuesta más rápida",
  "worked_before": "Trabajó antes",
  "toast_max_photos": "Máximo 4 fotos permitidas",
  "toast_photo_too_large": "Foto demasiado grande (máx. 5 MB)",
  "photo_added": "¡Foto añadida!",
  "photos_added": "¡Fotos añadidas!",
  "toast_select_category": "Por favor selecciona una categoría",
  "toast_select_handyman": "Por favor elige un técnico o búsqueda rápida",
  "toast_describe_work": "Por favor describe el trabajo necesario",
  "toast_uploading_photos": "Subiendo fotos...",
  "toast_request_posted": "¡Solicitud publicada! Se notificará a los técnicos. 🔍",
  "toast_request_sent_to": "¡Solicitud enviada a {name}! 🛠️",
  "your_handyman_cap": "Tu técnico",
  "your_handyman_lower": "tu técnico",
  "tap_star_to_rate": "Toca una estrella para calificar",
  "toast_select_rating": "Por favor selecciona una calificación",
  "toast_review_thanks": "¡Gracias por tu reseña! ⭐",
  "star_poor": "Malo",
  "star_fair": "Regular",
  "star_good": "Bueno",
  "star_very_good": "Muy bueno",
  "star_excellent": "¡Excelente!",
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
  "cat_drywall": "Tabiquería",
  "cat_other": "Otro",
  "toast_max_photos_per_request": "Máximo 4 fotos por solicitud",
  "toast_uploading": "Subiendo...",
  "toast_upload_failed": "Error al subir. Inténtalo de nuevo.",
  "toast_could_not_save_photo": "No se pudo guardar la foto. Inténtalo de nuevo.",
  "looking_for_handyman": "Buscando un técnico disponible",
  "will_notify": "Te avisaremos cuando alguien acepte",
  "demo_intro_title": "Prueba rápida",
  "demo_intro_body": "Antes de usar tu perfil, hagamos una prueba rápida junto a tu técnico — crea una solicitud de ejemplo para ver exactamente cómo funciona. Esto no se guardará como una solicitud real.",
  "btn_start_demo": "Iniciar prueba →",
  "demo_banner": "🧪 Prueba — esto no se guardará como una solicitud real",
  "toast_demo_complete": "🎉 ¡Exacto, así funciona! Aquí está tu perfil real."
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

var CAT_ICONS = {
  plumbing:"🔧", electrical:"⚡", painting:"🖌️", hvac:"❄️", carpentry:"🪚",
  flooring:"🏠", cleaning:"🧹", appliances:"🔌", tiling:"🔲", landscaping:"🌿",
  moving:"📦", drywall:"🏗️", other:"✏️"
};
var CAT_ORDER = ["plumbing","electrical","painting","hvac","carpentry","flooring","cleaning","appliances","tiling","landscaping","moving","drywall","other"];
function getCats(){
  return CAT_ORDER.map(function(id){ return {id:id, icon:CAT_ICONS[id], label:t("cat_"+id)}; });
}
// Categories are stored on orders as the canonical English label (unchanged, so
// admin.html/company.html keep reading the same value). This maps that stored
// English label back to a localized display string; free-text "Other" categories
// pass through unchanged since there's nothing to translate.
var EN_LABEL_TO_CAT_ID = {};
CAT_ORDER.forEach(function(id){ EN_LABEL_TO_CAT_ID[I18N.en["cat_"+id]] = id; });
function displayCategory(label){
  var id = EN_LABEL_TO_CAT_ID[label];
  return id ? t("cat_"+id) : (label || "");
}

function setLang(lang){
  LANG = lang;
  localStorage.setItem("hc_lang", lang);
  applyStaticTranslations();
  renderLangSwitcher();
  // Re-render whatever dynamic content is currently on screen so it picks up the new language
  if (typeof S !== "undefined" && S.client) {
    if (document.getElementById("s-new-order").classList.contains("active")) showNewOrder();
    else if (document.getElementById("s-order-detail").classList.contains("active") && S.currentOrderId) showOrderDetail(S.currentOrderId);
    else if (document.getElementById("s-rate").classList.contains("active") && S.ratingOrderId) showRate(S.ratingOrderId);
    else renderOrderFeed(S._curOrderFilter||"all");
  } else if (typeof S !== "undefined" && S.handyman) {
    showRegister();
  }
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

function applyStaticTranslations(){
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
}


// CATS is now computed live from getCats() so labels follow the current language;
// kept as a var (not const) for compatibility with existing references below.
var CATS=getCats();
function STAR_LABELS(){ return ["",t("star_poor"),t("star_fair"),t("star_good"),t("star_very_good"),t("star_excellent")]; }

var S={
  token:null,card:null,client:null,handyman:null,
  orders:[],allHM:[],hmMap:{},
  selCat:null,selHMId:null,selStar:0,
  ratingOrderId:null,photoFiles:[],
  currentOrderId:null
};

// -- row helpers (the API returns database rows; the page works with camelCase) --
function toCamel(s){return s.replace(/_([a-z0-9])/g,function(_,c){return c.toUpperCase();});}
function rowToCamel(row){if(!row)return null;var out={};Object.keys(row).forEach(function(k){out[toCamel(k)]=row[k];});return out;}
function rowsToCamel(a){return (a||[]).map(rowToCamel);}
function sv(v){return v==null?"":String(v);}
function esc(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");}
function safeUrl(u){u=String(u||"");return /^https?:\/\//i.test(u)?u:"";}
function nv(v){return Number(v||0);}
function bv(v){return!!v;}
function av(arr){return arr||[];}

// ── STORAGE ───────────────────────────────────────────────────
// The server checks the file (real image type by content, <= 5 MB), stores it in a PRIVATE bucket and returns
// a path; orders refer to that path and the server hands out short-lived links when it shows them.
async function uploadPhoto(file) {
  try {
    var fd = new FormData(); fd.append("token", S.token); fd.append("file", file);
    var res = await fetch(API.url, {method:"POST", headers:{"Authorization":"Bearer "+API.key, "apikey":API.key}, body: fd});
    var j = await res.json();
    return j && j.ok ? j.path : null;
  } catch(e) { return null; }
}

async function handleDetailPhotos(input,orderId){
  var files=Array.from(input.files);
  var order=S.orders.find(function(o){return o.id===orderId;});
  if(!order)return;
  var remaining=4-(order.photos||[]).length;
  files=files.slice(0,Math.max(0,remaining));
  if(!files.length){toast(t("toast_max_photos_per_request"));input.value="";return;}
  toast(t("toast_uploading"));
  var paths=[];
  for(var i=0;i<files.length;i++){
    var file=files[i];
    if(file.size>5*1024*1024)continue;
    var p=await uploadPhoto(file);
    if(p)paths.push(p);
  }
  if(!paths.length){toast(t("toast_upload_failed"));input.value="";return;}
  var r=await api("add-photos",{token:S.token,order_id:orderId,photos:paths});
  if(r.ok&&r.order){
    var idx=S.orders.findIndex(function(o){return o.id===orderId;});
    if(idx>=0)S.orders[idx]=rowToCamel(r.order);
    toast(paths.length>1?t("photos_added"):t("photo_added"));
    showOrderDetail(orderId);
  } else {
    toast(t("toast_could_not_save_photo"));
  }
  input.value="";
}

// ── UI HELPERS ────────────────────────────────────────────────
function show(id){document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("active");});document.getElementById(id).classList.add("active");window.scrollTo(0,0);}
function toast(m){var e=document.getElementById("toast");e.textContent=m;e.classList.add("show");setTimeout(function(){e.classList.remove("show");},3000);}
function ini(n){return esc((n||"?").split(" ").map(function(w){return w[0];}).join("").slice(0,2).toUpperCase());}
function fd(iso){if(!iso)return"";return new Date(iso).toLocaleDateString(LOCALE_MAP[LANG]||"en-US",{month:"short",day:"numeric",year:"numeric"});}
function starsHtml(n,sz){sz=sz||14;var f=Math.round(n||0);return'<span style="color:#EF9F27;font-size:'+sz+'px">'+"★".repeat(f)+'<span style="color:#ddd">'+"★".repeat(5-f)+"</span></span>";}
function setLoading(btn, on){btn.disabled=on;btn.classList.toggle("loading",on);}

// ── INIT ──────────────────────────────────────────────────────
async function init(){
  var token=window.location.pathname.split("/").pop();
  S.token=token;
  if(!(await refresh())){show("s-error");return;}
  if(!S.card.clientId){showRegister();}
  else{await loadProfile(true);}
}

// One call returns everything this card may see (card, its handyman, the client and their orders, relevant handymen).
async function refresh(){
  var r=await api("open",{token:S.token});
  if(!r.ok)return false;
  S.card=rowToCamel(r.card);
  S.handyman=rowToCamel(r.handyman);
  S.client=rowToCamel(r.client);
  S.hmAll=rowsToCamel(r.handymen);
  S.hmMap={};S.hmAll.forEach(function(h){S.hmMap[h.id]=h;});
  S.orders=rowsToCamel(r.orders).sort(function(a,b){return(b.createdAt||"").localeCompare(a.createdAt||"");});
  return true;
}
function getHM(id){return id&&id!=="any"?(S.hmMap[id]||null):null;}

// ── REGISTER ──────────────────────────────────────────────────
function showRegister(){
  var hm=S.handyman;
  if(hm){
    document.getElementById("regHMBanner").style.display="flex";
    document.getElementById("regHMAv").textContent=ini(hm.name);
    document.getElementById("regHMName").textContent=hm.name;
    document.getElementById("regHMSkills").textContent=(hm.skills||[]).slice(0,2).join(" · ")||t("section_handyman");
  }
  show("s-register");
}

async function registerClient(){
  var name=document.getElementById("regName").value.trim();
  var phone=document.getElementById("regPhone").value.trim();
  if(!name||!phone){toast(t("toast_name_phone_required"));return;}
  var btn=document.getElementById("regBtn");setLoading(btn,true);
  var r=await api("register",{token:S.token,name:name,phone:phone,email:document.getElementById("regEmail").value,address:document.getElementById("regAddress").value});
  if(!r.ok){
    setLoading(btn,false);
    if(r.error==="already_registered"&&(await refresh())){await loadProfile(true);return;}  // somebody finished it meanwhile
    toast(r.error==="rate_limited"?t("toast_rate_limited"):r.error==="network"?t("toast_connection_error"):t("toast_something_wrong"));
    return;
  }
  S.client=rowToCamel(r.client);S.card.clientId=S.client.id;
  S.orders=[];
  toast(t("toast_welcome"));
  show("s-demo-intro");
}

// ── DEMO / TEST RUN (shown once, right after first activation) ──
function startDemoOrder(){
  S.isDemoOrder=true;
  showNewOrder();
}

// ── PROFILE ───────────────────────────────────────────────────
var AV_COLORS=["#86c0ff","#ecbaec","#bcffe9","#ffd9a0","#c5b5ff"];
function avColor(seed){var h=0;for(var i=0;i<(seed||"").length;i++)h+=seed.charCodeAt(i);return AV_COLORS[h%AV_COLORS.length];}

async function loadProfile(skipRefresh){
  try {
    if(!skipRefresh&&!(await refresh())){show("s-error");return;}
    var c=S.client;
    var orders=S.orders;

    document.getElementById("profAv").textContent=ini(c.name);
    document.getElementById("profAv").style.background=avColor(c.name||c.id);
    document.getElementById("profName").textContent=c.name||t("guest");
    document.getElementById("profPhone").textContent=c.address||c.phone||"";

    var rat=Number(c.ratingAvg)||0,cnt=c.reviewCount||0;
    document.getElementById("profRatingPillText").textContent=(cnt>0?rat.toFixed(1):"—")+" ("+cnt+")";

    S._pendingOrders=orders.filter(function(o){return o.status==="completed"&&!o.clientRating&&!o.isOnboarding;});
    S._activeOrders=orders.filter(function(o){return(o.status==="new"||o.status==="in_progress")&&!o.isOnboarding;});
    S._historyOrders=orders.filter(function(o){return o.status==="completed"&&!o.isOnboarding;});
    S._allRealOrders=orders.filter(function(o){return!o.isOnboarding;});
    S._reviewedOrders=orders.filter(function(o){return o.clientRating&&!o.isOnboarding;});

    renderOrderFeed(S._curOrderFilter||"all");
    show("s-profile");
  } catch(e) {
    console.error("loadProfile error:",e);
    show("s-profile");
  }
}

function setOrderFilter(f,btn){
  S._curOrderFilter=f;
  document.querySelectorAll("#pfFilterRow .pf-filter").forEach(function(b){b.classList.remove("active");});
  btn.classList.add("active");
  renderOrderFeed(f);
}

function pfOrderCard(o,hmMap){
  var hm=hmMap[o.handymanId]||{};
  var hmName=hm.name||(o.isPublic?t("finding_handyman"):t("pending_assignment"));
  var seed=hm.name||o.id;
  var statusMap={new:["#FEF3C7","#92400E",t("status_new")],in_progress:["#DBEAFE","#1E40AF",t("status_in_progress")],completed:["#D1FAE5","#065F46",t("status_completed")]};
  var st=statusMap[o.status]||["#f5f5f5","#888",o.status];
  var desc=o.description||"";
  var descShort=desc.length>90?desc.slice(0,90)+"..":desc;
  var photo=(o.photos&&o.photos.length)?o.photos[0]:null;
  return '<div class="pf-order-card" onclick="'+(o.status==="completed"&&!o.clientRating?'showRate(\''+o.id+'\')':'showOrderDetail(\''+o.id+'\')')+'">'+
    '<div class="pf-order-top">'+
      '<div class="pf-order-av" style="background:'+avColor(seed)+'">'+ini(hmName)+'</div>'+
      '<div style="flex:1;min-width:0"><div class="pf-order-hm-name">'+esc(hmName)+'</div>'+
      (hm.companyIds?'<div class="pf-order-hm-loc">Montana</div>':'')+'</div>'+
      '<span class="pf-status-badge" style="background:'+st[0]+';color:'+st[1]+'">'+st[2]+'</span>'+
    '</div>'+
    '<div class="pf-order-meta-row">'+
      (hm.ratingAvg?'<span class="pf-order-rating"><span class="spark">&#10022;</span>'+Number(hm.ratingAvg).toFixed(1)+' ('+(hm.reviewCount||0)+')</span>':'')+
      '<span class="pf-order-chat">&#128172; '+(o.messageCount||0)+'</span>'+
      '<span class="pf-order-date">'+fd(o.createdAt)+'</span>'+
    '</div>'+
    '<div class="pf-order-desc">'+esc(displayCategory(o.category)||"")+(desc?': '+esc(descShort):"")+(desc.length>90?' <span class="more" onclick="event.stopPropagation();showOrderDetail(\''+o.id+'\')">'+t("read_more")+'</span>':'')+'</div>'+
    (photo?'<img src="'+esc(photo)+'" class="pf-order-photo"/>':'')+
  '</div>';
}

function renderOrderFeed(filter){
  var hmMap=S.hmMap||{};
  var pendingHtml="";
  if((S._pendingOrders||[]).length){
    pendingHtml=pfOrderCard(S._pendingOrders[0],hmMap);
  }
  document.getElementById("pendingSection").innerHTML="";
  document.getElementById("activeSection").innerHTML="";

  var list;
  if(filter==="active")list=S._activeOrders||[];
  else if(filter==="reviews")list=S._reviewedOrders||[];
  else list=(S._allRealOrders||[]).slice();

  document.getElementById("pfLoadMoreBtn").style.display=list.length>10?"block":"none";

  var hl=document.getElementById("historyList");
  var shown=list.slice(0,10);
  if(!shown.length&&!pendingHtml){
    hl.innerHTML='<div class="pf-empty">'+t("no_orders_yet")+'</div>';
    return;
  }
  hl.innerHTML=pendingHtml+shown.map(function(o){return pfOrderCard(o,hmMap);}).join("");
}

function loadMoreOrders(){
  var filter=S._curOrderFilter||"all";
  var list;
  if(filter==="active")list=S._activeOrders||[];
  else if(filter==="reviews")list=S._reviewedOrders||[];
  else list=(S._allRealOrders||[]).slice();
  var hl=document.getElementById("historyList");
  var currentCount=hl.querySelectorAll(".pf-order-card").length;
  var nextBatch=list.slice(currentCount,currentCount+10);
  hl.insertAdjacentHTML("beforeend",nextBatch.map(function(o){return pfOrderCard(o,S.hmMap);}).join(""));
  if(currentCount+nextBatch.length>=list.length)document.getElementById("pfLoadMoreBtn").style.display="none";
}

function showProfile(){show("s-profile");}

// ── ORDER DETAIL ──────────────────────────────────────────────
async function showOrderDetail(orderId){
  S.currentOrderId=orderId;
  show("s-order-detail");
  var content=document.getElementById("orderDetailContent");
  content.innerHTML='<div style="padding:60px;text-align:center"><div class="spinner" style="margin:0 auto"></div></div>';
  var order=S.orders.find(function(o){return o.id===orderId;});
  if(!order){content.innerHTML='<div style="padding:24px;text-align:center;color:#aaa">'+t("order_not_found")+'</div>';return;}
  var hm=getHM(order.handymanId);
  var statusMap={new:t("status_new"),in_progress:t("status_in_progress"),completed:t("status_completed"),cancelled:t("status_cancelled")};
  var badgeMap={new:"b-new",in_progress:"b-progress",completed:"b-done",cancelled:"b-done"};
  var tl=[
    {label:t("tl_label_submitted"),done:true},
    {label:t("tl_label_assigned"),done:!!(hm||!order.isPublic)},
    {label:t("tl_label_in_progress"),done:order.status==="in_progress"||order.status==="completed"},
    {label:t("status_completed"),done:order.status==="completed"}
  ];
  var canAddPhotos=(order.status==="new"||order.status==="in_progress");
  var photosHtml='<div class="detail-section" style="margin:0 12px 10px">'+
      '<div class="section-title">Photos</div>'+
      '<div class="photo-gallery" id="detailPhotoGallery">'+
        (order.photos&&order.photos.length?order.photos.map(safeUrl).filter(Boolean).map(function(url){return'<img class="gallery-img" src="'+esc(url)+'" data-url="'+esc(url)+'" onclick="window.open(this.dataset.url,\'_blank\',\'noopener\')">';}).join(""):'')+
        (canAddPhotos?'<div class="photo-add-tile" onclick="document.getElementById(\'detailPhotoInput\').click()"><div style="font-size:22px">+</div><div style="font-size:11px">Add</div></div>':'')+
      '</div>'+
      (canAddPhotos?'<input type="file" id="detailPhotoInput" accept="image/*" multiple style="display:none" onchange="handleDetailPhotos(this,\''+orderId+'\')"/>':'')+
    '</div>';
  if(!order.photos||!order.photos.length){
    if(!canAddPhotos)photosHtml="";
  }
  var reviewHtml="";
  if(order.clientRating){
    reviewHtml='<div class="detail-section" style="margin:0 12px 10px">'+
      '<div class="section-title">'+t("section_your_review")+'</div>'+
      '<div>'+starsHtml(order.clientRating,18)+'</div>'+
      (order.clientReview?'<div style="font-size:14px;color:#555;margin-top:8px;line-height:1.5">'+esc(order.clientReview)+'</div>':"")+
    '</div>';
  }
  var actionHtml="";
  if(order.status==="new"||order.status==="in_progress"){
    actionHtml='<div class="pad"><button class="btn btn-success" id="completeBtn" onclick="markComplete(\''+orderId+'\')">'+
      '<span class="ld"></span><span class="btn-label">'+t("btn_mark_completed")+'</span></button></div>';
  } else if(order.status==="completed"&&!order.clientRating){
    actionHtml='<div class="pad"><button class="btn btn-primary" onclick="showRate(\''+orderId+'\')">'+t("btn_leave_review")+'</button></div>';
  }
  content.innerHTML=
    '<div class="detail-section" style="margin:10px 12px">'+
      '<div class="oc-head"><span class="oc-badge '+badgeMap[order.status]+'">'+statusMap[order.status]+'</span><span class="oc-date">'+fd(order.createdAt)+'</span></div>'+
      '<div style="font-size:18px;font-weight:700;color:#111;margin:8px 0 6px">'+esc(displayCategory(order.category))+'</div>'+
      (order.description?'<div style="font-size:14px;color:#555;line-height:1.6;margin-bottom:8px">'+esc(order.description)+'</div>':"")+
    '</div>';

  if(hm){
    content.innerHTML+=
      '<div class="detail-section" style="margin:0 12px 10px">'+
        '<div class="section-title">'+t("section_handyman")+'</div>'+
        '<div style="display:flex;align-items:center;gap:12px">'+
          '<div class="hm-av">'+ini(hm.name)+'</div>'+
          '<div>'+
            '<div style="font-size:15px;font-weight:600;color:#111">'+esc(hm.name)+'</div>'+
            '<div style="font-size:13px;color:#888;margin-top:2px">'+esc((hm.skills||[]).slice(0,2).join(" · "))+'</div>'+
            (hm.ratingAvg?'<div>'+starsHtml(hm.ratingAvg,13)+' <span style="font-size:12px;color:#888">'+Number(hm.ratingAvg).toFixed(1)+' ('+(hm.reviewCount||0)+' reviews)</span></div>':"")+
          '</div>'+
        '</div>'+
      '</div>';
  } else if(order.isPublic){
    content.innerHTML+=
      '<div class="detail-section" style="margin:0 12px 10px;text-align:center">'+
        '<div style="font-size:28px;margin-bottom:6px">&#x1F50D;</div>'+
        '<div style="font-size:14px;color:#8B5CF6;font-weight:500">'+t("looking_for_handyman")+'</div>'+
        '<div style="font-size:12px;color:#aaa;margin-top:4px">'+t("will_notify")+'</div>'+
      '</div>';
  }

  content.innerHTML+=
    '<div class="detail-section" style="margin:0 12px 10px">'+
      '<div class="section-title">'+t("section_status")+'</div>'+
      '<div class="status-timeline">'+
        tl.map(function(t,i){
          var isActive=!t.done&&(i===0||(i>0&&tl[i-1]&&tl[i-1].done));
          return '<div class="tl-item">'+
            '<div class="tl-dot'+(t.done?" done":isActive?" active":"")+'"></div>'+
            '<div class="tl-label'+(t.done?" done":"")+'">'+t.label+'</div>'+
          '</div>';
        }).join("")+
      '</div>'+
    '</div>';

  content.innerHTML+=photosHtml+reviewHtml+'<div style="height:10px"></div>'+actionHtml;
}

async function markComplete(orderId){
  var btn=document.getElementById("completeBtn");
  if(btn)setLoading(btn,true);
  var r=await api("complete-order",{token:S.token,order_id:orderId});
  if(r.ok&&r.order){
    var i=S.orders.findIndex(function(o){return o.id===orderId;});
    if(i>=0)S.orders[i]=rowToCamel(r.order);
    toast(t("toast_order_completed"));
    showRate(orderId);
  } else {
    if(btn)setLoading(btn,false);
    toast(t("toast_something_wrong"));
  }
}

// ── NEW ORDER ─────────────────────────────────────────────────
async function showNewOrder(){
  S.selCat=null;S.selHMId=null;S.photoFiles=[];
  document.getElementById("ordDesc").value="";
  document.getElementById("otherCat").value="";
  document.getElementById("photoPreviews").innerHTML="";
  document.getElementById("otherWrap").style.display="none";
  document.getElementById("newOrderBackBtn").style.display=S.isDemoOrder?"none":"";
  document.getElementById("demoBanner").style.display=S.isDemoOrder?"block":"none";
  // Build categories (recomputed each time so labels follow the current language)
  CATS=getCats();
  var grid=document.getElementById("catGrid");
  grid.innerHTML=CATS.map(function(c){
    return'<button class="cat-btn" id="cat-'+c.id+'" onclick="selCat(\''+c.id+'\')">'+
      '<span class="cat-icon">'+c.icon+'</span>'+c.label+'</button>';
  }).join("");
  // Build HM picker with loading
  var list=document.getElementById("hmPickerList");
  list.innerHTML='<div style="text-align:center;padding:16px;color:#aaa"><div class="spinner" style="margin:0 auto 8px;width:24px;height:24px;border-width:2px"></div>Loading...</div>';
  var btn2=document.getElementById("submitOrderBtn");setLoading(btn2,false);
  show("s-new-order");
  // Handymen: the ones this client already worked with first, then the card company's active ones
  // (all of them arrived with the card, nothing more is fetched).
  var hmIds={};
  S.orders.forEach(function(o){if(o.handymanId&&o.handymanId!=="any")hmIds[o.handymanId]=true;});
  var allHM=[];var seen={};
  Object.keys(hmIds).forEach(function(id){
    var h=getHM(id);
    if(h&&h.status!=="inactive"&&!seen[id]){seen[id]=true;allHM.push(Object.assign({fromHistory:true},h));}
  });
  (S.hmAll||[]).forEach(function(h){
    if(S.card.companyId&&h.companyId===S.card.companyId&&h.status!=="inactive"&&!seen[h.id]){seen[h.id]=true;allHM.push(h);}
  });
  S.allHM=allHM;
  renderHMPicker(allHM);
}

function selCat(id){
  S.selCat=id;
  document.querySelectorAll(".cat-btn").forEach(function(b){b.classList.remove("sel");});
  document.getElementById("cat-"+id).classList.add("sel");
  document.getElementById("otherWrap").style.display=id==="other"?"block":"none";
}

function renderHMPicker(hms){
  var list=document.getElementById("hmPickerList");
  var html='<div class="hm-opt quick'+(S.selHMId==="any"?" sel":"")+'" onclick="selHM(\'any\')" id="hm-any">'+
    '<div class="hm-av purple">🔍</div>'+
    '<div class="hm-info">'+
      '<div class="hm-name">'+t("quick_search")+' <span class="pill pill-purple">'+t("recommended")+'</span></div>'+
      '<div class="hm-meta">'+t("quick_search_meta")+'</div>'+
    '</div>'+
  '</div>';
  if(hms.length){
    html+=hms.map(function(h){
      var badge=h.fromHistory?'<span class="pill pill-green">'+t("worked_before")+'</span>':"";
      return'<div class="hm-opt'+(S.selHMId===h.id?" sel":"")+'" id="hm-'+h.id+'" onclick="selHM(\''+h.id+'\')">'+
        '<div class="hm-av">'+ini(h.name)+'</div>'+
        '<div class="hm-info">'+
          '<div class="hm-name">'+esc(h.name)+badge+'</div>'+
          '<div class="hm-meta">'+esc((h.skills||[]).slice(0,2).join(", "))+'</div>'+
          (h.ratingAvg?'<div class="hm-rating">'+starsHtml(h.ratingAvg,11)+' '+Number(h.ratingAvg).toFixed(1)+'</div>':"")+
        '</div>'+
      '</div>';
    }).join("");
  }
  list.innerHTML=html;
}

function selHM(id){
  S.selHMId=id;
  document.querySelectorAll(".hm-opt").forEach(function(el){el.classList.remove("sel");});
  var el=document.getElementById("hm-"+id)||document.getElementById("hm-any");
  if(el)el.classList.add("sel");
}

// Photo handling
function handlePhotos(input){
  var files=Array.from(input.files);
  var remaining=4-S.photoFiles.length;
  files=files.slice(0,remaining);
  if(!files.length){toast(t("toast_max_photos"));return;}
  files.forEach(function(file){
    if(file.size>5*1024*1024){toast(t("toast_photo_too_large"));return;}
    S.photoFiles.push(file);
    var reader=new FileReader();
    reader.onload=function(e){
      var idx=S.photoFiles.indexOf(file);
      var prev=document.getElementById("photoPreviews");
      var div=document.createElement("div");div.className="photo-preview";div.id="prev-"+idx;
      div.innerHTML='<img src="'+e.target.result+'"/><button class="remove-photo" onclick="removePhoto('+idx+')">✕</button>';
      prev.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
  input.value="";
}

function removePhoto(idx){
  S.photoFiles.splice(idx,1);
  var prev=document.getElementById("prev-"+idx);
  if(prev)prev.remove();
  // Renumber remaining
  var previews=document.querySelectorAll(".photo-preview");
  previews.forEach(function(el,i){el.id="prev-"+i;el.querySelector(".remove-photo").setAttribute("onclick","removePhoto("+i+")");});
}

async function submitOrder(){
  if(!S.selCat){toast(t("toast_select_category"));return;}
  if(!S.selHMId){toast(t("toast_select_handyman"));return;}
  var desc=document.getElementById("ordDesc").value.trim();
  if(!desc){toast(t("toast_describe_work"));return;}
  // Store the canonical English category label regardless of UI language, so
  // admin.html/company.html and displayCategory()'s reverse lookup stay consistent.
  var catLabel=S.selCat==="other"?(document.getElementById("otherCat").value.trim()||I18N.en.cat_other):(I18N.en["cat_"+S.selCat]||I18N.en.cat_other);
  var btn=document.getElementById("submitOrderBtn");setLoading(btn,true);
  var photoPaths=[];
  if(S.photoFiles.length){
    toast(t("toast_uploading_photos"));
    for(var i=0;i<S.photoFiles.length;i++){var p=await uploadPhoto(S.photoFiles[i]);if(p)photoPaths.push(p);}
  }
  var isDemo=!!S.isDemoOrder;
  // The server derives client, company, status and counters; it only takes what the person chose.
  var r=await api("new-order",{token:S.token,category:catLabel,description:desc,handyman_id:S.selHMId,demo:isDemo,photos:photoPaths});
  if(!r.ok){
    setLoading(btn,false);
    toast(r.error==="handyman_unavailable"?t("toast_handyman_unavailable"):r.error==="rate_limited"?t("toast_rate_limited"):t("toast_something_wrong"));
    return;
  }
  var isPublic=S.selHMId==="any";
  var hm=(S.allHM||[]).find(function(h){return h.id===S.selHMId;})||getHM(S.selHMId);
  if(isDemo){
    S.isDemoOrder=false;
    toast(t("toast_demo_complete"));
  } else {
    toast(isPublic?t("toast_request_posted"):tf("toast_request_sent_to",{name:(hm||{}).name||t("your_handyman_lower")}));
  }
  await loadProfile();
}

// ── RATE & REVIEW ─────────────────────────────────────────────
async function showRate(orderId){
  var order=S.orders.find(function(o){return o.id===orderId;});
  if(!order)return;
  S.ratingOrderId=orderId;S.selStar=0;
  var hm=getHM(order.handymanId);
  document.getElementById("rateHMName").textContent=hm?hm.name:t("your_handyman_cap");
  document.getElementById("rateOrdCat").textContent=displayCategory(order.category)||"";
  document.getElementById("reviewText").value="";
  document.querySelectorAll(".sp").forEach(function(s){s.classList.remove("lit");});
  document.getElementById("starLabel").textContent=t("tap_star_to_rate");
  // Always reset button state when opening this screen
  var btn=document.getElementById("submitReviewBtn");
  setLoading(btn,false);
  show("s-rate");
}

function setStar(n){
  S.selStar=n;
  document.querySelectorAll(".sp").forEach(function(s,i){s.classList.toggle("lit",i<n);});
  document.getElementById("starLabel").textContent=STAR_LABELS()[n];
}

async function submitReview(){
  if(!S.selStar){toast(t("toast_select_rating"));return;}
  var btn=document.getElementById("submitReviewBtn");setLoading(btn,true);
  var review=document.getElementById("reviewText").value.trim();
  var orderId=S.ratingOrderId;
  var order=S.orders.find(function(o){return o.id===orderId;});
  if(!order){setLoading(btn,false);return;}
  // The handyman's rating is recomputed on the server; the page only sends the stars and the text.
  var r=await api("review",{token:S.token,order_id:orderId,rating:S.selStar,review:review});
  if(!r.ok&&r.error!=="already_reviewed"){
    setLoading(btn,false);
    toast(r.error==="rate_limited"?t("toast_rate_limited"):t("toast_something_wrong"));
    return;
  }
  toast(t("toast_review_thanks"));
  await loadProfile();
}

applyStaticTranslations();
renderLangSwitcher();
init().catch(function(e){console.error(e);show("s-error");});
