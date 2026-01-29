// QuestionBank

const History = [
  {
    question: "Who was the founder of the Maratha Empire?",
    options: ["Sambhaji Maharaj", "Shivaji Maharaj", "Baji Rao I", "Rajaram Maharaj"],
    answer: "Shivaji Maharaj"
  },
  {
    question: "Which fort was captured by Shivaji Maharaj at the age of 16?",
    options: ["Raigad", "Pratapgad", "Torna Fort", "Sinhagad"],
    answer: "Torna Fort"
  },
  {
    question: "Who was known as the 'Lion of Punjab'?",
    options: ["Bhagat Singh", "Lala Lajpat Rai", "Udham Singh", "Sukhdev"],
    answer: "Lala Lajpat Rai"
  },
  {
    question: "Which queen fought bravely against the British in 1857?",
    options: ["Rani Lakshmibai", "Rani Durgavati", "Ahilyabai Holkar", "Begum Hazrat Mahal"],
    answer: "Rani Lakshmibai"
  },
  {
    question: "Who gave the slogan 'Jai Hind'?",
    options: ["Bhagat Singh", "Subhash Chandra Bose", "Mahatma Gandhi", "Lala Lajpat Rai"],
    answer: "Subhash Chandra Bose"
  },
  {
    question: "Who was the supreme commander of the Indian National Army (INA)?",
    options: ["Bhagat Singh", "Subhash Chandra Bose", "Rash Behari Bose", "Jawaharlal Nehru"],
    answer: "Subhash Chandra Bose"
  },
  {
    question: "The famous slogan 'Inquilab Zindabad' was popularized by whom?",
    options: ["Chandrashekhar Azad", "Bhagat Singh", "Ram Prasad Bismil", "Ashfaqulla Khan"],
    answer: "Bhagat Singh"
  },
  {
    question: "Which battle in 1576 symbolizes Rajput bravery and resistance?",
    options: ["Battle of Panipat", "Battle of Khanwa", "Battle of Haldighati", "Battle of Talikota"],
    answer: "Battle of Haldighati"
  },
  {
    question: "Who was the legendary Rajput warrior known for his courage at Haldighati?",
    options: ["Prithviraj Chauhan", "Rana Sanga", "Maharana Pratap", "Rana Kumbha"],
    answer: "Maharana Pratap"
  },
  {
    question: "Who was the great Ahom general who defeated the Mughals at the Battle of Saraighat?",
    options: ["Lachit Borphukan", "Rudra Singha", "Sukapha", "Chilarai"],
    answer: "Lachit Borphukan"
  },
  {
    question: "Which king is known for resisting repeated invasions of Mahmud of Ghazni?",
    options: ["Raja Bhoj", "Raja Dahir", "Jayapala", "Harsha"],
    answer: "Raja Dahir"
  },
  {
    question: "Who was the fearless freedom fighter known as 'Azad'?",
    options: ["Bhagat Singh", "Chandrashekhar Azad", "Sukhdev", "Rajguru"],
    answer: "Chandrashekhar Azad"
  },
  {
    question: "Which fort is known as the capital of Swarajya?",
    options: ["Sinhagad", "Pratapgad", "Raigad", "Purandar"],
    answer: "Raigad"
  },
  {
    question: "Who was the first woman ruler to lead a major Indian kingdom independently?",
    options: ["Rani Lakshmibai", "Rani Durgavati", "Ahilyabai Holkar", "Kittur Rani Chennamma"],
    answer: "Kittur Rani Chennamma"
  },
  {
    question: "Which warrior queen from Karnataka revolted against the British in 1824?",
    options: ["Rani Lakshmibai", "Rani Durgavati", "Kittur Rani Chennamma", "Velu Nachiyar"],
    answer: "Kittur Rani Chennamma"
  },
  {
    question: "Who was the first Indian woman to wage war against the British East India Company?",
    options: ["Rani Lakshmibai", "Velu Nachiyar", "Rani Durgavati", "Ahilyabai Holkar"],
    answer: "Velu Nachiyar"
  },
  {
    question: "Who was the great Gond queen known for her bravery against invasions?",
    options: ["Rani Lakshmibai", "Rani Durgavati", "Velu Nachiyar", "Ahilyabai Holkar"],
    answer: "Rani Durgavati"
  },
  {
    question: "Which freedom fighter threw a bomb in the Central Legislative Assembly in 1929?",
    options: ["Rajguru", "Bhagat Singh", "Udham Singh", "Chandrashekhar Azad"],
    answer: "Bhagat Singh"
  },
  {
    question: "Who assassinated British officer Saunders in 1928?",
    options: ["Bhagat Singh", "Rajguru", "Azad", "Bismil"],
    answer: "Rajguru"
  },
  {
    question: "Who avenged the Jallianwala Bagh massacre in 1940?",
    options: ["Bhagat Singh", "Udham Singh", "Azad", "Bose"],
    answer: "Udham Singh"
  },
  {
    question: "Which movement called for complete independence (Purna Swaraj)?",
    options: ["Non-Cooperation", "Civil Disobedience", "Quit India", "Purna Swaraj Declaration"],
    answer: "Purna Swaraj Declaration"
  },
  {
    question: "Who hoisted the Indian National Flag at Red Fort in 1945?",
    options: ["Subhash Chandra Bose", "INA soldiers", "Bhagat Singh", "Nehru"],
    answer: "INA soldiers"
  },
  {
    question: "Which Sikh warrior founded the Sikh Empire?",
    options: ["Guru Gobind Singh", "Maharaja Ranjit Singh", "Banda Singh Bahadur", "Hari Singh Nalwa"],
    answer: "Maharaja Ranjit Singh"
  },
  {
    question: "Who was the legendary Sikh general known as the 'Conqueror of the North-West'?",
    options: ["Banda Singh Bahadur", "Hari Singh Nalwa", "Ranjit Singh", "Lachit Borphukan"],
    answer: "Hari Singh Nalwa"
  },
  {
    question: "Which slogan reflects India's spirit of unity and resistance?",
    options: ["Vande Mataram", "Jai Jawan Jai Kisan", "Satyameva Jayate", "All of the above"],
    answer: "All of the above"
  }
];

