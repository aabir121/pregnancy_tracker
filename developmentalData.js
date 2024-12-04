const developmentalData = {
    weeks: {
        1: {
            size: "0.1 mm (smaller than a grain of rice)",
            description: "Fertilization occurs. The sperm and egg unite to form a single cell.",
            motherChanges: "Hormonal changes begin. Most women don't know they're pregnant yet.",
            tips: [
                "Start taking prenatal vitamins",
                "Avoid alcohol and smoking",
                "Maintain a balanced diet"
            ]
        },
        2: {
            size: "0.2 mm",
            description: "The embryo begins to divide rapidly. Primitive streak forms.",
            motherChanges: "Slight hormonal fluctuations may cause mood changes.",
            tips: [
                "Begin tracking your nutrition",
                "Rest when you feel tired",
                "Stay hydrated"
            ]
        },
        3: {
            size: "0.3 mm",
            description: "The embryo undergoes gastrulation, where the blastula folds in on itself to form the gastrula.",
            motherChanges: "Hormonal changes may cause breast tenderness and mood swings.",
            tips: [
                "Continue taking prenatal vitamins",
                "Eat small, frequent meals",
                "Stay active with gentle exercise"
            ]
        },
        4: {
            size: "Poppy seed (1 mm)",
            description: "The neural tube begins to form, which will develop into the brain and spinal cord. The heart starts forming and may begin beating.",
            motherChanges: "Hormonal changes may cause fatigue and nausea.",
            tips: [
                "Take prenatal vitamins with folic acid",
                "Avoid alcohol and smoking",
                "Start prenatal care visits"
            ]
        },
        5: {
            size: "Sesame seed (2-3 mm)",
            description: "The heart is now beating regularly. Tiny buds that will become arms and legs are forming.",
            motherChanges: "Morning sickness may begin. You may feel more fatigued than usual.",
            tips: [
                "Eat small, frequent meals to combat nausea",
                "Stay hydrated",
                "Get adequate rest"
            ]
        },
        6: {
            size: "Lentil (4 mm)",
            description: "Facial features begin forming, including dark spots where the eyes will be. The heart rate increases.",
            motherChanges: "Breast tenderness and fatigue may persist. Increased blood flow may cause lightheadedness.",
            tips: [
                "Avoid raw or undercooked foods",
                "Wear comfortable clothing",
                "Practice gentle stretching exercises"
            ]
        },
        7: {
            size: "Blueberry (7 mm)",
            description: "The brain is developing rapidly. Arm and leg buds are growing longer.",
            motherChanges: "Hormonal changes may cause mood swings. Nausea might worsen.",
            tips: [
                "Eat protein-rich foods",
                "Practice good posture",
                "Stay active with gentle exercise"
            ]
        },
        8: {
            size: "Kidney bean (1.6 cm)",
            description: "Tiny fingers and toes are forming, and the baby's tail begins to disappear.",
            motherChanges: "You may notice changes in your skin or an increase in vaginal discharge.",
            tips: [
                "Include iron-rich foods in your diet",
                "Stay hydrated",
                "Start pelvic floor exercises"
            ]
        },
        9: {
            size: "Grape (2.3 cm)",
            description: "The baby can make tiny movements, and external genitalia begin to form.",
            motherChanges: "You may experience bloating and mild cramping as your uterus expands.",
            tips: [
                "Start sleeping on your side",
                "Wear comfortable shoes",
                "Stay well-hydrated"
            ]
        },
        10: {
            size: "Kumquat (3.1 cm)",
            description: "Cartilage and bones begin to form, and the baby starts to move more.",
            motherChanges: "Your belly may start to feel firmer as your uterus grows.",
            tips: [
                "Eat iron-rich foods",
                "Practice relaxation techniques",
                "Continue gentle exercise"
            ]
        },
        11: {
            size: "Fig (4.1 cm)",
            description: "External ears are forming, and the baby is developing blood vessels under thin skin.",
            motherChanges: "You might feel hungrier as your metabolism increases.",
            tips: [
                "Monitor weight gain",
                "Stay active but avoid overexertion",
                "Get regular prenatal checkups"
            ]
        },
        12: {
            size: "Lime (5.4 cm)",
            description: "Reflexes are developing, and the baby can make facial expressions.",
            motherChanges: "Nausea might begin to subside as the first trimester ends.",
            tips: [
                "Start planning maternity leave",
                "Continue prenatal vitamins",
                "Stay active with approved exercises"
            ]
        },
        13: {
            size: "Peach (7.4 cm, 23 g)",
            description: "The vocal cords are developing, and the intestines have moved into the abdomen.",
            motherChanges: "You might notice less nausea and more energy.",
            tips: [
                "Schedule your next prenatal checkup",
                "Wear comfortable, loose clothing",
                "Continue eating nutrient-dense foods"
            ]
        },
        14: {
            size: "Lemon (8.7 cm, 43 g)",
            description: "Lanugo (fine hair) starts covering the body, and the baby can make sucking motions.",
            motherChanges: "You may feel more energetic. Skin changes like darkening or a 'pregnancy glow' may occur.",
            tips: [
                "Stay active with light exercises",
                "Hydrate adequately",
                "Avoid prolonged exposure to the sun"
            ]
        },
        15: {
            size: "Apple (10.1 cm, 70 g)",
            description: "The skeleton is hardening, and the legs are longer than the arms.",
            motherChanges: "You may start showing a small baby bump.",
            tips: [
                "Wear supportive bras to manage breast changes",
                "Avoid high-impact activities",
                "Focus on foods high in calcium and vitamin D"
            ]
        },
        16: {
            size: "Avocado (11.6 cm, 100 g)",
            description: "The circulatory and urinary systems are fully functional.",
            motherChanges: "You may feel round ligament pain as the uterus grows.",
            tips: [
                "Do gentle stretches to ease ligament pain",
                "Keep track of your posture",
                "Include fiber-rich foods in your diet"
            ]
        },
        17: {
            size: "Turnip (13 cm, 140 g)",
            description: "Baby's skeleton is turning from cartilage to bone. Sweat glands are forming.",
            motherChanges: "You may notice stronger nails and shinier hair due to hormonal changes.",
            tips: [
                "Maintain good hydration",
                "Consume iron-rich foods",
                "Continue light physical activity"
            ]
        },
        18: {
            size: "Bell pepper (14 cm, 190 g)",
            description: "The baby can now hear sounds from outside the womb. The nervous system is maturing.",
            motherChanges: "You may feel slight fluttering movements as the baby becomes more active.",
            tips: [
                "Talk or play music for the baby",
                "Attend all prenatal appointments",
                "Eat foods rich in omega-3 fatty acids"
            ]
        },
        19: {
            size: "Mango (15.3 cm, 240 g)",
            description: "Vernix caseosa (a protective coating) forms on the skin. The baby's senses are developing.",
            motherChanges: "You may notice an increase in appetite. Stretch marks may begin to appear.",
            tips: [
                "Moisturize to reduce itching",
                "Eat a balanced diet with whole grains",
                "Wear supportive maternity clothing"
            ]
        },
        20: {
            size: "Banana (16.5 cm, 300 g)",
            description: "The baby is practicing swallowing and digesting amniotic fluid. Gender can usually be identified by ultrasound.",
            motherChanges: "Your belly may feel more prominent. Backaches and leg cramps might start.",
            tips: [
                "Practice prenatal yoga to ease discomfort",
                "Sleep with a pillow between your knees",
                "Stay hydrated to prevent cramps"
            ]
        },
        21: {
            size: "Carrot (18 cm, 360 g)",
            description: "Baby's movements are becoming stronger and more coordinated. Eyelids and eyebrows are fully formed.",
            motherChanges: "You may feel shortness of breath as your uterus presses against your lungs.",
            tips: [
                "Take deep breaths and rest often",
                "Avoid standing for long periods",
                "Wear comfortable, flat shoes"
            ]
        },
        22: {
            size: "Papaya (19 cm, 430 g)",
            description: "Baby's lips are forming. Tooth buds are developing under the gums.",
            motherChanges: "You might feel your skin stretching and tightness around the abdomen.",
            tips: [
                "Use a maternity support belt for comfort",
                "Moisturize your skin regularly",
                "Drink plenty of fluids"
            ]
        },
        23: {
            size: "Coconut (20 cm, 500 g)",
            description: "Lungs are developing blood vessels. The baby starts responding to light.",
            motherChanges: "You may experience swelling in your feet and hands.",
            tips: [
                "Elevate your feet to reduce swelling",
                "Wear loose, comfortable clothing",
                "Avoid salty foods"
            ]
        },
        24: {
            size: "Corn (21 cm, 600 g)",
            description: "Baby's skin is still thin but becoming less translucent. Taste buds are forming.",
            motherChanges: "Your belly button may start to pop out as your uterus expands.",
            tips: [
                "Use a belly band for support",
                "Sleep on your left side to improve circulation",
                "Avoid heavy lifting"
            ]
        },
        25: {
            size: "Rutabaga (22 cm, 660 g)",
            description: "The baby is developing a sleep-wake cycle and can recognize your voice.",
            motherChanges: "You may experience Braxton Hicks contractions.",
            tips: [
                "Practice relaxation techniques",
                "Stay active with gentle exercises",
                "Keep track of baby's movements"
            ]
        },
        26: {
            size: "Zucchini (23 cm, 760 g)",
            description: "The lungs are producing surfactant, a substance critical for breathing after birth.",
            motherChanges: "You may feel more pressure in your pelvic region.",
            tips: [
                "Wear comfortable, supportive footwear",
                "Practice Kegel exercises",
                "Continue healthy eating habits"
            ]
        },
        27: {
            size: "Cauliflower (24 cm, 870 g)",
            description: "The brain is developing rapidly. The baby starts blinking.",
            motherChanges: "You may feel more tired as your body works harder to support the baby.",
            tips: [
                "Rest when needed",
                "Continue staying active with light exercises",
                "Monitor your weight gain"
            ]
        },
        28: {
            size: "Eggplant (25 cm, 1 kg)",
            description: "The baby begins dreaming (REM sleep) and has eyelashes.",
            motherChanges: "You might experience heartburn or indigestion.",
            tips: [
                "Eat smaller, frequent meals",
                "Avoid lying down right after eating",
                "Stay hydrated"
            ]
        },
        29: {
            size: "Butternut squash (26 cm, 1.2 kg)",
            description: "The baby's brain is wrinkled to create more surface area for neurons.",
            motherChanges: "You may notice more pronounced baby movements.",
            tips: [
                "Track fetal movements regularly",
                "Stay hydrated to reduce swelling",
                "Sleep with a pregnancy pillow for support"
            ]
        },
        30: {
            size: "Cabbage (27 cm, 1.3 kg)",
            description: "The baby's eyes are opening and closing, and vision is developing.",
            motherChanges: "Your uterus is now pushing higher into your ribcage, causing shortness of breath.",
            tips: [
                "Practice breathing exercises",
                "Avoid sudden movements",
                "Stay hydrated"
            ]
        },
        31: {
            size: "Four pounds (41 cm)",
            description: "Baby’s bones are fully developed, but still soft. The brain and lungs are still growing.",
            motherChanges: "The baby is getting bigger, and you may feel more pressure on your pelvis and bladder.",
            tips: [
                "Focus on pelvic floor exercises",
                "Rest with your feet elevated when possible",
                "Eat small, frequent meals to avoid heartburn"
            ]
        },
        32: {
            size: "Papaya (42 cm, 1.8 kg)",
            description: "Baby's immune system is maturing. They are gaining weight quickly and are less active due to lack of space.",
            motherChanges: "Your belly is expanding rapidly. You may feel an increase in backaches and fatigue.",
            tips: [
                "Use a back support belt to ease back pain",
                "Maintain good posture while sitting",
                "Hydrate and consume high-fiber foods to avoid constipation"
            ]
        },
        33: {
            size: "Pineapple (43 cm, 2.1 kg)",
            description: "Baby is beginning to store fat, which will help with body temperature regulation after birth.",
            motherChanges: "You may start experiencing Braxton Hicks contractions more frequently.",
            tips: [
                "Stay active, but avoid strenuous exercise",
                "Practice breathing techniques to manage stress",
                "Prepare for labor by taking a prenatal class"
            ]
        },
        34: {
            size: "Cantaloupe (44 cm, 2.3 kg)",
            description: "Baby is producing more red blood cells and practicing breathing movements.",
            motherChanges: "You may notice more pressure in your pelvis as the baby’s head begins to engage.",
            tips: [
                "Take naps when you feel tired",
                "Rest with your feet elevated to reduce swelling",
                "Continue prenatal visits to monitor baby’s growth"
            ]
        },
        35: {
            size: "Honeydew melon (45 cm, 2.5 kg)",
            description: "The baby is growing hair, and the body is now fully formed, though still gaining weight.",
            motherChanges: "You may feel more pressure in your pelvis and legs as the baby drops lower.",
            tips: [
                "Stay hydrated to prevent leg cramps",
                "Prepare your home for the baby’s arrival",
                "Continue taking prenatal vitamins"
            ]
        },
        36: {
            size: "Watermelon (46 cm, 2.7 kg)",
            description: "The baby’s organs are fully mature and ready to function outside the womb.",
            motherChanges: "Your uterus is nearing its full size, and you may experience more frequent contractions as your body prepares for labor.",
            tips: [
                "Make sure your hospital bag is packed",
                "Practice relaxation and breathing techniques for labor",
                "Get as much rest as possible"
            ]
        },
        37: {
            size: "Romanesco broccoli (47 cm, 2.9 kg)",
            description: "The baby’s skin is becoming less wrinkled as fat continues to accumulate.",
            motherChanges: "You may experience the sensation of the baby ‘dropping’ lower into your pelvis.",
            tips: [
                "Monitor for signs of labor",
                "Focus on staying calm and relaxed as the due date approaches",
                "Consult your healthcare provider if you have any concerns"
            ]
        },
        38: {
            size: "Pumpkin (48 cm, 3 kg)",
            description: "Baby is now considered full-term. They are working on fine-tuning their brain and lungs.",
            motherChanges: "You may notice more frequent or intense Braxton Hicks contractions.",
            tips: [
                "Stay alert for early signs of labor, such as water breaking or consistent contractions",
                "Continue practicing breathing exercises",
                "Stay in touch with your healthcare provider"
            ]
        },
        39: {
            size: "Watermelon (49 cm, 3.1 kg)",
            description: "Baby is fully developed and ready to be born. The lungs and brain are fully mature.",
            motherChanges: "You may feel more discomfort as the baby drops lower into the birth canal, signaling that labor may start soon.",
            tips: [
                "Stay as calm as possible as labor approaches",
                "Continue keeping your hospital bag ready",
                "Rest as much as possible and prepare for delivery"
            ]
        },
        40: {
            size: "50-53 cm (full-term baby, ~3.5 kg)",
            description: "Baby is fully developed and ready for birth. The lungs and brain continue to develop until the very end.",
            motherChanges: "You might experience Braxton Hicks contractions. The baby may drop lower into your pelvis (lightening).",
            tips: [
                "Ensure your hospital bag is ready",
                "Practice relaxation and breathing techniques",
                "Stay hydrated and rest often"
            ]
        }
        // Additional weeks can be added following the same structure
    },
    illustrations: {
        1: "week1_embryo.svg",
        2: "week2_cell_division.svg",
        // Add SVG illustrations for each week
        40: "full_term_baby.svg"
    }
};

export default developmentalData;
