//Scroll Elements

document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');

    if (window.scrollY > 0) {
        header.classList.add('nav-got-scrolled');
    } else {
        header.classList.remove('nav-got-scrolled')
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden');
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));

{
    const Questions = [{
        q: "How many people live in your household?",
        a: [{ text: "1", points: 30 },
        { text: "2", points: 25 },
        { text: "3", points: 20 },
        { text: "4", points: 15 },
        { text: "5", points: 10 }
        ]
     
    },
    {
        q: "How is your Home heated? - You may find this on your AC Bill",
        a: [{ text: "Natrual Gas", points: 60 },
        { text: "Electric", points: 80 },
        { text: "Oil", points: 100 },
        { text: "Renewable/Green", points: 0 },
        { text: "No Heating", points: 0 }
        ]
    },
    {
        q: "How many individual faucets and toilets do you have in your home?",
        a: [{ text: "Less than 3", points: 5 },
        { text: "3-5", points: 10 },
        { text: "6-8", points: 15 },
        { text: "8-10", points: 20 },
        { text: "11+", points: 25 }
        ]
    },
    {
        q: "How many Motorcycles do you drive?",
        a: [{ text: "0", points: 0 },
        { text: "1", points: 15 },
        { text: "2", points: 30 },
        { text: "3+", points: 45 }
        ]
     
    },
    {
        q: "How many Non-Electric Small-Compact cars do you drive? - Mini Coopers",
        a: [{ text: "0", points: 0 },
        { text: "1", points: 35 },
        { text: "2", points: 70 },
        { text: "3+", points: 105 }
        ]
     
    },
    {
        q: "How many Non-Electric Mid-Sized cars do you drive? - SUVs",
        a: [{ text: "0", points: 0 },
        { text: "1", points: 60 },
        { text: "2", points: 120 },
        { text: "3+", points: 180 }
        ]
     
    },
    {
        q: "How many Non-Electric full-Sized cars do you drive? - CRVs",
        a: [{ text: "0", points: 0 },
        { text: "1", points: 60 },
        { text: "2", points: 120 },
        { text: "3+", points: 180 }
        ]
     
    },
    {
        q: "How many Non-Electric Trucks cars do you drive? - Pickup Trucks",
        a: [{ text: "0", points: 0 },
        { text: "1", points: 60 },
        { text: "2", points: 120 },
        { text: "3+", points: 180 }
        ]
     
    },
    {
        q: "How many Gallons of gas to you use per month - Average is 50",
        a: [{ text: "0", points: 0 },
        { text: "1 - 25", points: 50 },
        { text: "50 - 75", points: 100 },
        { text: "75+", points: 200 }
        ]
     
    },
    {
        q: "How do you get to School/Work?",
        a: [{ text: "Car", points: 50 },
        { text: "Public Transit", points: 25 },
        { text: "School Bus", points: 20 },
        { text: "Walk/Bike", points: 0 }
        ]
     
    },
    {
        q: "Do you use energy effeicent house appliances?",
        a: [{ text: "None at All", points: 150 },
        { text: "Some appliances", points: 100 },
        { text: "Most Appliances", points: 50 },
        { text: "All Appliances", points: 0 }
        ]
     
    },
    {
        q: "Does your HouseHold Compost?",
        a: [{ text: "Yes", points: -50 },
        { text: "No", points: 0 }
        ]
     
    }, 
    {
        q: "All my garbage from today could fit into a:",
        a: [{ text: "Less then shoebox", points: 0 },
        { text: "ShoeBox", points: 50 },
        { text: "Small Garbage Can", points: 100 },
        { text: "Kitchen Garbage can", points: 150 },
        { text: "More than a Kitchen Garbage Can", points: 200 }
        ]
     
    },
    {
        q: "Do you Recycle?",
        a: [{ text: "Yes", points: -30 },
        { text: "No", points: 150 }
        ]
     
    }, 
    {
        q: "How long are your showers?",
        a: [{ text: "0-10 Minutes", points: 30 },
        { text: "10-30 Minutes", points: 90 },
        { text: "30-60", points: 180 },
        { text: "60+", points: 270 }
        ]
     
    }
    ]
     
    let currQuestion = 0
    let score = 0
     
    function loadQues() {
        const question = document.getElementById("ques")
        const opt = document.getElementById("opt")
     
        question.textContent = Questions[currQuestion].q;
        opt.innerHTML = ""
     
        for (let i = 0; i < Questions[currQuestion].a.length; i++) {
            const choicesdiv = document.createElement("div");
            const choice = document.createElement("input");
            const choiceLabel = document.createElement("label");
     
            choice.type = "radio";
            choice.name = "answer";
            choice.value = i;
     
            choiceLabel.textContent = Questions[currQuestion].a[i].text;
     
            choicesdiv.appendChild(choice);
            choicesdiv.appendChild(choiceLabel);
            opt.appendChild(choicesdiv);
        }
    }
     
    loadQues();
     
    function loadScore() {
        const totalScore = document.getElementById("score")
        totalScore.textContent = `It would take ${Math.round((score/300)*10)/10} Earths if everyone lived like you!`
    }
     
     
    function nextQuestion() {
        if (currQuestion < Questions.length - 1) {
            currQuestion++;
            loadQues();
        } else {
            document.getElementById("opt").remove()
            document.getElementById("ques").remove()
            document.getElementById("btn").remove()
            loadScore();
        }
    }
     
    function checkAns() {
        const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
     
            score += Questions[currQuestion].a[selectedAns].points;
            console.log("Correct")
            nextQuestion();
    }
}//Quiz