const Geography = [
  {
    question: "Which is the longest river in India?",
    options: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
    answer: "Ganga"
  },
  {
    question: "Which is the highest mountain peak in India?",
    options: ["Kanchenjunga", "Nanda Devi", "Mount Everest", "K2"],
    answer: "Kanchenjunga"
  },
  {
    question: "Which state in India has the longest coastline?",
    options: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    answer: "Gujarat"
  },
  {
    question: "Which desert is located in India?",
    options: ["Gobi", "Sahara", "Thar", "Kalahari"],
    answer: "Thar"
  },
  {
    question: "Which is the largest continent in the world?",
    options: ["Africa", "Europe", "Asia", "North America"],
    answer: "Asia"
  },
  {
    question: "Which is the smallest continent in the world?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: "Australia"
  },
  {
    question: "Which ocean is the deepest in the world?",
    options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Which latitude passes through the middle of India?",
    options: ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Prime Meridian"],
    answer: "Tropic of Cancer"
  },
  {
    question: "Which Indian state receives the highest rainfall?",
    options: ["Assam", "Meghalaya", "Kerala", "West Bengal"],
    answer: "Meghalaya"
  },
  {
    question: "Which is the largest plateau in India?",
    options: ["Chota Nagpur Plateau", "Malwa Plateau", "Deccan Plateau", "Bundelkhand Plateau"],
    answer: "Deccan Plateau"
  },
  {
    question: "Which is the southernmost point of India?",
    options: ["Kanyakumari", "Indira Point", "Rameswaram", "Minicoy"],
    answer: "Indira Point"
  },
  {
    question: "Which country has the longest coastline in the world?",
    options: ["USA", "Australia", "Russia", "Canada"],
    answer: "Canada"
  },
  {
    question: "Which river is known as the 'Sorrow of Bengal'?",
    options: ["Ganga", "Kosi", "Damodar", "Brahmaputra"],
    answer: "Damodar"
  },
  {
    question: "Which Indian river flows westward?",
    options: ["Godavari", "Krishna", "Narmada", "Cauvery"],
    answer: "Narmada"
  },
  {
    question: "Which is the largest island in the world?",
    options: ["Sri Lanka", "Greenland", "Madagascar", "New Guinea"],
    answer: "Greenland"
  },
  {
    question: "Which continent has no permanent human population?",
    options: ["Australia", "Arctic", "Antarctica", "Europe"],
    answer: "Antarctica"
  },
  {
    question: "Which mountain range separates Europe and Asia?",
    options: ["Alps", "Andes", "Ural Mountains", "Rockies"],
    answer: "Ural Mountains"
  },
  {
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
    answer: "Bengaluru"
  },
  {
    question: "Which Indian river is the longest river flowing entirely within India?",
    options: ["Yamuna", "Godavari", "Kaveri", "Mahanadi"],
    answer: "Godavari"
  },
  {
    question: "Which sea lies to the west of India?",
    options: ["Bay of Bengal", "Arabian Sea", "Red Sea", "Caspian Sea"],
    answer: "Arabian Sea"
  },
  {
    question: "Which line divides the Earth into Northern and Southern Hemisphere?",
    options: ["Tropic of Cancer", "Prime Meridian", "Equator", "International Date Line"],
    answer: "Equator"
  },
  {
    question: "Which Indian state shares the longest international border?",
    options: ["Assam", "Rajasthan", "West Bengal", "Uttar Pradesh"],
    answer: "Rajasthan"
  },
  {
    question: "Which is the hottest place in India?",
    options: ["Jaisalmer", "Phalodi", "Nagpur", "Bikaner"],
    answer: "Phalodi"
  },
  {
    question: "Which plateau is called the 'Roof of the World'?",
    options: ["Tibetan Plateau", "Deccan Plateau", "Iranian Plateau", "Mongolian Plateau"],
    answer: "Tibetan Plateau"
  },
  {
    question: "Which Indian state is known as the 'Land of Rising Sun'?",
    options: ["Assam", "Sikkim", "Arunachal Pradesh", "Nagaland"],
    answer: "Arunachal Pradesh"
  }
];

