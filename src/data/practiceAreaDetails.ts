export interface PracticeAreaDetail {
  slug: string;
  title: string;
  description: string;
  overview: string;
  symptoms: string[];
  whenToConsult: string[];
  whatToExpect: string[];
  metaDescription: string;
}

export const practiceAreaDetails: PracticeAreaDetail[] = [
  {
    slug: "diabetes-care",
    title: "Diabetes Care",
    description:
      "Comprehensive diabetes management including Type 1, Type 2, and gestational diabetes with personalized treatment plans.",
    overview:
      "Diabetes mellitus is a chronic metabolic condition characterised by elevated blood glucose levels. With over 27 years of experience and membership in the Research Society for Study of Diabetes in India (RSSDI), Dr. Sandeep Singh Chhatwal provides evidence-based diabetes management tailored to each patient's lifestyle and medical history. At Omni Clinics & Diagnostics, we offer complete diabetic care — from initial diagnosis and HbA1c monitoring to long-term complication screening and lifestyle counselling.",
    symptoms: [
      "Frequent urination, especially at night",
      "Increased thirst and dry mouth",
      "Unexplained weight loss or gain",
      "Fatigue and lack of energy",
      "Blurred vision",
      "Slow-healing wounds or frequent infections",
      "Tingling or numbness in hands and feet",
    ],
    whenToConsult: [
      "Your fasting blood sugar is consistently above 100 mg/dL",
      "You have a family history of diabetes and are over 35",
      "You experience any of the classic symptoms listed above",
      "You have been diagnosed with pre-diabetes or metabolic syndrome",
      "You need help adjusting insulin or oral medication dosages",
      "You are planning a pregnancy and have diabetes",
    ],
    whatToExpect: [
      "Detailed medical history review and physical examination",
      "Blood tests including fasting glucose, HbA1c, and lipid profile",
      "Personalised treatment plan combining medication, diet, and exercise",
      "Regular follow-up visits to monitor blood sugar control",
      "Screening for diabetic complications — eyes, kidneys, nerves, and heart",
      "Nutritional guidance and lifestyle modification support",
    ],
    metaDescription:
      "Expert diabetes care in Chandigarh by Dr. Sandeep Singh Chhatwal, RSSDI member with 27+ years experience. Comprehensive Type 1 & Type 2 diabetes management at Omni Clinics.",
  },
  {
    slug: "hypertension-management",
    title: "Hypertension Management",
    description:
      "Expert diagnosis and management of high blood pressure to reduce cardiovascular risk and improve quality of life.",
    overview:
      "Hypertension, commonly known as high blood pressure, is often called the 'silent killer' because it rarely causes noticeable symptoms but significantly increases the risk of heart attack, stroke, and kidney disease. Dr. Sandeep Singh Chhatwal, a member of the Cardiological Society of India (CSI), takes a comprehensive approach to hypertension management — identifying underlying causes, optimising medication, and guiding patients through sustainable lifestyle changes for long-term blood pressure control.",
    symptoms: [
      "Persistent headaches, particularly at the back of the head",
      "Shortness of breath during routine activity",
      "Dizziness or lightheadedness",
      "Chest discomfort or palpitations",
      "Visual disturbances",
      "Nosebleeds (in severe cases)",
      "Often no symptoms at all — regular screening is essential",
    ],
    whenToConsult: [
      "Your blood pressure readings are consistently above 130/80 mmHg",
      "You have a family history of hypertension or heart disease",
      "You experience frequent headaches, dizziness, or chest tightness",
      "You have diabetes, kidney disease, or high cholesterol alongside high BP",
      "Your current medication is not adequately controlling your blood pressure",
      "You want a comprehensive cardiovascular risk assessment",
    ],
    whatToExpect: [
      "Accurate blood pressure measurement using calibrated instruments",
      "Assessment of cardiovascular risk factors and organ damage",
      "Blood tests — kidney function, electrolytes, lipid profile, blood sugar",
      "ECG and other cardiac investigations if indicated",
      "Personalised medication plan with the fewest possible side effects",
      "Dietary counselling including sodium restriction and DASH diet guidance",
    ],
    metaDescription:
      "Hypertension specialist in Chandigarh — Dr. Sandeep Singh Chhatwal, CSI member. Comprehensive high blood pressure diagnosis, treatment & lifestyle management at Omni Clinics.",
  },
  {
    slug: "allergies-and-asthma",
    title: "Allergies & Asthma",
    description:
      "Diagnosis and treatment of allergic conditions and bronchial asthma with modern, patient-centred management protocols.",
    overview:
      "Allergies and asthma are among the most common chronic conditions affecting people of all ages. Whether you suffer from seasonal allergies, food sensitivities, allergic rhinitis, or bronchial asthma, Dr. Sandeep Singh Chhatwal provides thorough evaluation to identify triggers and create a management plan that minimises symptoms and prevents flare-ups. At Omni Clinics & Diagnostics, we offer lung function testing to accurately assess asthma severity and monitor treatment response.",
    symptoms: [
      "Wheezing, coughing, or shortness of breath",
      "Chest tightness, especially at night or early morning",
      "Sneezing, runny nose, or nasal congestion",
      "Itchy or watery eyes",
      "Skin rashes, hives, or eczema",
      "Recurrent respiratory infections",
      "Exercise-induced breathing difficulty",
    ],
    whenToConsult: [
      "You experience recurrent wheezing or breathlessness",
      "Over-the-counter allergy medications are not providing relief",
      "Your asthma symptoms are worsening or occurring more frequently",
      "You need a reliever inhaler more than twice a week",
      "Allergies are significantly affecting your sleep or daily activities",
      "You want to identify specific allergens triggering your symptoms",
    ],
    whatToExpect: [
      "Detailed history of symptoms, triggers, and family allergy background",
      "Lung function testing (spirometry) to assess airway function",
      "Allergy evaluation to identify potential triggers",
      "Personalised asthma action plan with step-up/step-down approach",
      "Training on correct inhaler technique",
      "Regular follow-ups to adjust treatment and prevent exacerbations",
    ],
    metaDescription:
      "Allergy & asthma treatment in Chandigarh by Dr. Sandeep Singh Chhatwal. Lung function testing, trigger identification & personalised management at Omni Clinics & Diagnostics.",
  },
  {
    slug: "thyroid-diseases",
    title: "Thyroid Diseases",
    description:
      "Complete evaluation and management of thyroid disorders including hypothyroidism, hyperthyroidism, and thyroid nodules.",
    overview:
      "Thyroid disorders are remarkably common in India, particularly hypothyroidism, which affects an estimated 1 in 10 adults. The thyroid gland regulates metabolism, energy, heart rate, and mood — and even slight imbalances can cause wide-ranging symptoms. Dr. Sandeep Singh Chhatwal provides thorough thyroid evaluation, from initial blood work to long-term medication management, ensuring patients achieve optimal thyroid hormone levels and symptom relief.",
    symptoms: [
      "Unexplained weight gain or difficulty losing weight (hypothyroidism)",
      "Fatigue, sluggishness, or low energy",
      "Feeling cold when others are comfortable",
      "Rapid heartbeat, anxiety, or tremors (hyperthyroidism)",
      "Hair thinning or hair loss",
      "Dry skin, brittle nails, or puffiness in the face",
      "Mood changes — depression, irritability, or difficulty concentrating",
      "Menstrual irregularities",
    ],
    whenToConsult: [
      "You have persistent fatigue or unexplained weight changes",
      "There is a family history of thyroid disease",
      "You notice a swelling or lump in the front of your neck",
      "You are pregnant or planning pregnancy and have thyroid concerns",
      "Your current thyroid medication needs adjustment",
      "You experience symptoms suggestive of hyper- or hypothyroidism",
    ],
    whatToExpect: [
      "Thyroid function tests — TSH, Free T3, Free T4",
      "Physical examination of the thyroid gland",
      "Antibody testing if autoimmune thyroid disease is suspected",
      "Referral for ultrasound or fine-needle aspiration if nodules are found",
      "Personalised medication dosing with regular monitoring",
      "Counselling on diet, lifestyle, and medication timing",
    ],
    metaDescription:
      "Thyroid specialist in Chandigarh — Dr. Sandeep Singh Chhatwal. Expert diagnosis and treatment of hypothyroidism, hyperthyroidism & thyroid nodules at Omni Clinics.",
  },
  {
    slug: "geriatric-care",
    title: "Geriatric Care",
    description:
      "Specialised healthcare for senior citizens addressing the unique medical needs of ageing, from chronic disease management to preventive care.",
    overview:
      "Geriatric medicine focuses on the health and well-being of older adults. Ageing brings unique medical challenges — multiple co-existing conditions, polypharmacy risks, cognitive changes, and functional decline. Dr. Sandeep Singh Chhatwal has extensive experience caring for elderly patients with a compassionate, holistic approach. He works closely with patients and their families to maintain independence, manage chronic diseases effectively, and improve overall quality of life in the later years.",
    symptoms: [
      "Increasing fatigue or generalised weakness",
      "Frequent falls or unsteadiness while walking",
      "Memory lapses or confusion",
      "Unintentional weight loss or poor appetite",
      "Joint pain and reduced mobility",
      "Difficulty managing multiple medications",
      "Sleep disturbances",
      "Social withdrawal or mood changes",
    ],
    whenToConsult: [
      "An elderly family member has multiple chronic conditions needing coordinated care",
      "There are concerns about memory loss or cognitive decline",
      "Managing multiple medications has become confusing or problematic",
      "Frequent hospital visits or emergency room trips are occurring",
      "You want a comprehensive health assessment for a senior family member",
      "There is difficulty with daily activities — bathing, dressing, eating, or mobility",
    ],
    whatToExpect: [
      "Comprehensive geriatric assessment covering physical, mental, and functional health",
      "Medication review to simplify regimens and reduce adverse interactions",
      "Screening for common age-related conditions — diabetes, hypertension, osteoarthritis, osteoporosis",
      "Cognitive screening and counselling",
      "Nutritional assessment and guidance",
      "Coordination with family members for ongoing care planning",
    ],
    metaDescription:
      "Geriatric care specialist in Chandigarh — Dr. Sandeep Singh Chhatwal. Comprehensive elderly healthcare, chronic disease management & senior wellness at Omni Clinics.",
  },
  {
    slug: "preventive-health",
    title: "Preventive Health & Routine Checkups",
    description:
      "Proactive health screening and preventive care to detect problems early, when they are most treatable.",
    overview:
      "Prevention is always better than cure. Regular health checkups can detect conditions like diabetes, hypertension, high cholesterol, and certain cancers in their earliest stages — when treatment is most effective and outcomes are best. Dr. Sandeep Singh Chhatwal is a strong advocate of preventive medicine. At Omni Clinics & Diagnostics, we offer comprehensive health screening packages, adult vaccination programmes, and personalised wellness plans tailored to your age, gender, and risk profile.",
    symptoms: [
      "This is preventive care — you may have no symptoms at all",
      "General fatigue that you have been ignoring",
      "Mild digestive issues or changes in appetite",
      "Occasional headaches or dizziness",
      "Family history of chronic diseases",
      "Sedentary lifestyle or work-related stress",
      "Not having had a checkup in over a year",
    ],
    whenToConsult: [
      "You are over 30 and have not had a health checkup in the past year",
      "There is a family history of diabetes, heart disease, or cancer",
      "You have a sedentary job or high-stress lifestyle",
      "You want to establish a baseline health record",
      "You need adult vaccinations — influenza, pneumococcal, hepatitis, or others",
      "You are planning to start a new fitness or diet programme",
    ],
    whatToExpect: [
      "Complete physical examination",
      "Blood tests — complete blood count, blood sugar, lipid profile, liver and kidney function, thyroid",
      "Urine analysis",
      "ECG and chest X-ray if indicated",
      "Age- and risk-appropriate cancer screening guidance",
      "Personalised wellness report with actionable recommendations",
      "Vaccination schedule review and administration",
    ],
    metaDescription:
      "Preventive health checkups in Chandigarh at Omni Clinics & Diagnostics. Comprehensive screening, adult vaccination & wellness plans by Dr. Sandeep Singh Chhatwal.",
  },
];

export function getPracticeAreaBySlug(
  slug: string
): PracticeAreaDetail | undefined {
  return practiceAreaDetails.find((p) => p.slug === slug);
}
