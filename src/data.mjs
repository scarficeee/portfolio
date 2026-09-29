// The single source of truth for casebook content. Null means not yet supplied.
// Do not infer dates, campaign details, platforms, or results from a role title.
export const identity = {
  name:'Rifaldy Rizqya', edition:'2026', location:'Bandung, Indonesia',
  email:'rifaldiriqhia@gmail.com', whatsapp:'6282211911673',
  linkedin:'https://www.linkedin.com/in/rifaldyrizqya', instagram:'https://www.instagram.com/izqyald/'
};
const pending = {year:null,period:null,objective:null,strategy:null,execution:null,reflection:null,evidence:[],documentation:[]};
export const projects = [
  {...pending,id:'01',slug:'japanect',name:'Japanect Consulting',legalName:'PT Japanect Consulting Indonesia',
    industry:'Consulting / travel',audience:'B2B + B2C',role:'Full-Stack Growth Hacking B2B / B2C and Operational Tour',
    title:'Connecting growth with the customer journey.',short:'Growth, from awareness to booking.',
    context:'At Japanect Consulting Indonesia, my role connected B2B and B2C growth with tour operations. The remit spans how a business reaches people and how that interest connects to a booking.',
    responsibility:'My supplied role covers full-stack growth hacking across B2B and B2C, alongside tour operations. Campaign-level responsibilities and deliverables will be added with the project documentation.',
    scope:['B2B / B2C growth','Tour operations'],
    framing:'The current results cover four different stages: awareness, lead generation, organic growth, and bookings. They are presented separately because each describes a different part of the customer journey.',
    metrics:[{value:'+120%',label:'Awareness'},{value:'+80%',label:'Leads'},{value:'+50%',label:'Organic growth'},{value:'+40%',label:'Bookings'}],
    metricSource:'Figures supplied by the portfolio owner. Reporting period, baseline, and supporting files have not yet been supplied.',
    evidencePlan:['Campaign analytics','Organic acquisition report','Booking documentation']},
  {...pending,id:'02',slug:'jaya-utama-perkasa',name:'Jaya Utama Perkasa',legalName:'PT Jaya Utama Perkasa',
    industry:null,audience:null,role:'Head of Growth Hacking & Full-Stack Website Development',
    title:'The growth brief. The website. One connected remit.',short:'Growth strategy meets website development.',
    context:'This role combines growth leadership with full-stack website development. It connects the commercial questions behind a website with the practical work of building it.',
    responsibility:'My role covered Head of Growth Hacking and Full-Stack Website Development. The project record is structured to document both disciplines without assigning unconfirmed tools or deliverables.',
    scope:['Growth leadership','Full-stack website development'],
    framing:'A website can sit inside a broader growth effort. This case will document the relationship between the growth remit and website work as the original captures and technical notes become available.',
    metrics:[],evidencePlan:['Website captures','Technical documentation','Growth planning material']},
  {...pending,id:'03',slug:'casadela',name:'Casadela Canggu',legalName:'Casadela Canggu',
    industry:'Hospitality',audience:'B2C',role:'Head of Growth Hacking',
    title:'Growth within a hospitality experience.',short:'A hospitality perspective on growth.',
    context:'Casadela Canggu brings a hospitality context to my growth work. The professional record supplied for this portfolio identifies my role as Head of Growth Hacking.',
    responsibility:'Growth leadership is the confirmed scope. Channel choices, campaign responsibilities, and individual outputs are awaiting the original project records.',
    scope:['Growth leadership','Hospitality'],
    framing:'The guest journey provides a useful lens for this case: how a place is discovered, understood, and considered. The campaign decisions behind that journey will be documented here when the source material is available.',
    metrics:[],evidencePlan:['Property photographs','Campaign creatives','Content planning material']},
  {...pending,id:'04',slug:'ladela',name:'Ladela',legalName:'Ladela.id',
    industry:null,audience:null,role:'Head of Growth Hacking',
    title:'A growth role, seen through the brand.',short:'Brand context. Growth responsibility.',
    context:'Ladela.id is part of my growth leadership experience. The current professional record establishes the role; the original brand and campaign materials will provide the detail behind it.',
    responsibility:'Head of Growth Hacking is the confirmed role. Specific creative direction, campaign execution, and outputs will be attributed only when supported by the project documentation.',
    scope:['Growth leadership'],
    framing:'This case is organised around the relationship between brand presentation and growth work. The archive is prepared for creative material, planning documents, and before-and-after examples.',
    metrics:[],evidencePlan:['Brand / campaign material','Content system','Before-and-after documentation']},
  {...pending,id:'05',slug:'kurnia-group',name:'Kurnia Group',legalName:'Kurnia Group',
    industry:null,audience:null,role:null,
    title:'A record of awareness and lead growth.',short:'Two measures. A larger growth picture.',
    context:'Kurnia Group enters this casebook through two updated performance figures supplied for the portfolio: awareness and leads. The role, business context, and reporting period are awaiting supporting detail.',
    responsibility:null,scope:[],
    framing:'Awareness and leads measure different things. Keeping them separate makes the report more useful: visibility is one result, and an inquiry is another. The original reporting will add the measurement context.',
    metrics:[{value:'+1,010%',label:'Awareness'},{value:'+100%',label:'Leads'}],
    metricSource:'Figures supplied by the portfolio owner. Reporting period, baseline, and supporting files have not yet been supplied.',
    evidencePlan:['Awareness reporting','Lead acquisition report','Campaign documentation']}
];
export const experience=[
 {name:'Casadela Canggu',role:'Head of Growth Hacking',year:null,slug:'casadela'},
 {name:'Ladela.id',role:'Head of Growth Hacking',year:null,slug:'ladela'},
 {name:'PT Jaya Utama Perkasa',role:'Head of Growth Hacking & Full-Stack Website Development',year:null,slug:'jaya-utama-perkasa'},
 {name:'Kakibudi',role:'Web Developer & Growth Hacking Specialist',year:null},
 {name:'PT Japanect Consulting Indonesia',role:'Full-Stack Growth Hacking B2B / B2C and Operational Tour',year:null,slug:'japanect'},
 {name:'Vertex Pharmaceuticals',role:'Copywriter & Python Data Analyst',year:null},
 {name:'Adventure Travel Group',role:'Tour Organizer and Operational',year:null},
 {name:'Japantrips',role:'Travel industry experience',year:null},
 {name:'Aksara Wisata',role:'Growth Hacking',year:null}
];
export const capabilities=[
 {name:'Growth',items:['B2B growth strategy','Paid acquisition','Lead generation','Campaign strategy','Conversion strategy','Analytics']},
 {name:'Web',items:['Website development','Landing pages','SEO','Analytics integration','Tracking']},
 {name:'Brand',items:['Content strategy','Positioning','Content direction','Social media','Copywriting']},
 {name:'Operations',items:['Campaign execution','Marketing operations','Project coordination','Tour operations']}
];
export const credentials=[];
export const education={school:'Tourism Vocational High School 3 Bandung',program:null,period:null,grade:null};
export const languages=[{name:'English',level:null},{name:'Japanese',level:null}];

// Evidence schema (replace nulls with verified source information, never sample claims):
// {id:'E-01',type:'image'|'gallery'|'comparison'|'document',title,source,date,
// description,caption,redacted:false,layout:'wide'|'detail'|'contact',
// images:[{src:'/evidence/japanect/file.webp',alt:'...',caption:'...'}],
// file:{url:'/evidence/japanect/report.pdf',label:'Open report'},metricLabels:[]}
// Comparisons use two images, ordered Before then After. Gallery order is preserved.
// An evidence item without usable media is retained in source but not published.