const General_Knowledge = [
  {
    question: "Who is known as the Father of the Indian Constitution?",
    options: ["Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Rajendra Prasad", "Sardar Patel"],
    answer: "Dr. B. R. Ambedkar"
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Tiger", "Leopard"],
    answer: "Tiger"
  },
  {
    question: "Which country hosted the G20 Summit 2023?",
    options: ["USA", "India", "Japan", "Indonesia"],
    answer: "India"
  },
  {
    question: "Who is the current President of India?",
    options: ["Ram Nath Kovind", "Droupadi Murmu", "Pranab Mukherjee", "Narendra Modi"],
    answer: "Droupadi Murmu"
  },
  {
    question: "Who is the current Prime Minister of India?",
    options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Arvind Kejriwal"],
    answer: "Narendra Modi"
  },
  {
    question: "Which Indian mission successfully landed near the Moon’s south pole in 2023?",
    options: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan"],
    answer: "Chandrayaan-3"
  },
  {
    question: "Which Indian city hosted the G20 Leaders’ Summit?",
    options: ["Mumbai", "Delhi", "Bengaluru", "Hyderabad"],
    answer: "Delhi"
  },
  {
    question: "Which Indian digital payment system is globally recognized?",
    options: ["Paytm", "UPI", "NEFT", "RTGS"],
    answer: "UPI"
  },
  {
    question: "Who is known as the Missile Man of India?",
    options: ["Vikram Sarabhai", "APJ Abdul Kalam", "Homi Bhabha", "Satish Dhawan"],
    answer: "APJ Abdul Kalam"
  },
  {
    question: "Which country became the first to land on the Moon’s south pole?",
    options: ["USA", "Russia", "India", "China"],
    answer: "India"
  },
  {
    question: "Which Indian state launched the 'One District One Product' initiative?",
    options: ["Uttar Pradesh", "Gujarat", "Madhya Pradesh", "Rajasthan"],
    answer: "Uttar Pradesh"
  },
  {
    question: "Which Indian city is known as the Silicon Valley of India?",
    options: ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
    answer: "Bengaluru"
  },
  {
    question: "Which Indian mission focuses on solar research?",
    options: ["Mangalyaan", "Aditya-L1", "INSAT", "NavIC"],
    answer: "Aditya-L1"
  },
  {
    question: "Which international organization publishes the World Happiness Report?",
    options: ["WHO", "UN", "IMF", "World Bank"],
    answer: "UN"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    question: "Which Indian state has the highest population?",
    options: ["Maharashtra", "Bihar", "Uttar Pradesh", "West Bengal"],
    answer: "Uttar Pradesh"
  },
  {
    question: "Which Indian sportsperson won the first Olympic gold medal in athletics?",
    options: ["Milkha Singh", "Neeraj Chopra", "Abhinav Bindra", "PV Sindhu"],
    answer: "Neeraj Chopra"
  },
  {
    question: "Which gas is responsible for global warming?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which Indian festival is known as the Festival of Lights?",
    options: ["Holi", "Diwali", "Navratri", "Durga Puja"],
    answer: "Diwali"
  },
  {
    question: "Which Indian river is known as the lifeline of Madhya Pradesh?",
    options: ["Betwa", "Chambal", "Narmada", "Tapti"],
    answer: "Narmada"
  },
  {
    question: "Which country will host the Summer Olympics 2028?",
    options: ["France", "Japan", "USA", "Australia"],
    answer: "USA"
  },
  {
    question: "Which Indian scheme focuses on women empowerment?",
    options: ["Beti Bachao Beti Padhao", "Skill India", "Digital India", "Startup India"],
    answer: "Beti Bachao Beti Padhao"
  },
  {
    question: "Which Indian bank introduced the RuPay card?",
    options: ["RBI", "NPCI", "SBI", "HDFC"],
    answer: "NPCI"
  },
  {
    question: "Which Indian city topped the Swachh Survekshan ranking recently?",
    options: ["Indore", "Bhopal", "Surat", "Chandigarh"],
    answer: "Indore"
  },
  {
    question: "Which Indian satellite navigation system is called India’s GPS?",
    options: ["INSAT", "NavIC", "GSAT", "IRNSS"],
    answer: "NavIC"
  }
];

