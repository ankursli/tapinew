import { createContext, useContext, useState } from 'react';

export const translations = {
  // Navigation
  'nav.home': { en: 'Home', hi: 'होम', gu: 'હોમ' },
  'nav.about': { en: 'About', hi: 'हमारे बारे में', gu: 'ટ્રસ્ટ વિશે' },
  'nav.river': { en: 'The River', hi: 'पवित्र नदी', gu: 'પવિત્ર નદી' },
  'nav.heritage': { en: 'Heritage', hi: 'विरासत', gu: 'વારસો' },
  'nav.activities': { en: 'Activities', hi: 'गतिविधियाँ', gu: 'પ્રવૃત્તિઓ' },
  'nav.aarti': { en: 'Daily Aarti', hi: 'दैनिक आरती', gu: 'દૈનિક આરતી' },
  'nav.gallery': { en: 'Gallery', hi: 'गैलरी', gu: 'ગેલેરી' },
  'nav.events': { en: 'Events', hi: 'कार्यक्रम', gu: 'કાર્યક્રમો' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क', gu: 'સામ્પર્ક' },
  'nav.blog': { en: 'Blog', hi: 'ब्लॉग', gu: 'બ્લોગ' },
  'nav.volunteer': { en: 'Volunteer', hi: 'स्वयंसेवक', gu: 'સ્વયંસેવક' },
  'nav.bookAarti': { en: 'Book Aarti', hi: 'आरती बुक करें', gu: 'આરતી બુક કરો' },
  'nav.donate': { en: 'Donate', hi: 'दान करें', gu: 'દાન કરો' },

  // Hero Section
  'hero.heading1': { en: 'The sacred', hi: 'पवित्र', gu: 'પવિત્ર' },
  'hero.heading2': { en: 'Tapi Aarti', hi: 'तापी आरती', gu: 'તાપી આરતી' },
  'hero.heading3': { en: 'every evening.', hi: 'हर शाम।', gu: 'દર સાંજે.' },
  'hero.badge': { en: 'Every evening on the Tapi ghat, Surat', hi: 'हर शाम तापी घाट, सूरत पर', gu: 'દર સાંજે તાપી ઘાટ, સુરત પર' },
  'hero.description': { en: "As the sun sets over Surat, join thousands of devotees on the ghat for the daily aarti of Maa Tapi — lamps afloat, conches sounding, the river aglow. Book your seva or sponsor an aarti in your family's name.", hi: "जैसे ही सूरत में सूर्यास्त होता है, माँ तापी की दैनिक आरती के लिए घाट पर हजारों भक्तों के साथ जुड़ें — तैरते दीये, शंख की ध्वनि, चमकती नदी। अपनी सेवा बुक करें या अपने परिवार के नाम पर आरती प्रायोजित करें।", gu: "જેમ સુરતમાં સૂર્યાસ્ત થાય છે, તેમ માં તાપીની દૈનિક આરતી માટે ઘાટ પર હજારો ભક્તો સાથે જોડાઓ — તરતા દીવા, શંખનાદ, ચમકતી નદી. તમારી સેવા બુક કરો અથવા તમારા પરિવારના નામે આરતી પ્રાયોજિત કરો." },
  'hero.book': { en: 'Book a Tapi Aarti', hi: 'तापी आरती बुक करें', gu: 'તાપી આરતી બુક કરો' },
  'hero.donate': { en: 'Donate to the Trust', hi: 'ट्रस्ट को दान करें', gu: 'ટ્રસ્ટમાં દાન કરો' },
  'stats.heritage': { en: 'Years of Tapi heritage', hi: 'तापी विरासत के वर्ष', gu: 'તાપી વારસાના વર્ષો' },
  'stats.aartis': { en: 'Daily aartis a year', hi: 'दैनिक आरती प्रति वर्ष', gu: 'દૈનિક આરતી વર્ષમાં' },
  'stats.diyas': { en: 'Diyas floated', hi: 'तैरते दीये', gu: 'વહેતા મૂકેલા દીવા' },
  'stats.lives': { en: 'Lives served', hi: 'सेवा किए गए जीवन', gu: 'મદદ કરેલ લોકો' },

  // Trust Details / About Section
  'about.overline': { en: 'About the Trust', hi: 'ट्रस्ट के बारे में', gu: 'ટ્રસ્ટ વિશે' },
  'about.title': { en: 'A registered trust devoted to the river that made Surat.', hi: 'एक पंजीकृत ट्रस्ट जो उस नदी के लिए समर्पित है जिसने सूरत को बनाया।', gu: 'એક રજિસ્ટર્ડ ટ્રસ્ટ જે સુરત બનાવનાર નદી માટે સમર્પિત છે.' },
  'about.description': { en: 'Tapi Namastubhyam Charitable Trust preserves the sacred tradition of Tapi worship, protects the river through environmental action, and serves the community with camps, relief and daily devotion. What began as an evening aarti on the ghats has grown into a movement of gratitude and care.', hi: 'तापी नमस्तुभ्यम् चैरिटेबल ट्रस्ट तापी पूजा की पवित्र परंपरा को संरक्षित करता है, पर्यावरणीय कार्रवाई के माध्यम से नदी की रक्षा करता है, और शिविरों, राहत और दैनिक भक्ति के साथ समुदाय की सेवा करता है। घाटों पर शाम की आरती के रूप में जो शुरू हुआ था, वह कृतज्ञता और देखभाल के आंदोलन में बदल गया है।', gu: 'તાપી નમસ્તુભ્યમ્ ચેરિટેબલ ટ્રસ્ટ તાપી પૂજાની પવિત્ર પરંપરાને જાળવી રાખે છે, પર્યાવરણીય પ્રવૃત્તિ દ્વારા નદીનું રક્ષણ કરે છે, અને સેવા કેમ્પ, રાહત કાર્ય અને દૈનિક ભક્તિ દ્વારા સમુદાયની સેવા કરે છે. ઘાટ પર સાંજની આરતી તરીકે જે શરૂ થયું હતું તે આજે કૃતજ્ઞતા અને સેવાના એક આંદોલનમાં ફેરવાઈ ગયું છે.' },
  'about.point1': { en: 'Daily aarti, open to all', hi: 'दैनिक आरती, सभी के लिए खुली है', gu: 'દૈનિક આરતી, બધા માટે ખુલ્લી' },
  'about.point2': { en: 'Transparent & audited', hi: 'पारदर्शी और ऑडिट किया हुआ', gu: 'પારદર્શક અને ઓડિટ થયેલ' },
  'about.point3': { en: 'Rooted in Surat', hi: 'सूरत में स्थापित', gu: 'સુરતમાં સ્થાપિત' },
  'about.tax': { en: 'Every donation is tax-deductible & audited', hi: 'प्रत्येक दान कर-मुक्त और ऑडिट किया हुआ है', gu: 'દરેક દાન કરમુક્ત અને ઓડિટ થયેલ છે' },
  
  // Manifesto
  'manifesto.title1': { en: 'Vision', hi: 'विज़न', gu: 'વિઝન' },
  'manifesto.body1': { en: 'A clean, sacred Tapi flowing through a spiritually awakened and socially responsible Surat — where the river is revered, protected, and passed on to the next generation undimmed.', hi: 'सूरत में आध्यात्मिक रूप से जागृत और सामाजिक रूप से जिम्मेदार समुदाय से होकर बहने वाली एक स्वच्छ, पवित्र तापी नदी।', gu: 'સુરતમાં આધ્યાત્મિક રીતે જાગૃત અને સામાજિક રીતે જવાબદાર સમુદાયમાંથી વહેતી એક સ્વચ્છ, પવિત્ર તાપી નદી.' },
  'manifesto.title2': { en: 'Mission', hi: 'मिशन', gu: 'મિશન' },
  'manifesto.body2': { en: 'To preserve the living tradition of Tapi worship, unite the community through daily aarti, and serve humanity through environmental conservation and social welfare.', hi: 'तापी नदी पूजा की पवित्र परंपरा को संरक्षित और बढ़ावा देना, आध्यात्मिक गतिविधियों के माध्यम से सामुदायिक एकता को बढ़ावा देना, और पर्यावरण संरक्षण और सामाजिक कल्याण कार्यक्रमों के माध्यम से मानवता की सेवा करना।', gu: 'તાપી નદી પૂજાની પવિત્ર પરંપરાને જાળવવી અને પ્રોત્સાહન આપવું, આધ્યાત્મિક પ્રવૃત્તિ દ્વારા સામુદાયિક એકતાને પ્રોત્સાહન આપવું, અને પર્યાવરણ સંરક્ષણ અને સામાજિક કલ્યાણ કાર્યક્રમ દ્વારા માનવતાની સેવા કરવી.' },
  'manifesto.title3': { en: 'Why Tapi Matters', hi: 'तापी क्यों महत्वपूर्ण है', gu: 'તાપી શા માટે મહત્વની છે' },
  'manifesto.body3': { en: 'The Tapi is not merely water. She is Surya Putri — mother, memory, and lifeline of Surat. To honour her is to honour our roots, our ecology, and each other.', hi: 'तापी केवल जल नहीं है। वह सूर्य पुत्री हैं — सूरत की माँ, स्मृति और जीवन रेखा। उनका सम्मान करना हमारी जड़ों, हमारी पारिस्थितिकी और एक-दूसरे का सम्मान करना है।', gu: 'તાપી માત્ર પાણી નથી. તે સૂર્ય પુત્રી છે — સુરતની માતા, સ્મૃતિ અને જીવાદોરી. તેનું સન્માન કરવું એટલે આપણા મૂળ, આપણી પર્યાવરણ વ્યવસ્થા અને એકબીજાનું સન્માન કરવું.' },

  // River Story
  'story.overline': { en: 'Mythology & Spirit', hi: 'पौराणिक कथा और भावना', gu: 'પૌરાણિક કથા અને આધ્યાત્મ' },
  'story.title': { en: 'Surya Putri — the daughter of the Sun', hi: 'सूर्य पुत्री — सूर्य की पुत्री', gu: 'સૂર્ય પુત્રી — સૂર્યની પુત્રી' },
  'story.p1': { en: 'In Hindu tradition, Tapti (Tapi) is the daughter of Surya, the Sun God, and Chhaya. She is sister to Shani Dev and Yamuna — a goddess born of light to cool the earth.', hi: 'हिंदू परंपरा में, ताप्ती (तापी) सूर्य देव और छाया की पुत्री हैं। वह शनि देव और यमुना की बहन हैं — पृथ्वी को ठंडक प्रदान करने के लिए प्रकाश से जन्मी एक देवी।', gu: 'હિન્દુ પરંપરામાં, તાપ્તી (તાપી) સૂર્ય દેવ અને છાયાની પુત્રી છે. તે શનિ દેવ અને યમુનાની બહેન છે — પૃથ્વીને શીતળતા આપવા પ્રકાશમાંથી જન્મેલી દેવી.' },
  'story.p2': { en: 'The Skanda Purana and Agni Purana describe her waters as tirtha — capable of dissolving sin and granting moksha. For centuries, pilgrims have bathed at her ghats at dawn and offered lamps at dusk.', hi: 'स्कंद पुराण और अग्नि पुराण उनके जल को तीर्थ के रूप में वर्णित करते हैं — जो पापों को नष्ट करने और मोक्ष प्रदान करने में सक्षम है। सदियों से, तीर्थयात्री भोर में उनके घाटों पर स्नान करते हैं और शाम को दीपदान करते हैं।', gu: 'સ્કંદ પુરાણ અને અગ્નિ પુરાણ તેમના પાણીને તીર્થ તરીકે વર્ણવે છે — જે પાપોને નષ્ટ કરવા અને મોક્ષ આપવા માટે સક્ષમ છે. સદીઓથી, શ્રદ્ધાળુઓ સવારે તેમના ઘાટ પર સ્નાન કરે છે અને સાંજે દીપદાન કરે છે.' },
  'story.p3': { en: 'Our daily aarti keeps this ancient covenant alive: gratitude offered in flame, and a promise to protect what gives us life.', hi: 'हमारी दैनिक आरती इस प्राचीन प्रतिज्ञा को जीवित रखती है: अग्नि में अर्पित की गई कृतज्ञता, और जो हमें जीवन देता है उसकी रक्षा करने का वादा।', gu: 'આપણી દૈનિક આરતી આ પ્રાચીન નિયમને જીવંત રાખે છે: અગ્નિમાં અર્પણ કરેલી કૃતજ્ઞતા અને જે આપણને જીવન આપે છે તેનું રક્ષણ કરવાનું વચન.' },
  'story.quote': { en: '“Her waters purify sins and grant moksha.”', hi: '“उनका जल पापों को शुद्ध करता है और मोक्ष प्रदान करता है।”', gu: '“તેમનું જળ પાપો પવિત્ર કરે છે અને મોક્ષ આપે છે.”' },
  'story.quoteAuthor': { en: '— Skanda Purana & Agni Purana', hi: '— स्कंद पुराण और अग्नि पुराण', gu: '— સ્કંદ પુરાણ અને અગ્નિ પુરાણ' },

  // Heritage
  'heritage.overline': { en: 'Surat • Suryapur', hi: 'सूरत • सूर्यपुर', gu: 'સુરત • સૂર્યપુર' },
  'heritage.title': { en: "The City of the Sun on the river's bend", hi: 'नदी के मोड़ पर सूर्य का शहर', gu: 'નદીના વળાંક પર સૂર્યનું શહેર' },
  'heritage.body': { en: "Set on the banks of the Tapi, Surat has thrived for over 2,000 years. Once called Suryapur, it grew into one of India's greatest ports of the Mughal age — a meeting place of merchants, faiths and cultures, all drawn to the river's mouth.", hi: 'तापी के तट पर स्थित, सूरत 2,000 से अधिक वर्षों से समृद्ध हुआ है। कभी सूर्यपुर कहलाने वाला यह शहर मुगल काल के भारत के सबसे बड़े बंदरगाहों में से एक बन गया — व्यापारियों, आस्थाओं और संस्कृतियों का एक मिलन स्थल, जो सभी नदी के मुहाने की ओर आकर्षित हुए।', gu: 'તાપી નદીના કિનારે વસેલું સુરત ૨૦૦૦ થી વધુ વર્ષોથી સમૃદ્ધ થયું છે. એક સમયે સૂર્યપુર કહેવાતું આ શહેર મુઘલ યુગમાં ભારતના સૌથી મોટા બંદરોમાંનું એક બન્યું — વેપારીઓ, વિવિધ ધર્મો અને સંસ્કૃતિઓનું મિલન સ્થળ, જે નદી તરફ આકર્ષાયા હતા.' },
  'heritage.caption': { en: 'The Tapi, threading through Suryapur', hi: 'तापी, सूर्यपुर से गुजरती हुई', gu: 'તાપી, સૂર્યપુર વચ્ચેથી વહેતી' },
  'heritage.badge': { en: 'Heritage & History', hi: 'विरासत और इतिहास', gu: 'વારસો અને ઇતિહાસ' },
  'heritage.bannerTitle': { en: "Preserving Surat's Sacred Legacy", hi: 'सूरत की पवित्र विरासत का संरक्षण', gu: 'સુરતના પવિત્ર વારસાનું જતન' },
  'heritage.bannerText': { en: "For over two millennia, the Tapi has nourished Surat's culture, commerce, and spiritual heart.", hi: 'दो सहस्राब्दियों से अधिक समय से, तापी ने सूरत की संस्कृति, वाणिज्य और आध्यात्मिक हृदय का पोषण किया है।', gu: 'બે હજારથી વધુ વર્ષોથી, તાપીએ સુરતની સંસ્કૃતિ, વાણિજ્ય અને આધ્યાત્મિક હૃદયને સમૃદ્ધ બનાવ્યું છે.' },
  'heritage.point1': { en: "One of India's oldest continuously inhabited port cities", hi: 'भारत के सबसे पुराने लगातार बसे हुए बंदरगाह शहरों में से एक', gu: 'ભારતના સૌથી જૂના સતત વસવાટ ધરાવતા બંદર શહેરોમાંનું એક' },
  'heritage.point2': { en: 'A Mughal-era gateway of global trade and diamonds', hi: 'वैश्विक व्यापार और हीरों का एक मुगल-काल का प्रवेश द्वार', gu: 'વૈશ્વિક વ્યાપાર અને હીરાનું મુઘલ સમયનું પ્રવેશદ્વાર' },
  'heritage.point3': { en: 'A confluence of communities held together by the Tapi', hi: 'तापी द्वारा एक साथ बंधे समुदायों का संगम', gu: 'તાપી દ્વારા એકસાથે જોડાયેલા સમુદાયોનો સંગમ' },

  // Timeline
  'timeline.overline': { en: 'A river becomes a movement', hi: 'एक नदी एक आंदोलन बनती है', gu: 'એક નદી આંદોલન બને છે' },
  'timeline.title': { en: 'From Tapi to Surat to the Trust', hi: 'तापी से सूरत से ट्रस्ट तक', gu: 'તાપીથી સુરતથી ટ્રસ્ટ સુધી' },
  'timeline.era1': { en: 'Antiquity', hi: 'प्राचीन काल', gu: 'પ્રાચીન કાળ' },
  'timeline.title1': { en: 'The river of light', hi: 'प्रकाश की नदी', gu: 'પ્રકાશની નદી' },
  'timeline.text1': { en: 'Tapti descends as Surya Putri. Sages settle her banks; her ghats become tirtha for pilgrims across Bharat.', hi: 'ताप्ती सूर्य पुत्री के रूप में अवतरित होती हैं। साधु-संत उनके तटों पर बसते हैं; उनके घाट पूरे भारत के तीर्थयात्रियों के लिए तीर्थ बन जाते हैं।', gu: 'તાપ્તી સૂર્ય પુત્રી તરીકે અવતરે છે. સંતો તેમના કિનારે વસે છે; તેમના ઘાટ સમગ્ર ભારતના શ્રદ્ધાળુઓ માટે તીર્થ બને છે.' },
  'timeline.era2': { en: 'c. 300 BCE', hi: 'लगभग 300 ईसा पूर्व', gu: 'આશરે ૩૦૦ ઈ.સ. પૂર્વે' },
  'timeline.title2': { en: 'Suryapur rises', hi: 'सूर्यपुर का उदय', gu: 'સૂર્યપુરનો ઉદય' },
  'timeline.text2': { en: "A settlement blossoms on the river's bend — the city that will become Surat, named for the Sun.", hi: 'नदी के मोड़ पर एक बस्ती विकसित होती है — वह शहर जो सूर्य के नाम पर सूरत बनेगा।', gu: 'નદીના વળાંક પર એક વસાહત ખીલે છે — જે સૂર્યના નામ પરથી સુરત શહેર બનશે.' },
  'timeline.era3': { en: '16th–17th c.', hi: '16वीं-17वीं शताब्दी', gu: '૧૬મી-૧૭મી સદી' },
  'timeline.title3': { en: 'Port of the world', hi: 'विश्व का बंदरगाह', gu: 'વિશ્વનું બંદર' },
  'timeline.text3': { en: 'Surat becomes a premier Mughal port; merchants, mystics and travellers gather where the Tapi meets the sea.', hi: 'सूरत एक प्रमुख मुगल बंदरगाह बनता है; व्यापारी, रहस्यवादी और यात्री वहाँ एकत्र होते हैं जहाँ तापी समुद्र से मिलती है।', gu: 'સુરત એક અગ્રણી મુઘલ બંદર બને છે; વેપારીઓ, સંતો અને પ્રવાસીઓ તાપી જ્યાં સમુદ્રને મળે છે ત્યાં એકઠા થાય છે.' },
  'timeline.era4': { en: 'Today', hi: 'आज', gu: 'આજ' },
  'timeline.title4': { en: 'A modern reverence', hi: 'एक आधुनिक श्रद्धा', gu: 'આધુનિક શ્રદ્ધા' },
  'timeline.text4': { en: 'Rapid growth strains the river. Devotion and ecology must walk together once more.', hi: 'तीव्र विकास नदी पर दबाव डालता है। भक्ति और पारिस्थितिकी को एक बार फिर साथ चलना होगा।', gu: 'ઝડપી વિકાસ નદી પર દબાણ લાવે છે. ભક્તિ અને પર્યાવરણ રક્ષણ ફરી એકવાર સાથે ચાલવા જોઈએ.' },
  'timeline.era5': { en: 'The Trust', hi: 'ट्रस्ट', gu: 'ટ્રસ્ટ' },
  'timeline.title5': { en: 'Tapi Namastubhyam is founded', hi: 'तापी नमस्तुभ्यम् की स्थापना', gu: 'તાપી નમસ્તુભ્યમ્ ની સ્થાપના' },
  'timeline.text5': { en: 'A registered charitable trust to lead the daily aarti, clean the river and serve the community — carrying the covenant forward.', hi: 'दैनिक आरती का नेतृत्व करने, नदी को साफ करने और समुदाय की सेवा करने के लिए एक पंजीकृत धर्मार्थ ट्रस्ट — प्रतिज्ञा को आगे बढ़ाते हुए।', gu: 'દૈનિક આરતી કરવા, નદી સાફ કરવા અને સમુદાયની સેવા કરવા માટે એક રજિસ્ટર્ડ ચેરિટેબલ ટ્રસ્ટ.' },

  // Serve / Activities
  'activities.title': { en: 'Community Activities', hi: 'सामुदायिक गतिविधियाँ', gu: 'સામુદાયિક પ્રવૃત્તિઓ' },
  'activities.subtitle': { en: 'Beyond spiritual worship, we actively serve our community through various social initiatives.', hi: 'आध्यात्मिक पूजा से परे, हम विभिन्न सामाजिक पहलों के माध्यम से सक्रिय रूप से अपने समुदाय की सेवा करते हैं।', gu: 'આધ્યાત્મિક પૂજા ઉપરાંત, અમે વિવિધ સામાજિક પહેલો દ્વારા સક્રિય રીતે અમારા સમુદાયની સેવા કરીએ છીએ.' },
  'activities.t1': { en: 'River Cleanliness', hi: 'नदी की स्वच्छता', gu: 'નદીની સ્વચ્છતા' },
  'activities.tx1': { en: 'Weekly cleaning drives keep the sacred Tapi and her ghats pure for worship and wildlife.', hi: 'साप्ताहिक सफाई अभियान पवित्र तापी और उसके घाटों को पूजा और वन्यजीवों के लिए शुद्ध रखते हैं।', gu: 'સાપ્તાહિક સફાઈ અભિયાન પવિત્ર તાપી અને તેના ઘાટને પૂજા અને જીવજંતુઓ માટે શુદ્ધ રાખે છે.' },
  'activities.t2': { en: 'Blood Donation Camps', hi: 'रक्तदान शिविर', gu: 'રક્તદાન કેમ્પ' },
  'activities.tx2': { en: 'Regular camps in partnership with hospitals — turning devotion into lives saved.', hi: 'अस्पतालों के साथ साझेदारी में नियमित शिविर — भक्ति को जीवन बचाने में बदलना।', gu: 'હોસ્પિટલોના સહયોગથી નિયમિત કેમ્પ — ભક્તિને લોકોના જીવન બચાવવામાં ફેરવે છે.' },
  'activities.t3': { en: 'Tree Plantation', hi: 'वृक्षारोपण', gu: 'વૃક્ષારોપણ' },
  'activities.tx3': { en: 'Native saplings planted along the riverbank and across the city to cool and heal the land.', hi: 'भूमि को ठंडा करने और ठीक करने के लिए नदी के किनारे और पूरे शहर में औषधीय पौधे लगाए गए।', gu: 'જમીનને ઠંડક અને હરિયાળી આપવા નદી કિનારે અને સમગ્ર શહેરમાં વૃક્ષો વાવવામાં આવ્યા.' },
  'activities.t4': { en: 'Disaster Relief', hi: 'आपदा राहत', gu: 'આપત્તિ રાહત' },
  'activities.tx4': { en: 'Rapid, on-ground response with food, shelter and aid when floods and calamity strike.', hi: 'बाढ़ और आपदा आने पर भोजन, आश्रय और सहायता के साथ तत्काल, जमीनी स्तर पर प्रतिक्रिया।', gu: 'પૂર અને આપત્તિ સમયે ભોજન, આશ્રય અને મદદ સાથે તાત્કાલિક રાહત કામગીરી.' },

  // Daily Aarti
  'daily.overline': { en: 'Every evening on the ghat', hi: 'हर शाम घाट पर', gu: 'દર સાંજે ઘાટ પર' },
  'daily.title': { en: 'The Daily Tapi Aarti', hi: 'दैनिक तापी आरती', gu: 'દૈનિક તાપી આરતી' },
  'daily.body': { en: 'As the sun — Tapi\'s own father — dips below the water, hundreds gather on the steps. Lamps are lit, conches sound, and the river glows gold. All are welcome; there is no fee to attend.', hi: 'जैसे ही सूर्य — तापी के अपने पिता — पानी के नीचे डूबते हैं, सैकड़ों लोग सीढ़ियों पर इकट्ठा होते हैं। दीये जलाए जाते हैं, शंख बजते हैं और नदी सोने की तरह चमकती है। सभी का स्वागत है; भाग लेने के लिए कोई शुल्क नहीं है।', gu: 'સૂર્ય — જે તાપીના પિતા છે — પાણીમાં આથમે છે, ત્યારે સેંકડો લોકો ઘાટ પર એકઠા થાય છે. દીવા પ્રગટાવવામાં આવે છે, શંખનાદ થાય છે અને નદી સોના જેવી ચમકે છે. બધાનું સ્વાગત છે; કોઈ ફી નથી.' },
  'daily.t1': { en: 'Morning Snan & Jal Puja', hi: 'प्रातः स्नान और जल पूजा', gu: 'સવારનું સ્નાન અને જલ પૂજા' },
  'daily.t2': { en: 'Sandhya Aarti (daily)', hi: 'संध्या आरती (दैनिक)', gu: 'સંધ્યા આરતી (દૈનિક)' },
  'daily.t3': { en: 'Maha Aarti (Purnima)', hi: 'महा आरती (पूर्णिमा)', gu: 'મહા આરતી (પૂર્ણિમા)' },
  'daily.time1': { en: '6:00 AM', hi: 'सुबह 6:00 बजे', gu: 'સવારે ૬:૦૦ કલાકે' },
  'daily.time2': { en: 'Sunset', hi: 'सूर्यास्त', gu: 'સૂર્યાસ્ત સમયે' },
  'daily.time3': { en: '7:00 PM', hi: 'शाम 7:00 बजे', gu: 'સાંજે ૭:૦૦ કલાકે' },

  // Seva CTA
  'seva.overline': { en: 'Support the daily aarti & operations', hi: 'दैनिक आरती और संचालन का समर्थन करें', gu: 'દૈનિક આરતી અને કાર્યોમાં સહયોગ આપો' },
  'seva.title': { en: 'Sponsor a Seva, floating light', hi: 'एक सेवा प्रायोजित करें, दीप दान करें', gu: 'સેવા પ્રાયોજિત કરો, દીપ દાન કરો' },
  'seva.body': { en: 'Tapi Namastubhyam is powered by the community of Surat. Help us maintain the daily sandhya aarti, clean the ghats, and carry out community support projects.', hi: 'तापी नमस्तुभ्यम् सूरत के समुदाय द्वारा संचालित है। दैनिक संध्या आरती बनाए रखने, घाटों की सफाई करने और सामुदायिक सहायता परियोजनाओं को पूरा करने में हमारी मदद करें।', gu: 'તાપી નમસ્તુભ્યમ્ સુરતના લોકોના સહયોગથી ચાલે છે. દૈનિક સંધ્યા આરતી ચાલુ રાખવા, ઘાટ સાફ રાખવા અને સામાજિક કાર્યોમાં અમારી મદદ કરો.' },
  'seva.btnBook': { en: 'Book Aarti Seva', hi: 'आरती सेवा बुक करें', gu: 'આરતી સેવા બુક કરો' },
  'seva.btnDonate': { en: 'Donate General Fund', hi: 'सामान्य कोष में दान करें', gu: 'સામાન્ય ફંડમાં દાન આપો' },

  // Members
  'members.overline': { en: 'Hands behind the movement', hi: 'आंदोलन के पीछे के हाथ', gu: 'આંદોલન પાછળના હાથ' },
  'members.title': { en: 'Trustees & Committee', hi: 'ट्रस्टी और समिति', gu: 'ટ્રસ્ટીઓ અને સમિતિ' },
  'members.presidentBio': { en: "Founder-president guiding the trust's mission to preserve the sacred Tapi and unite Surat in daily devotion and service.", hi: "पवित्र तापी को संरक्षित करने और सूरत को दैनिक भक्ति और सेवा में एकजुट करने के ट्रस्ट के मिशन का मार्गदर्शन करने वाले संस्थापक-अध्यक्ष।", gu: "પવિત્ર તાપીને બચાવવા અને સુરતને દૈનિક ભક્તિ અને સેવામાં જોડવા માટેના ટ્રસ્ટના મિશનનું માર્ગદર્શન કરતા સંસ્થાપક-પ્રમુખ." },

  // Gallery
  'gallery.title': { en: 'Gallery', hi: 'गैलरी', gu: 'ગેલેરી' },
  'gallery.subtitle': { en: 'Glimpses of our sacred ceremonies, community service, and spiritual gatherings.', hi: 'हमारे पवित्र समारोहों, सामुदायिक सेवा और आध्यात्मिक सभाओं की झलकियाँ।', gu: 'અમારા પવિત્ર સમારોહો, સામુદાયિક સેવા અને આધ્યાત્મિક સભાઓની ઝલક.' },
  'gallery.c1': { en: 'All', hi: 'सभी', gu: 'બધા' },
  'gallery.c2': { en: 'River', hi: 'नदी', gu: 'નદી' },
  'gallery.c3': { en: 'Aarti', hi: 'आरती', gu: 'આરતી' },
  'gallery.c4': { en: 'Activities', hi: 'गतिविधियाँ', gu: 'પ્રવૃત્તિઓ' },
  'gallery.c5': { en: 'Festivals', hi: 'त्यौहार', gu: 'તહેવારો' },
  'gallery.cap1': { en: 'The sacred Tapi at dawn', hi: 'भोर में पवित्र तापी', gu: 'પરોઢિયે પવિત્ર તાપી' },
  'gallery.cap2': { en: 'River steps at sunrise', hi: 'सूर्योदय के समय नदी की सीढ़ियाँ', gu: 'સૂર્યોદય સમયે નદીના પગથિયાં' },
  'gallery.cap3': { en: 'The Tapi through Surat', hi: 'सूरत से गुजरती तापी', gu: 'સુરત વચ્ચેથી વહેતી તાપી' },
  'gallery.cap4': { en: 'Evening Tapi Aarti', hi: 'शाम की तापी आरती', gu: 'સાંજની તાપી આરતી' },
  'gallery.cap5': { en: 'Sunset aarti on the ghat', hi: 'घाट पर सूर्यास्त की आरती', gu: 'ઘાટ પર સૂર્યાસ્ત આરતી' },
  'gallery.cap6': { en: 'A thousand diyas', hi: 'एक हजार दीये', gu: 'એક હજાર દીવા' },
  'gallery.cap7': { en: 'Lamps of devotion', hi: 'भक्ति के दीप', gu: 'ભક્તિના દીપ' },
  'gallery.cap8': { en: 'River cleaning drive', hi: 'नदी सफाई अभियान', gu: 'નદી સફાઈ અભિયાન' },
  'gallery.cap9': { en: 'Tree plantation', hi: 'वृक्षारोपण', gu: 'વૃક્ષારોપણ' },
  'gallery.cap10': { en: 'Blood donation camp', hi: 'रक्तदान शिविर', gu: 'રક્તદાન કેમ્પ' },
  'gallery.cap11': { en: 'Community kitchen', hi: 'सामुदायिक रसोई', gu: 'સામુદાયિક રસોડું' },
  'gallery.cap12': { en: 'Temple festival', hi: 'मंदिर महोत्सव', gu: 'મંદિર મહોત્સવ' },
  'gallery.cap13': { en: 'Festival of lamps', hi: 'दीपों का त्योहार', gu: 'દીવાનો તહેવાર' },
  'gallery.cap14': { en: 'Diwali celebrations', hi: 'दिवाली समारोह', gu: 'દિવાળી ઉજવણી' },
  'gallery.cap15': { en: 'A festival gathering', hi: 'एक उत्सव सभा', gu: 'એક તહેવારની સભા' },

  // Events
  'events.title': { en: 'Upcoming Events', hi: 'आगामी कार्यक्रम', gu: 'આગામી કાર્યક્રમો' },
  'events.subtitle': { en: 'Join us in our upcoming spiritual ceremonies and community events.', hi: 'हमारे आगामी आध्यात्मिक समारोहों और सामुदायिक कार्यक्रमों में शामिल हों।', gu: 'અમારા આગામી આધ્યાત્મિક સમારોહો અને સામુદાયિક કાર્યક્રમોમાં જોડાઓ.' },
  'events.t1': { en: 'Maha Aarti — Guru Purnima', hi: 'महा आरती — गुरु पूर्णिमा', gu: 'મહા આરતી — ગુરુ પૂર્ણિમા' },
  'events.t2': { en: 'River Cleaning Mega Drive', hi: 'नदी सफाई महा अभियान', gu: 'નદી સફાઈ મહા અભિયાન' },
  'events.t3': { en: 'Blood Donation Camp', hi: 'रक्तदान शिविर', gu: 'રક્તદાન કેમ્પ' },
  'events.loc1': { en: 'Tapi Riverbank, Surat', hi: 'तापी नदी तट, सूरत', gu: 'તાપી નદી કિનારો, સુરત' },
  'events.loc2': { en: 'Tapi Ghat, Surat', hi: 'तापी घाट, सूरत', gu: 'તાપી ઘાટ, સુરત' },
  'events.loc3': { en: 'Community Hall, Surat', hi: 'सामुदायिक भवन, सूरत', gu: 'સામુદાયિક હોલ, સુરત' },

  // News
  'news.overline': { en: 'In the press & media', hi: 'प्रेस और मीडिया में', gu: 'પ્રેસ અને મીડિયામાં' },
  'news.title': { en: 'News & Recognition', hi: 'समाचार और मान्यता', gu: 'સમાચાર અને સન્માન' },
  'news.tag1': { en: 'Recognition', hi: 'मान्यता', gu: 'સન્માન' },
  'news.t1': { en: 'Trust honoured for river conservation work', hi: 'नदी संरक्षण कार्य के लिए ट्रस्ट सम्मानित', gu: 'નદી સંરક્ષણ કાર્ય માટે ટ્રસ્ટનું સન્માન' },
  'news.ex1': { en: 'Tapi Namastubhyam featured in leading publications for its dedication and service to the community.', hi: 'समुदाय के प्रति समर्पण और सेवा के लिए प्रमुख प्रकाशनों में तापी नमस्तुभ्यम् को चित्रित किया गया।', gu: 'સમુદાય પ્રત્યેના સમર્પણ અને સેવા માટે અગ્રણી અખબારોમાં તાપી નમસ્તુભ્યમ્ ની નોંધ લેવાઈ.' },
  'news.tag2': { en: 'Milestone', hi: 'मील का पत्थर', gu: 'નવો માઇલસ્ટોન' },
  'news.t2': { en: 'One year of unbroken daily aarti', hi: 'अखंड दैनिक आरती का एक वर्ष', gu: 'અખંડ દૈનિક આરતીનું એક વર્ષ' },
  'news.ex2': { en: '365 evenings of collective prayer on the ghats — a growing family of devotees and volunteers.', hi: 'घाटों पर सामूहिक प्रार्थना की 365 शामें — भक्तों और स्वयंसेवकों का एक बढ़ता हुआ परिवार।', gu: 'ઘાટ પર સામૂહિક પ્રાર્થનાની ૩૬૫ સાંજ — ભક્તો અને સ્વયંસેવકોનો મોટો થતો પરિવાર.' },
  'news.tag3': { en: 'Ecology', hi: 'पारिस्थितिकी', gu: 'પર્યાવરણ' },
  'news.t3': { en: '50,000 diyas, zero plastic', hi: '50,000 दीये, शून्य प्लास्टिक', gu: '૫૦,૦૦૦ દીવા, ઝીરો પ્લાસ્ટિક' },
  'news.ex3': { en: 'Our festival programme goes fully eco-friendly with clay diyas and natural offerings.', hi: 'हमारा उत्सव कार्यक्रम मिट्टी के दीयों और प्राकृतिक प्रसादों के साथ पूरी तरह से पर्यावरण-अनुकूल है।', gu: 'માટીના દીવા અને કુદરતી પ્રસાદ સાથે અમારો ઉત્સવ સંપૂર્ણપણે ઇકો-ફ્રેન્ડલી છે.' },

  // Download Center
  'download.overline': { en: 'Download Center', hi: 'डाउनलोड केंद्र', gu: 'ડાઉનલોડ સેન્ટર' },
  'download.title': { en: 'Tapi Aarti Path & Shlok', hi: 'तापी आरती पाठ और श्लोक', gu: 'તાપી આરતી પાઠ અને શ્લોક' },
  'download.body': { en: 'Download the official Tapi Aarti, prayer path and shloks in Hindi, Gujarati and Sanskrit. Keep the sacred verses close at hand.', hi: 'हिंदी, गुजराती और संस्कृत में आधिकारिक तापी आरती, प्रार्थना पाठ और श्लोक डाउनलोड करें। पवित्र श्लोकों को पास में रखें।', gu: 'હિન્દી, ગુજરાતી અને સંસ્કૃતમાં સત્તાવાર તાપી આરતી, પ્રાર્થના પાઠ અને શ્લોક ડાઉનલોડ કરો. પવિત્ર શ્લોકોને સાથે રાખો.' },
  'download.btn': { en: 'Download Aarti PDF (Gujarati & Sanskrit)', hi: 'आरती पीडीएफ डाउनलोड करें (गुजराती और संस्कृत)', gu: 'આરતી PDF ડાઉનલોડ કરો (ગુજરાતી અને સંસ્કૃત)' },

  // Testimonials
  'test.overline': { en: 'Words of trust & faith', hi: 'विश्वास और आस्था के शब्द', gu: 'વિશ્વાસ અને શ્રદ્ધાના શબ્દો' },
  'test.title': { en: 'What our community says', hi: 'हमारा समुदाय क्या कहता है', gu: 'લોકોનો અભિપ્રાય' },
  'test.q1': { en: 'Every rupee is accounted for. They publish audited reports and share quarterly updates with donors. That transparency is rare.', hi: 'हर एक रुपये का हिसाब है। वे ऑडिट की गई रिपोर्ट प्रकाशित करते हैं और दाताओं के साथ तिमाही अपडेट साझा करते हैं। ऐसी पारदर्शिता दुर्लभ है।', gu: 'દરેક રૂપિયાનો હિસાબ રાખવામાં આવે છે. તેઓ ઓડિટ થયેલ રિપોર્ટ પ્રકાશિત કરે છે. આવી પારદર્શિતા બહુ ઓછી જગ્યાએ જોવા મળે.' },
  'test.n1': { en: 'Rajesh Mehta', hi: 'राजेश मेहता', gu: 'રાજેશ મહેતા' },
  'test.r1': { en: 'Monthly Donor', hi: 'मासिक दाता', gu: 'માસિક દાતા' },
  'test.q2': { en: 'Standing at the ghat during the Maha Aarti moved me to tears. This is Surat\'s soul, kept alive with such love.', hi: 'महा आरती के दौरान घाट पर खड़े होने से मेरी आँखों में आँसू आ गए। यह सूरत की आत्मा है, जिसे इतने प्यार से जीवित रखा गया है।', gu: 'મહા આરતી દરમિયાન ઘાટ પર ઉભા રહેવાથી મારી આંખમાં આંસુ આવી ગયા. આ સુરતનો આત્મા છે.' },
  'test.n2': { en: 'Anita Shah', hi: 'अनीता शाह', gu: 'અનીતા શાહ' },
  'test.r2': { en: 'Devotee, Surat', hi: 'भक्त, सूरत', gu: 'ભક્ત, સુરત' },
  'test.q3': { en: 'The river cleaning drives changed how our whole society thinks about the Tapi. My children now volunteer every week.', hi: 'नदी सफाई अभियानों ने हमारी पूरी सोसायटी की तापी के बारे में सोच को बदल दिया। मेरे बच्चे अब हर हफ्ते स्वयंसेवा करते हैं।', gu: 'નદી સફાઈ અભિયાને આપણી આખી સોસાયટીની તાપી વિશેની સોચ બદલી નાખી છે. મારા બાળકો દર અઠવાડિયે મદદ કરે છે.' },
  'test.n3': { en: 'Dr. Nikhil Desai', hi: 'डॉ. निखिल देसाई', gu: 'ડૉ. નિખિલ દેસાઈ' },
  'test.r3': { en: 'Volunteer', hi: 'स्वयंसेवक', gu: 'સ્વયંસેવક' },

  // FAQ
  'faq.overline': { en: 'Frequently Asked Questions', hi: 'अक्सर पूछे जाने वाले प्रश्न', gu: 'વારંવાર પૂછાતા પ્રશ્નો' },
  'faq.title': { en: 'Common Queries', hi: 'सामान्य प्रश्न', gu: 'સામાન્ય પ્રશ્નો' },
  'faq.q1': { en: "How are my donations used?", hi: "मेरे दान का उपयोग कैसे किया जाता है?", gu: "મારા દાનનો ઉપયોગ કેવી રીતે થાય છે?" },
  'faq.a1': { en: "Donations fund the daily aarti, river cleaning drives, plantation, blood-donation camps and disaster relief. We publish audited annual reports and quarterly updates for donors.", hi: "दान का उपयोग दैनिक आरती, नदी सफाई अभियान, वृक्षारोपण, रक्तदान शिविर और आपदा राहत के लिए किया जाता है। हम दाताओं के लिए ऑडिट वार्षिक रिपोर्ट प्रकाशित करते हैं।", gu: "દાનનો ઉપયોગ દૈનિક આરતી, નદી સફાઈ અભિયાન, વૃક્ષારોપણ, રક્તદાન કેમ્પ અને આપત્તિ રાહત માટે થાય છે. અમે ઓડિટ વાર્ષિક અહેવાલો પ્રકાશિત કરીએ છીએ." },
  'faq.q2': { en: "Are donations tax-deductible?", hi: "क्या दान पर टैक्स छूट मिलती है?", gu: "શું દાન કરમુક્ત છે?" },
  'faq.a2': { en: "Yes. All donations are eligible for tax benefits under Section 80G. For donations above ₹10,000, please provide PAN details so we can issue your 80G certificate.", hi: "हाँ। सभी दान धारा 80जी के तहत कर लाभ के पात्र हैं। ₹10,000 से अधिक के दान के लिए, कृपया पैन विवरण प्रदान करें ताकि हम आपका 80जी प्रमाणपत्र जारी कर सकें।", gu: "હા. 80G હેઠળ કર લાભ માટે પાત્ર છે. ₹10,000 થી વધુના દાન માટે, કૃપા કરીને PAN વિગતો આપો જેથી અમે તમારું 80G પ્રમાણપત્ર આપી શકીએ." },
  'faq.q3': { en: "How does Aarti / Pooja booking work?", hi: "आरती / पूजा बुकिंग कैसे काम करती है?", gu: "આરતી / પૂજા બુકિંગ કેવી રીતે કામ કરે છે?" },
  'faq.a3': { en: "Choose a seva package, pick your date and share sankalp details. Our priests perform the ritual in your name and you receive a blessing certificate. (Payments on this site are a demo.)", hi: "एक सेवा पैकेज चुनें, अपनी तिथि चुनें और संकल्प विवरण साझा करें। हमारे पुजारी आपके नाम से अनुष्ठान करते हैं और आपको आशीर्वाद प्रमाणपत्र प्राप्त होता है। (इस साइट पर भुगतान एक डेमो है।)", gu: "સેવા પેકેજ પસંદ કરો, તારીખ પસંદ કરો અને સંકલ્પ વિગતો આપો. અમારા પૂજારી તમારા નામે પૂજા કરે છે અને તમને આશીર્વાદ પ્રમાણપત્ર મળે છે." },
  'faq.q4': { en: "Can I attend the daily Tapi Aarti?", hi: "क्या मैं दैनिक तापी आरती में शामिल हो सकता हूँ?", gu: "શું હું દૈનિક તાપી આરતીમાં હાજર રહી શકું?" },
  'faq.a4': { en: "Absolutely. The aarti is open to all, every evening at the Tapi ghat in Surat. Arrive 20 minutes early for a good place on the steps.", hi: "बिल्कुल। आरती सभी के लिए खुली है, हर शाम सूरत में तापी घाट पर। सीढ़ियों पर अच्छी जगह पाने के लिए 20 मिनट पहले पहुंचें।", gu: "ચોક્કસ. આરતી બધા માટે ખુલ્લી છે, દર સાંજે સુરતના તાપી ઘાટ પર. ઘાટ પર બેસવા માટે ૨૦ મિનિટ વહેલા આવો." },
  'faq.q5': { en: "Do you accept volunteers?", hi: "क्या आप स्वयंसेवकों को स्वीकार करते हैं?", gu: "શું તમે સ્વયંસેવકો લો છો?" },
  'faq.a5': { en: "Yes — we always welcome hands for cleaning drives, plantation and events. Reach out via the contact form and our team will connect with you.", hi: "हाँ — हम सफाई अभियानों, वृक्षारोपण और कार्यक्रमों के लिए हमेशा स्वयंसेवकों का स्वागत करते हैं। संपर्क फ़ॉर्म के माध्यम से संपर्क करें और हमारी टीम आपसे जुड़ेगी।", gu: "હા — સફાઈ અભિયાન, વૃક્ષારોપણ અને કાર્યક્રમો માટે અમે હંમેશા સ્વયંસેવકોનું સ્વાગત કરીએ છીએ. ફોર્મ ભરી અમારો સંપર્ક કરો." },

  // Contact
  'contact.overline': { en: 'Connect with us', hi: 'हमसे जुड़ें', gu: 'અમારો સંપર્ક કરો' },
  'contact.title': { en: 'We would love to hear from you', hi: 'हमें आपसे सुनना अच्छा लगेगा', gu: 'અમને તમારી સાથે વાત કરવી ગમશે' },
  'contact.name': { en: 'Full Name', hi: 'पूरा नाम', gu: 'પૂરૂ નામ' },
  'contact.email': { en: 'Email Address', hi: 'ईमेल पता', gu: 'ઈમેલ એડ્રેસ' },
  'contact.phone': { en: 'Phone Number', hi: 'फ़ोन नंबर', gu: 'ફોન નંબર' },
  'contact.subject': { en: 'Subject', hi: 'विषय', gu: 'વિષય' },
  'contact.message': { en: 'Your Message', hi: 'आपका संदेश', gu: 'તમારો સંદેશ' },
  'contact.btn': { en: 'Send Message', hi: 'संदेश भेजें', gu: 'સંદેશ મોકલો' },
  'contact.success': { en: 'Message sent successfully! We will get back to you soon.', hi: 'संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।', gu: 'સંદેશ સફળતાપૂર્વક મોકલવામાં આવ્યો છે! અમે જલ્દી તમારો સંપર્ક કરીશું.' },
  'contact.address': { en: 'Registered Address', hi: 'पंजीकृत पता', gu: 'નોંધણી પત્તો' },
  'contact.bank': { en: 'Bank Details', hi: 'बैंक विवरण', gu: 'બેંક વિગતો' },
  'contact.accName': { en: 'Account Name', hi: 'खाता नाम', gu: 'એકાઉન્ટ નામ' },
  'contact.accNo': { en: 'Account Number', hi: 'खाता संख्या', gu: 'એકાઉન્ટ નંબર' },
  'contact.ifsc': { en: 'IFSC Code', hi: 'आईएफएससी कोड', gu: 'IFSC કોડ' },

  // Booking Page & Donate Page
  'book.title': { en: 'Book Seva & Aarti', hi: 'सेवा और आरती बुक करें', gu: 'સેવા અને આરતી બુક કરો' },
  'book.subtitle': { en: 'Select a package, choose date, and enter details for personal sankalp announcement.', hi: 'एक पैकेज चुनें, तिथि चुनें, और व्यक्तिगत संकल्प घोषणा के लिए विवरण दर्ज करें।', gu: 'પેકેજ પસંદ કરો, તારીખ પસંદ કરો અને સંકલ્પ વિગતો આપો.' },
  'donate.title': { en: 'Support Our Initiatives', hi: 'हमारी पहलों का समर्थन करें', gu: 'અમારા કાર્યોમાં સહયોગ આપો' },
  'donate.subtitle': { en: 'Your contribution powers daily aarti, cleanliness drives, and social welfare programs in Surat.', hi: 'आपका योगदान सूरत में दैनिक आरती, स्वच्छता अभियान और सामाजिक कल्याण कार्यक्रमों को शक्ति देता है।', gu: 'તમારું દાન સુરતમાં દૈનિક આરતી, સફાઈ અભિયાન અને સામાજિક કલ્યાણના કાર્યોમાં મદદ કરે છે.' },
};

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