const Science = [
  {
    question: "Which part of the cell is known as the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
    answer: "Mitochondria"
  },
  {
    question: "Which vitamin helps in blood clotting?",
    options: ["Vitamin A", "Vitamin B", "Vitamin K", "Vitamin D"],
    answer: "Vitamin K"
  },
  {
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Ampere"
  },
  {
    question: "Which gas is mainly responsible for the greenhouse effect?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    question: "Which organ purifies blood in the human body?",
    options: ["Lungs", "Liver", "Heart", "Kidney"],
    answer: "Kidney"
  },
  {
    question: "What type of energy is stored in food?",
    options: ["Thermal energy", "Electrical energy", "Chemical energy", "Mechanical energy"],
    answer: "Chemical energy"
  },
  {
    question: "Which planet has the largest number of moons?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Saturn"
  },
  {
    question: "Which acid is present in lemon?",
    options: ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
    answer: "Citric acid"
  },
  {
    question: "Which blood cells help in fighting infections?",
    options: ["Red blood cells", "Platelets", "White blood cells", "Plasma"],
    answer: "White blood cells"
  },
  {
    question: "What is the speed of light in vacuum?",
    options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10⁷ m/s"],
    answer: "3 × 10⁸ m/s"
  },
  {
    question: "Which element is essential for making nuclear reactors?",
    options: ["Iron", "Uranium", "Copper", "Aluminium"],
    answer: "Uranium"
  },
  {
    question: "Which process converts sugar into alcohol?",
    options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
    answer: "Fermentation"
  },
  {
    question: "Which part of the human brain controls balance?",
    options: ["Cerebrum", "Medulla", "Cerebellum", "Pons"],
    answer: "Cerebellum"
  },
  {
    question: "Which gas is released during photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Zinc", "Lead"],
    answer: "Mercury"
  },
  {
    question: "What type of mirror is used in vehicle headlights?",
    options: ["Plane mirror", "Convex mirror", "Concave mirror", "Cylindrical mirror"],
    answer: "Concave mirror"
  },
  {
    question: "Which hormone regulates blood sugar level?",
    options: ["Thyroxine", "Adrenaline", "Insulin", "Growth hormone"],
    answer: "Insulin"
  },
  {
    question: "Which scientist proposed the theory of relativity?",
    options: ["Newton", "Einstein", "Galileo", "Bohr"],
    answer: "Einstein"
  },
  {
    question: "Which part of the plant conducts water?",
    options: ["Phloem", "Xylem", "Root hair", "Cambium"],
    answer: "Xylem"
  },
  {
    question: "What is the chemical symbol of sodium?",
    options: ["So", "Sd", "Na", "Sn"],
    answer: "Na"
  },
  {
    question: "Which disease is caused by deficiency of iodine?",
    options: ["Rickets", "Scurvy", "Goitre", "Anaemia"],
    answer: "Goitre"
  },
  {
    question: "Which force keeps planets in their orbit?",
    options: ["Magnetic force", "Frictional force", "Gravitational force", "Electrostatic force"],
    answer: "Gravitational force"
  },
  {
    question: "Which organelle is responsible for protein synthesis?",
    options: ["Mitochondria", "Ribosome", "Lysosome", "Vacuole"],
    answer: "Ribosome"
  },
  {
    question: "Which metal is used in making electric wires?",
    options: ["Iron", "Copper", "Silver", "Aluminium"],
    answer: "Copper"
  },
  {
    question: "Which phenomenon causes the blue color of the sky?",
    options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
    answer: "Scattering"
  }
];

const Entertainment = [
  {
    question: "Who is known as the 'King of Bollywood'?",
    options: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Hrithik Roshan"],
    answer: "Shah Rukh Khan"
  },
  {
    question: "Which Bollywood movie features the song 'Jai Ho'?",
    options: ["Lagaan", "Slumdog Millionaire", "Dangal", "Rang De Basanti"],
    answer: "Slumdog Millionaire"
  },
  {
    question: "Who is known as the 'Perfectionist' of Bollywood?",
    options: ["Aamir Khan", "Akshay Kumar", "Ajay Devgn", "Ranbir Kapoor"],
    answer: "Aamir Khan"
  },
  {
    question: "Which movie made the dialogue 'Mogambo Khush Hua' famous?",
    options: ["Mr. India", "Sholay", "Don", "Karan Arjun"],
    answer: "Mr. India"
  },
  {
    question: "Which actress is known as the 'Dream Girl' of Bollywood?",
    options: ["Hema Malini", "Madhuri Dixit", "Sridevi", "Rekha"],
    answer: "Hema Malini"
  },
  {
    question: "Who sang the song 'Tum Hi Ho'?",
    options: ["Atif Aslam", "Arijit Singh", "Sonu Nigam", "KK"],
    answer: "Arijit Singh"
  },
  {
    question: "Which Bollywood movie is based on the life of Milkha Singh?",
    options: ["Bhaag Milkha Bhaag", "Dangal", "Mary Kom", "Chak De India"],
    answer: "Bhaag Milkha Bhaag"
  },
  {
    question: "Who composed music for the movie 'Dil Se'?",
    options: ["Pritam", "AR Rahman", "Shankar-Ehsaan-Loy", "Vishal-Shekhar"],
    answer: "AR Rahman"
  },
  {
    question: "Which movie features the character 'Gabbar Singh'?",
    options: ["Deewar", "Sholay", "Zanjeer", "Don"],
    answer: "Sholay"
  },
  {
    question: "Which actress starred in the movie 'Queen'?",
    options: ["Deepika Padukone", "Kangana Ranaut", "Anushka Sharma", "Alia Bhatt"],
    answer: "Kangana Ranaut"
  },
  {
    question: "Which Bollywood movie is famous for the dialogue 'Kitne aadmi the?'",
    options: ["Sholay", "Don", "Deewar", "Karan Arjun"],
    answer: "Sholay"
  },
  {
    question: "Who is called the Nightingale of India?",
    options: ["Alka Yagnik", "Shreya Ghoshal", "Lata Mangeshkar", "Asha Bhosle"],
    answer: "Lata Mangeshkar"
  },
  {
    question: "Which Hollywood movie series features the character Harry Potter?",
    options: ["Avengers", "Twilight", "Harry Potter", "Lord of the Rings"],
    answer: "Harry Potter"
  },
  {
    question: "Who played Iron Man in Marvel movies?",
    options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
    answer: "Robert Downey Jr."
  },
  {
    question: "Which movie won the Oscar for Best Picture in 2023?",
    options: ["Avatar 2", "Everything Everywhere All at Once", "Top Gun Maverick", "Elvis"],
    answer: "Everything Everywhere All at Once"
  },
  {
    question: "Which Indian web series is based on the theme of politics and power?",
    options: ["Sacred Games", "Mirzapur", "Panchayat", "The Family Man"],
    answer: "Sacred Games"
  },
  {
    question: "Which actor played the role of Sanju in the movie 'Sanju'?",
    options: ["Ranbir Kapoor", "Ranveer Singh", "Vicky Kaushal", "Ayushmann Khurrana"],
    answer: "Ranbir Kapoor"
  },
  {
    question: "Which movie features the song 'Kal Ho Naa Ho'?",
    options: ["Kabhi Khushi Kabhie Gham", "Kal Ho Naa Ho", "Veer-Zaara", "My Name Is Khan"],
    answer: "Kal Ho Naa Ho"
  },
  {
    question: "Who is known as the 'Queen of Pop' internationally?",
    options: ["Adele", "Taylor Swift", "Madonna", "Rihanna"],
    answer: "Madonna"
  },
  {
    question: "Which South Indian movie became a global hit with the song 'Naatu Naatu'?",
    options: ["Baahubali", "Pushpa", "RRR", "KGF"],
    answer: "RRR"
  },
  {
    question: "Who directed the movie '3 Idiots'?",
    options: ["Karan Johar", "Rajkumar Hirani", "Rohit Shetty", "Imtiaz Ali"],
    answer: "Rajkumar Hirani"
  },
  {
    question: "Which Bollywood actor is known for the character 'Chulbul Pandey'?",
    options: ["Akshay Kumar", "Salman Khan", "Ajay Devgn", "Varun Dhawan"],
    answer: "Salman Khan"
  },
  {
    question: "Which singer is known for the song 'Kesariya'?",
    options: ["Arijit Singh", "Jubin Nautiyal", "Atif Aslam", "Darshan Raval"],
    answer: "Arijit Singh"
  },
  {
    question: "Which movie series features dinosaurs?",
    options: ["Transformers", "Jurassic Park", "Fast & Furious", "Avatar"],
    answer: "Jurassic Park"
  },
  {
    question: "Which Indian actor is known as the 'Megastar' of South Indian cinema?",
    options: ["Vijay", "Rajinikanth", "Allu Arjun", "Prabhas"],
    answer: "Rajinikanth"
  }
];

const Sports = [
  {
    question: "Which sport is MS Dhoni associated with?",
    options: ["Football", "Cricket", "Hockey", "Tennis"],
    answer: "Cricket"
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Which country won the ICC Cricket World Cup 2011?",
    options: ["Australia", "India", "Sri Lanka", "England"],
    answer: "India"
  },
  {
    question: "Which sport uses the term 'Love'?",
    options: ["Badminton", "Tennis", "Table Tennis", "Squash"],
    answer: "Tennis"
  },
  {
    question: "Who is the captain of the Indian cricket team (ODI format)?",
    options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which sport is P. V. Sindhu associated with?",
    options: ["Tennis", "Badminton", "Boxing", "Wrestling"],
    answer: "Badminton"
  },
  {
    question: "Which country hosts the Wimbledon tournament?",
    options: ["USA", "France", "Australia", "England"],
    answer: "England"
  },
  {
    question: "Which sport is known as the 'King of Sports'?",
    options: ["Cricket", "Hockey", "Football", "Basketball"],
    answer: "Football"
  },
  {
    question: "Which Indian athlete won gold medal in javelin throw at Tokyo Olympics?",
    options: ["Milkha Singh", "Neeraj Chopra", "Bajrang Punia", "Abhinav Bindra"],
    answer: "Neeraj Chopra"
  },
  {
    question: "How many minutes are there in a football match (without extra time)?",
    options: ["60", "70", "80", "90"],
    answer: "90"
  },
  {
    question: "Which sport is associated with the term 'Checkmate'?",
    options: ["Carrom", "Chess", "Ludo", "Badminton"],
    answer: "Chess"
  },
  {
    question: "Which Indian shooter won gold at the 2008 Olympics?",
    options: ["Abhinav Bindra", "Gagan Narang", "Vijay Kumar", "Jaspal Rana"],
    answer: "Abhinav Bindra"
  },
  {
    question: "Which sport uses a puck?",
    options: ["Cricket", "Ice Hockey", "Hockey", "Baseball"],
    answer: "Ice Hockey"
  },
  {
    question: "Which Indian Premier League team is known as CSK?",
    options: ["Chennai Super Kings", "Central Super Kings", "City Super Kings", "Chandigarh Super Kings"],
    answer: "Chennai Super Kings"
  },
  {
    question: "Which sport is played at Roland Garros?",
    options: ["Football", "Tennis", "Cricket", "Golf"],
    answer: "Tennis"
  },
  {
    question: "Which Indian sportsperson is nicknamed 'Captain Cool'?",
    options: ["Virat Kohli", "MS Dhoni", "Rahul Dravid", "Rohit Sharma"],
    answer: "MS Dhoni"
  },
  {
    question: "Which sport is associated with Lionel Messi?",
    options: ["Tennis", "Cricket", "Football", "Hockey"],
    answer: "Football"
  },
  {
    question: "Which Indian women's cricket team captain won the ICC award in 2023?",
    options: ["Smriti Mandhana", "Harmanpreet Kaur", "Mithali Raj", "Jhulan Goswami"],
    answer: "Smriti Mandhana"
  },
  {
    question: "Which country hosts the Olympics 2028?",
    options: ["France", "Japan", "USA", "Australia"],
    answer: "USA"
  },
  {
    question: "Which game uses dice?",
    options: ["Chess", "Ludo", "Carrom", "Badminton"],
    answer: "Ludo"
  },
  {
    question: "Which sport has the term 'Hat-trick'?",
    options: ["Cricket", "Football", "Both Cricket and Football", "Tennis"],
    answer: "Both Cricket and Football"
  },
  {
    question: "Which Indian badminton player won an Olympic medal?",
    options: ["Saina Nehwal", "P. V. Sindhu", "Both A and B", "None"],
    answer: "Both A and B"
  },
  {
    question: "Which sport is associated with the term 'Strike'?",
    options: ["Bowling", "Cricket", "Baseball", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which country invented cricket?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "England"
  }
];

const Technology = [
  {
    question: "Which source of energy is obtained from sunlight?",
    options: ["Coal", "Solar energy", "Wind energy", "Nuclear energy"],
    answer: "Solar energy"
  },
  {
    question: "What powers electric vehicles?",
    options: ["Petrol engine", "Diesel engine", "Lithium-ion battery", "Steam engine"],
    answer: "Lithium-ion battery"
  },
  {
    question: "Which Indian organization launches satellites into space?",
    options: ["DRDO", "ISRO", "BARC", "HAL"],
    answer: "ISRO"
  },
  {
    question: "Which system helps us find locations using maps on mobile phones?",
    options: ["Bluetooth", "Wi-Fi", "GPS", "NFC"],
    answer: "GPS"
  },
  {
    question: "Which device converts sunlight into electricity?",
    options: ["Inverter", "Generator", "Solar panel", "Battery"],
    answer: "Solar panel"
  },
  {
    question: "What allows people to make video calls from different countries?",
    options: ["Radio waves", "Internet", "Bluetooth", "Infrared"],
    answer: "Internet"
  },
  {
    question: "Which feature unlocks a phone using a fingerprint?",
    options: ["Password", "Pattern lock", "Biometric scan", "Face image"],
    answer: "Biometric scan"
  },
  {
    question: "Which payment method allows scanning a QR code?",
    options: ["Cheque", "Cash", "Digital payment", "Demand draft"],
    answer: "Digital payment"
  },
  {
    question: "Which system guides airplanes safely during flight?",
    options: ["Radar", "Thermometer", "Compass", "Speed meter"],
    answer: "Radar"
  },
  {
    question: "Which device helps doctors see bones inside the body?",
    options: ["ECG", "MRI", "X-ray", "Ultrasound"],
    answer: "X-ray"
  },
  {
    question: "Which type of train can run at very high speed using magnetic force?",
    options: ["Metro train", "Bullet train", "Maglev train", "Diesel train"],
    answer: "Maglev train"
  },
  {
    question: "Which system helps predict weather conditions?",
    options: ["Satellites", "GPS", "Wi-Fi", "Radio"],
    answer: "Satellites"
  },
  {
    question: "Which household device stores electricity during power cuts?",
    options: ["Inverter", "Fan", "Generator", "Transformer"],
    answer: "Inverter"
  },
  {
    question: "Which device helps detect heart activity?",
    options: ["Thermometer", "ECG machine", "BP monitor", "X-ray"],
    answer: "ECG machine"
  },
  {
    question: "Which method is commonly used for wireless charging?",
    options: ["Infrared rays", "Magnetic induction", "Radio signals", "Sound waves"],
    answer: "Magnetic induction"
  },
  {
    question: "Which invention made long-distance communication instant?",
    options: ["Telegraph", "Telephone", "Radio", "Smartphone"],
    answer: "Smartphone"
  },
  {
    question: "Which device helps farmers irrigate fields automatically?",
    options: ["Manual pump", "Smart irrigation system", "Bucket system", "Canal gate"],
    answer: "Smart irrigation system"
  },
  {
    question: "Which fuel is considered cleaner for the environment?",
    options: ["Coal", "Petrol", "CNG", "Diesel"],
    answer: "CNG"
  },
  {
    question: "Which machine helps lift heavy materials at construction sites?",
    options: ["Forklift", "Crane", "Pulley", "Elevator"],
    answer: "Crane"
  },
  {
    question: "Which feature allows cars to detect obstacles automatically?",
    options: ["Horn system", "Sensor-based system", "Headlight system", "Manual brakes"],
    answer: "Sensor-based system"
  },
  {
    question: "Which device allows watching programs through satellites?",
    options: ["Cable TV", "DTH", "Radio", "Internet modem"],
    answer: "DTH"
  },
  {
    question: "Which innovation allows robots to assist in surgeries?",
    options: ["Manual tools", "Robotic arms", "Thermometers", "Scanners"],
    answer: "Robotic arms"
  },
  {
    question: "Which method helps reduce plastic waste?",
    options: ["Burning waste", "Recycling", "Landfilling", "Dumping"],
    answer: "Recycling"
  },
  {
    question: "Which system allows smart homes to control lights automatically?",
    options: ["Manual switch", "Remote control", "Automation system", "Power cable"],
    answer: "Automation system"
  },
  {
    question: "Which development made online learning possible worldwide?",
    options: ["Television", "Internet connectivity", "Radio signals", "Printed books"],
    answer: "Internet connectivity"
  }
];



//declaring the global variable for storing selected question count, and category 
let selectedCategory="";
let selectedQuesCount=0;
let Quiztime=0;
let QuestionBank=[];
let timeLeft=0;
let timerInterval=null;
let answer={};
let choosed={};
let score=0;

const cards= document.querySelectorAll(".card");
const popupOverlay=document.getElementById("quizPopup");
const popupCard = document.querySelector(".popup-card");
const Category=document.getElementById("popupCategory");

const quizData= {
    History,
    Geography,
    General_Knowledge,
    Science,
    Entertainment,
    Sports,
    Technology
};
//open the popup on clicking on the card
cards.forEach( (card) =>{
    card.addEventListener("click", () => {
        popupOverlay.classList.remove("hidden");
        Category.innerHTML=card.id + " Quiz";
        selectedCategory=card.id;
        QuestionBank=quizData[selectedCategory];
        // console.log(selectedCategory);
        console.log(QuestionBank);
    });
});

// close popup , when clicking outside the popup

popupOverlay.addEventListener("click",()=>{
    popupOverlay.classList.add("hidden");
})

//prevent closing when clicking inside popup
popupCard.addEventListener("click",(e)=>{
    e.stopPropagation();
})

//selecting the Question buttons 
const Qbtns = document.querySelectorAll(".q-btn");

Qbtns.forEach((btn)=>{
    //on single click the button will be selected 
    btn.addEventListener("click",()=>{
        //remove the css from already selected btn : one btn selcted at a time
        Qbtns.forEach( (b)=>{
            b.style.backgroundColor="white";
            b.style.color="#6366f1";
        });
        selectedQuesCount=Number(btn.id);
        if(selectedQuesCount === 5) Quiztime=30;
        else Quiztime=60;
        // console.log(Quiztime);
        //apply the css on selected btn
        btn.style.backgroundColor="#6366f1";
        btn.style.color="white";
    });

    //On dbl - click it is dis selected.
    btn.addEventListener("dblclick",()=>{
        btn.style.backgroundColor="white";
        btn.style.color="#6366f1";
        selectedQuesCount=0;
    })
});

//Start button 

const start=document.getElementById("start");

start.addEventListener("click",()=>{
    if(!selectedCategory || selectedQuesCount===0){
        alert("Please Select Category And no. of Questions. ");
        return;
    }
    startQuiz();
});

//For Selecting the random Questions , function will return array of random Questions

function SelectQuestion(){
    const arr= [];
    let i=0;
    let temp=[...QuestionBank];
    let len=temp.length;
    // console.log(length);
    while(i<selectedQuesCount){
        const index=Math.floor(Math.random()*len);
        arr.push(temp[index]);
        [temp[index],temp[len-1]] = [temp[len-1],temp[index]];
        len--,i++;
    }
    return arr;
};

function startTimer(){
    timeLeft=Quiztime;

    const timerElement= document.getElementById("timer");
    timerElement.innerText= timeLeft +" seconds left";

    if(timerInterval){
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(()=>{
        timeLeft--;
        timerElement.innerText= timeLeft + " seconds left";

        if(timeLeft <= 0){
            clearInterval(timerInterval);
            endQuiz();
        }
    },1000);
}

function showQuestion(Question, index) {

    const Ques = document.getElementById("questionText");
    Ques.innerText = Question.question;

    const options = document.querySelectorAll(".option-btn");

    // correct answer index
    const correctIndex =
        Question.options.indexOf(Question.answer);

    // reset UI
    options.forEach(btn => {
        btn.style.background = "white";
        btn.style.color = "black";
        btn.style.borderColor = "#e5e7eb";
    });

    options.forEach((btn, i) => {

        btn.innerText = Question.options[i];

        // restore previous selection
        if (choosed[index] === i) {
            btn.style.background = "#eef2ff";
            btn.style.borderColor = "#6366f1";
            btn.style.color = "#4f46e5";
        }

        btn.onclick = () => {

            options.forEach(b => {
                b.style.background = "white";
                b.style.color = "black";
                b.style.borderColor = "#e5e7eb";
            });

            btn.style.background = "#eef2ff";
            btn.style.borderColor = "#6366f1";
            btn.style.color = "#4f46e5";

            choosed[index] = i;        // selected option index
            answer[index] = correctIndex; // correct option index
        };
    });
}

const category=document.getElementById("quizCategory");
const nextbtn=document.getElementById("nextBtn");
const prevbtn=document.getElementById("prevBtn");
const resultUI = document.getElementById("ResultUI");

function startQuiz(){
    resultUI.classList.add("hidden");
    popupOverlay.classList.add("hidden"); //popup will hide
    document.getElementById("homeUI").classList.add("hidden"); //home page will hide

    document.getElementById("quizUI").classList.remove("hidden"); //show Quiz UI
    category.innerText=selectedCategory + " Quiz";
    
    const SelectedQues= SelectQuestion();
    let index=0;

    startTimer();
    showQuestion(SelectedQues[index],index);
    
    //Next Question
    nextbtn.onclick= () =>{
        if(index<SelectedQues.length-1){
        index++;
        showQuestion(SelectedQues[index],index);
        }
    };
    //Previous Question
    prevbtn.onclick= ()=>{
        if(index>0){
        index--;
        showQuestion(SelectedQues[index],index);
        }
    };
}

//function for calculating the final score;
function FindScore() {
    score = 0;
    for (let i = 0; i < selectedQuesCount; i++) {
        if (choosed[i] === answer[i]) {
            score++;
        }
    }
    return score;
}



const finalScoreText = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

const restartBtn = document.getElementById("restartQuiz");
const homeBtn = document.getElementById("goHome");
//function to end the Quiz
function endQuiz() {

    clearInterval(timerInterval);

    score=FindScore();
    // hide quiz
    document.getElementById("quizUI").classList.add("hidden");
    // show result
    resultUI.classList.remove("hidden");
    // score display
    finalScoreText.innerText =
        `${score} / ${selectedQuesCount}`;

    // performance message
    const percent = (score / selectedQuesCount) * 100;
    if (percent >= 80) {
        resultMessage.innerText = "Outstanding performance 🌟";
    } 
    else if (percent >= 50) {
        resultMessage.innerText = "Good job! Keep improving 💪";
    } 
    else {
        resultMessage.innerText = "Don’t worry — practice makes perfect 😊";
    }
}

restartBtn.addEventListener("click", () => {

    resultUI.classList.add("hidden");
    document.getElementById("homeUI").classList.remove("hidden");

    resetQuiz();
});

homeBtn.addEventListener("click", () => {
    resultUI.classList.add("hidden");
    document.getElementById("homeUI").classList.remove("hidden");

    resetQuiz();
});

function resetQuiz() {

    selectedCategory = "";
    selectedQuesCount = 0;
    Quiztime = 0;

    QuestionBank = [];
    finalQuestions = [];

    score = 0;
    answer = {};
    choosed = {};

    timeLeft = 0;
    clearInterval(timerInterval);

    // reset question buttons UI
    document.querySelectorAll(".q-btn").forEach(btn => {
        btn.style.background = "white";
        btn.style.color = "#6366f1";
    });
}

