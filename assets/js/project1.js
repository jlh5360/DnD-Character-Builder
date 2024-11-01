if (!document.getElementById) {
    //I'm in an OLD browser - chuck them...
    window.location = "https://www.google.com/chrome/";
}


// //============================ PRACTICE/EXAMPLE DATA ============================
// var data = {
//     init: ['Find A Date', 'what would you like?', 'man', 'woman'],
//     man: ['', 'what kind of man?', 'tall', 'short'],
//     tall: ['', 'what else?', 'thin', 'husky-like'],
//     'husky-like': ['', 'and what else?', 'beard', 'shave'],
//     woman: ['', 'what about her hair?', 'blonde', 'red'],
//     red: ['', 'chose red for loop', 'blonde', 'red']
// };


// var data = {
//     'init': ['Movie/TV Show Recommendation Engine', 'What would you like?', 'Movie', 'TV Show'],
//     'Movie': ['', 'What genre do you enjoy?', 'Action', 'Adventure', 'Romance', 'Mystery'],
//     'Action': ['', 'Do you want a new or old movie?', 'Recent', 'Old'],
//     'Adventure': ['', 'Do you want a survival or an exploration theme?', 'Survival', 'Exploration'],
//     'Romance': ['', 'Do you want a light-hearted or dramatic movie?', 'Light-hearted', 'Dramatic'],
//     'Mystery': ['', 'Do you want a crime or noir mystery movie?', 'Crime', 'Noir'],
//     'Recent': ['', 'Here is a recent action movie!', 'Lone Survior'],
//     'Old': ['', 'Here is an old action movie!', 'The Day After Tomorrow'],
//     'Survival': ['', 'Here is a survival adventure movie!', '127 Hours'],
//     'Exploration': ['', 'Here is an exploration adventure movie!', 'Intersteller'],
//     'Light-hearted': ['', 'Here is a light-hearted romance movie!', 'Crazy Rich Asians'],
//     'Dramatic': ['', 'Here is a dramatic romance movie!', 'The Notebook'],
//     'Crime': ['', 'Here is a crime mystery movie!', 'Seven'],
//     'Noir': ['', 'Here is a noir mystery movie!', 'Memento'],
//     'TV Show': ['', 'What genre do you enjoy?', 'Comedy', 'Sci-fi', 'Fantasy'],
//     'Comedy': ['', 'Do you want a family-friendly show?', 'Yes', 'No'],
//     'Sci-fi': ['', 'Do you prefer long-running or short TV shows?', 'Long', 'Short'],
//     'Fantasy': ['', 'Do you want a modern or ancient setting?', 'Modern', 'Ancient'],
//     'Yes': ['', 'Here is a family-friendly comedy!', 'Phineas and Ferb'],
//     'No': ['', 'Here is an adult comedy!', 'Solar Opposites'],
//     'Long': ['', 'Here is a long-running sci-fi TV show!', 'Doctor Who'],
//     'Short': ['', 'Here is a short-running sci-fi TV show!', 'Firefly'],
//     'Modern': ['', 'Here is a modern setting fantasy TV show!', 'Charmed'],
//     'Ancient': ['', 'Here is an ancient setting fantasy TV show!', 'The Witcher']
// };


//============================ MAIN DATA ============================
// const data = {
//     "init": ["D&D Character Builder", "Choose your race:", "Human", "Elf", "Dwarf", "Halfling", "Orc"],
//     "Human": ["", "Choose your class:", "Fighter", "Rogue", "Wizard", "Cleric", "Bard"],
//     "Elf": ["", "Choose your class:", "Ranger", "Sorcerer", "Druid", "Bard", "Warlock"],
//     "Dwarf": ["", "Choose your class:", "Barbarian", "Paladin", "Warlock", "Monk", "Ranger"],
//     "Halfling": ["", "Choose your class:", "Ranger", "Rogue", "Bard", "Wizard", "Cleric"],
//     "Orc": ["", "Choose your class:", "Barbarian", "Fighter", "Rogue", "Sorcerer", "Cleric"],
    
//     "Fighter": ["", "Choose your alignment:", "Lawful Good", "Chaotic Neutral", "Neutral Good", "Chaotic Good"],
//     "Rogue": ["", "Choose your alignment:", "Neutral Evil", "Chaotic Good", "Lawful Neutral", "Chaotic Neutral"],
//     "Wizard": ["", "Choose your alignment:", "Lawful Neutral", "Neutral Good", "Chaotic Evil", "True Neutral"],
//     "Cleric": ["", "Choose your alignment:", "Chaotic Evil", "Lawful Evil", "Chaotic Neutral", "Neutral Evil"],
//     "Bard": ["", "Choose your alignment:", "Neutral", "Chaotic Good", "Lawful Neutral", "True Neutral"],
//     "Ranger": ["", "Choose your favored enemy type:", "Undead", "Dragons", "Beasts", "Giants"],
//     "Sorcerer": ["", "Choose your bloodline:", "Dragon Ancestry", "Wild Magic", "Divine Soul", "Shadow Magic"],
//     "Druid": ["", "Choose your elemental focus:", "Fire", "Water", "Earth", "Air"],
//     "Barbarian": ["", "Choose your primal path:", "Path of the Berserker", "Path of the Totem Warrior", "Path of the Storm Herald", "Path of the Zealot"],
//     "Paladin": ["", "Choose your oath:", "Oath of Devotion", "Oath of Vengeance", "Oath of the Ancients", "Oath of Conquest"],
//     "Warlock": ["", "Choose your patron:", "The Fiend", "The Archfey", "The Great Old One", "The Celestial"],
//     "Monk": ["", "Choose your monastic tradition:", "Way of the Open Hand", "Way of Shadow", "Way of the Four Elements", "Way of the Kensei"],
    
//     "Alignment": ["", "Choose your deity:", "Bahamut", "Tiamat", "Pelor", "Corellon Larethian"],
//     "Favored Enemy": ["", "Choose your favored terrain:", "Forest", "Mountains", "Desert", "Swamp"],
//     "Bloodline": ["", "Choose your ancestry:", "Tiefling", "Aasimar", "Genasi", "Shifter"],
//     "Elemental Focus": ["", "Choose your elemental affinity:", "Lightning", "Ice", "Poison", "Radiant"],
//     "Primal Path": ["", "Choose your animal totem:", "Bear", "Wolf", "Eagle", "Tiger"],
//     "Oath": ["", "Swear your oath on:", "Your honor", "Your family", "Your deity", "Your weapon"],
//     "Patron": ["", "Pledge allegiance to:", "The Raven Queen", "The Undying", "The Celestial", "The Hexblade"],
//     "Monastic Tradition": ["", "Embrace the teachings of:", "The Way of the Long Death", "The Way of the Drunken Master", "The Way of the Sun Soul", "The Way of the Mercy"],
    
//     "Deity": ["", "Select a domain:", "Life", "Death", "Nature", "Tempest"],
//     "Favored Terrain": ["", "Choose your camouflage:", "Forest", "Swamp", "Desert", "Arctic"],
//     "Ancestry": ["", "Select a feature:", "Infernal Legacy", "Celestial Legacy", "Elemental Resistance", "Shifter Transformation"],
//     "Elemental Affinity": ["", "Select your spell focus:", "Thunder", "Frost", "Acid", "Necrotic"],
//     "Animal Totem": ["", "Choose your spirit animal:", "Raven", "Fox", "Bear", "Lion"],
//     "Sworn Oath": ["", "Swear your oath on:", "Your sword", "The land", "Your companions", "Your kingdom"]
// };


//Load data from JSON file using fetch API
function fetch_data() {
    //Switch either JSON data file paths to test reusability of code for different JSON data
    // return fetch('./assets/json/recommend_movies.json')
    return fetch('./assets/json/D&D_character_builder.json')
        .then(response => {
            //Testing if failed to fetch data
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            return response.json();
        })
        .then(data => {
            console.log(data);   //Logs the fetched data
            build(data);   //Builds the webpage with the data

            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


let data;


async function initialize_data() {
    data = await fetch_data();   //Wait for fetch_data() to complete
}


initialize_data();   //Call this function to initialize the data


let developer_info_div_element_created = false;
let h1_Element_created = false;
let j = 1;

let full_path = (window.location.pathname);
let page = full_path.split('/').pop();
let path = (full_path.replace(page, ""));
let domain = window.location.hostname;
let path_to_media;

if (window.location.pathname.includes("/index.html")) {
    path_to_media = (window.location.pathname.replace('/index.html', '/assets/media/'));
}
else {
    path_to_media = (window.location.pathname + 'assets/media/');
}


function build(dom) {
    //Checks if the browser is supported
    function isSupportedBrowser() {
        const supported_browsers = ["Chrome", "Firefox", "Edg", "Safari"];
        const browserAgent = navigator.userAgent;

        for (const browser of supported_browsers) {
            if (browserAgent.includes(browser)) {
                return true;
            }
        }

        return false;
    }


    //============================ WORK IN PROGRESS  |  NEEDS TO BE TESTED ============================
    //Redirects unsupported browsers
    function redirectUnsupportedBrowsers() {
        //If the browser is not supported (not either Chrome, Firefox, Edge, nor Safari)
        if (!isSupportedBrowser()) {
            //Sends/prompts this alert
            alert("This website does not support your current browser.  Please download the Google Chrome browser.");
            window.location.href = "https://www.google.com/chrome/";

            // //Prompts user to go to this link
            // confirm("Go to --> " + window.location.href);
        }
    }


    //Executes this function to redirect the user to a browser download link
    redirectUnsupportedBrowsers();


    // //============================ FOR DEBUGGING & TESTING ============================
    // //Alerts the current browser
    // function alertCurrentBrowser() {
    //     alert("You are currently using: " + navigator.userAgent);
    // }
    // alertCurrentBrowser();


    //Creates the headers and selects
    function create_selects() {
        if (!data) {
            console.error("Data not loaded yet.");
            return;
        }

        let hold;
        let i = 1;

        if (dom === "init") {
            hold = data[dom];
            
            // var data = fetch_data().then(json_data => {console.log(json_data);});
            // hold = data[dom];
            // console.log(data);
        }
        else {
            //Removes the last child while it's not the last child of its parent
            while (dom !== dom.parentNode.lastChild) {
                dom.parentNode.removeChild(dom.parentNode.lastChild);

                // console.log(document.getElementById("output"));
                // console.log("select_holder.lastChild" + document.getElementById("select_holder").lastChild);

                // if (dom === document.getElementById("select_holder").lastChild) {
                if (document.getElementById("output")) {
                    // document.getElementById("user_info_form").removeChild(document.getElementById('output'));
                    //Creates a div element with the id 'output'
                    let formElement = document.getElementById("user_info_form");
                    formElement.removeChild(document.getElementById("output"));
                }
                // }
            }
            
            // If there is anything in final output, delete it
            hold = data[dom.value];
        }

        if (hold != undefined) {
            if (developer_info_div_element_created == false) {
                //Build the header (h1) for the developer name
                let developer_info = document.createElement('h1');
                let developer_info_ID = ("developer_info");
                developer_info.setAttribute('id', developer_info_ID);
                let developer_info_developer_name = document.createTextNode('Jonathan Ho');
                developer_info.appendChild(developer_info_developer_name);

                //Display it by adding the h1 header element with its option elements to developer_info_holder (a div element)
                document.getElementById('developer_info_holder').prepend(developer_info);

                //Creates 3 break lines
                for (let j = 0; j < 3; j++) {
                    document.getElementById('developer_info_holder').prepend(document.createElement('br'));
                }
                
                //Builds the image (img) element for the developer photo
                let developer_info_img_element = document.createElement('img');
                let developer_info_photo_ID = ('developer_info_photo_ID');
                developer_info_img_element.setAttribute('id', developer_info_photo_ID);
                let developer_info_photo = (path_to_media + 'Ho_20210621_0542.jpg');
                developer_info_img_element.setAttribute('src', developer_info_photo);
                let developer_info_photo_title = ('Jonathan Ho photo');
                developer_info_img_element.setAttribute('title', developer_info_photo_title);
                // developer_info_img_element.setAttribute('style', 'border-radius:40px;width:50%;height:30%;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.30),0px 0px 20px rgba(0, 0, 0, 0.30);');
                
                //Display it by adding the h1 header element with its option elements to developer_info_holder (a div element)
                document.getElementById('developer_info_holder').prepend(developer_info_img_element);

                developer_info_div_element_created = true;

                //Build the header (h2) for the developer position
                let developer_info_position = document.createElement('div');
                let developer_info_position_ID = ("developer_info_position");
                developer_info_position.setAttribute('id', developer_info_position_ID);
                let developer_info_position_text_1 = document.createTextNode('Rochester Institute of Technology (RIT)');
                developer_info_position.appendChild(developer_info_position_text_1);
                developer_info_position.appendChild(document.createElement('br'));
                let developer_info_position_text_2 = document.createTextNode('Major: Cybersecurity');
                developer_info_position.appendChild(developer_info_position_text_2);
                developer_info_position.appendChild(document.createElement('br'));
                let developer_info_position_text_3 = document.createTextNode('Minors: Web Development & Mobile Development');
                developer_info_position.appendChild(developer_info_position_text_3);
                developer_info_position.appendChild(document.createElement('br'));

                //Display it by adding the h1 header element with its option elements to developer_info_holder (a div element)
                document.getElementById('developer_info_holder').appendChild(developer_info_position);
            }

            if (h1_Element_created == false) {
                let h1_Element = document.createElement('h1');
                let h1_ID = ("data_title");
                h1_Element.setAttribute('id', h1_ID);
                let h1_text = document.createTextNode(hold[0]);
                h1_Element.appendChild(h1_text);

                //Display it by adding the h1 header element with its option elements to select_holder (a div element)
                document.getElementById('container1').prepend(h1_Element);

                h1_Element_created = true;
            }

            // let div_Element = document.createElement('div');
            // let div_ID = ("div_" + j);
            // div_Element.setAttribute('id', div_ID);

            // //Display it by adding the select element with its option elements to a div element
            // document.getElementById('select_holder').appendChild(div_Element);

            //Build next header (h2) for the question/prompt
            let h2_Element = document.createElement('h2');
            let h2_ID = ("h2_" + j);
            h2_Element.setAttribute('id', h2_ID);
            h2_Element.setAttribute("style", "position:relative;left:300px");
            let h2_text = document.createTextNode(hold[i]);
            h2_Element.appendChild(h2_text);

            //Display it by adding the h1 header element with to select_holder (a div element)
            document.getElementById('select_holder').appendChild(h2_Element);

            //Animates/moves the h2 header element from right to left
            right_to_left_animation(h2_Element);

            // //Display it by adding the h1 header element to a div element
            // document.getElementById(div_ID).appendChild(h2_Element);

            //Build next select
            let selectElement = document.createElement('select');
            let selectID = ("select_" + j);
            selectElement.setAttribute('id', selectID);
            selectElement.setAttribute('title', selectID);
            selectElement.setAttribute('onchange', "build(this)");
            selectElement.setAttribute("style", "font-size:14px;font-weight:bold;border-width:2px;border-radius:5px;border-style:solid;position:relative;left:300px");
            selectElement.setAttribute("onmouseover", "this.style.cursor='pointer';");
            selectElement.setAttribute("onmouseout", "this.style.cursor='';");

            //Add an option placeholder
            let placeholder_optionElement = document.createElement("option");
            placeholder_optionElement.setAttribute('value', "");
            placeholder_optionElement.setAttribute('style', 'font-weight:bold;border-width:2px;border-radius:5px;border-style:solid');
            placeholder_optionElement.setAttribute("onmouseover", "this.style.cursor='pointer';");
            placeholder_optionElement.setAttribute("onmouseout", "this.style.cursor='';");
            
            let placeholder = document.createTextNode("--CHOOSE--");
            placeholder_optionElement.appendChild(placeholder);

            selectElement.appendChild(placeholder_optionElement);

            //Loops through the data dom to through to create an option of each value 
            for (i = 2; i < hold.length; i++) {
                let optionElement = document.createElement("option");
                let optionValue = hold[i];

                optionElement.setAttribute('value', optionValue);
                optionElement.setAttribute("style", "fontsize:14px;font-weight:bold;border-width:2px;border-radius:5px;border-style:solid");
                optionElement.setAttribute("onmouseover", "this.style.cursor='pointer';");
                optionElement.setAttribute("onmouseout", "this.style.cursor='';");

                let text = document.createTextNode(optionValue);
                optionElement.appendChild(text);

                selectElement.appendChild(optionElement);
            }

            //Display it by adding the select element with its option elements to select_holder (a div element)
            document.getElementById('select_holder').appendChild(selectElement);

            //Animates/moves the select element from right to left
            right_to_left_animation(selectElement);

            j++;
        }
        else {
            //Done with selects, build the final form
            display_final_result();
        }
    }

    //Executes/calls these functions
    create_selects();
    create_user_info_form();
}


let formCreated = false;


function create_user_info_form() {
// const create_user_info_form = () => {
    if (!formCreated) {
        //Build form
        let formElement = document.createElement('form');
        formElement.setAttribute('id', 'user_info_form');
        // formElement.setAttribute('name', 'user_info_form');
        formElement.setAttribute('onsubmit', 'return validate_form()');   //Add a form submission validation
        formElement.setAttribute('style', 'font-size:14px');
        // formElement.setAttribute('autocomplete', 'on');
        formElement.appendChild(document.createElement('br'));
        formElement.appendChild(document.createElement('br'));
        
        //Create first name input
        let firstNameLabel = document.createElement('label');
        firstNameLabel.setAttribute('for', 'first_name');
        firstNameLabel.setAttribute('style', 'font-weight:bold;font-size:18px');
        firstNameLabel.textContent = 'First Name: ';
        formElement.appendChild(firstNameLabel);
        let firstNameInput = document.createElement('input');
        firstNameInput.setAttribute('type', 'text');
        firstNameInput.setAttribute('id', 'first_name');
        firstNameInput.setAttribute('name', 'first_name');
        firstNameInput.setAttribute('style', 'font-weight:bold;border-width:2px;border-radius:5px;border-style:solid');
        firstNameInput.setAttribute('placeholder', 'Enter your first name');
        firstNameInput.setAttribute('autocomplete', 'on');

        // If localstorage.first_name is not empty, then set that value it has
        if (localStorage.getItem('first_name') !== null) {
            let first_name_value = localStorage.getItem('first_name');
            console.log(first_name_value);
            firstNameInput.setAttribute('value', first_name_value);
        }
        // If cookies.first_name is not empty, then set that value it has
        else if (GetCookie('first_name') !== null) {
            let first_name_value = GetCookie('first_name');
            // console.log(first_name_value);
            firstNameInput.setAttribute('value', first_name_value);
        }

        // firstNameInput.required = true;
        formElement.appendChild(firstNameInput);

        //Creates a break line
        formElement.appendChild(document.createElement('br'));

        //Create last name input
        let lastNameLabel = document.createElement('label');
        lastNameLabel.setAttribute('for', 'last_name');
        lastNameLabel.setAttribute('style', 'font-weight:bold;font-size:18px');
        lastNameLabel.textContent = 'Last Name: ';
        formElement.appendChild(lastNameLabel);
        let lastNameInput = document.createElement('input');
        lastNameInput.setAttribute('type', 'text');
        lastNameInput.setAttribute('id', 'last_name');
        lastNameInput.setAttribute('name', 'last_name');
        lastNameInput.setAttribute('style', 'font-weight:bold;border-width:2px;border-radius:5px;border-style:solid');
        lastNameInput.setAttribute('placeholder', 'Enter your last name');
        lastNameInput.setAttribute('autocomplete', 'on');

        // If localstorage.last_name is not empty, then set that value it has
        if (localStorage.getItem('last_name') !== null) {
            let last_name_value = localStorage.getItem('last_name');
            // console.log(last_name_value);
            lastNameInput.setAttribute('value', last_name_value);
        }
        // If cookies.last_name is not empty, then set that value it has
        else if (GetCookie('last_name') !== null) {
            let last_name_value = GetCookie('last_name');
            console.log(last_name_value);
            lastNameInput.setAttribute('value', last_name_value);
        }

        // lastNameInput.required = true;
        formElement.appendChild(lastNameInput);

        //Creates a break line
        formElement.appendChild(document.createElement('br'));

        //Create email input
        let emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.setAttribute('style', 'font-weight:bold;font-size:18px');
        emailLabel.textContent = 'Email: ';
        formElement.appendChild(emailLabel);

        // If localstorage.email is not empty, then set that value it has
        let emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('id', 'email');
        emailInput.setAttribute('name', 'email');
        emailInput.setAttribute('style', 'font-weight:bold;border-width:2px;border-radius:5px;border-style:solid');
        emailInput.setAttribute('placeholder', 'Enter your email');
        emailInput.setAttribute('autocomplete', 'on');

        // If localstorage.email is not empty, then set that value it has
        if (localStorage.getItem('email') !== null) {
            let email_value = localStorage.getItem('email');
            console.log(email_value);
            emailInput.setAttribute('value', email_value);
        }
        // If cookies.email is not empty, then set that value it has
        else if (GetCookie('email') !== null) {
            let email_value = GetCookie('email');
            // console.log(email_value);
            emailInput.setAttribute('value', email_value);
        }

        // emailInput.required = true;
        formElement.appendChild(emailInput);

        //Display the form by adding it to the user_info_form_holder (a div element)
        // document.getElementById('user_info_form_holder').appendChild(formElement);

        // Create buttons
        // let divElement = document.getElementById('buttons');

        // let brElement = document.createElement('br');

        //Creates 3 break lines
        for (let j = 0; j < 5; j++) {
            formElement.appendChild(document.createElement('br'));
        }

        // Create submit button
        let submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('id', 'submitButton');
        submitButton.setAttribute('class', 'formButtons');
        submitButton.setAttribute('value', 'Submit');
        submitButton.setAttribute('style', 'font-weight:bold;border-width:medium;border-radius:5px');
        submitButton.setAttribute('onclick', 'submit_data()');
        submitButton.setAttribute("onmouseover", "this.style.cursor='pointer';");
        submitButton.setAttribute("onmouseout", "this.style.cursor='';");
        formElement.appendChild(submitButton);

        // Create clear button
        let clearButton = document.createElement('input');
        clearButton.setAttribute('type', 'button');
        clearButton.setAttribute('id', 'clearButton');
        clearButton.setAttribute('class', 'formButtons');
        clearButton.setAttribute('value', 'Clear');
        clearButton.setAttribute('style', 'font-weight:bold;border-width:medium;border-radius:5px');
        clearButton.setAttribute('onclick', 'clear_everything()');
        clearButton.setAttribute("onmouseover", "this.style.cursor='pointer';");
        clearButton.setAttribute("onmouseout", "this.style.cursor='';");
        formElement.appendChild(clearButton);

        //Creates 3 break lines
        for (let j = 0; j < 5; j++) {
            formElement.appendChild(document.createElement('br'));
        }

        // Display the form and buttons
        document.getElementById('user_info_form_holder').appendChild(formElement);
        formCreated = true;
    }
}


//Animates/moves the h2 header and select elements from right (off-screen) to left (on-screen)
function right_to_left_animation(element) {
    //The actual animation calculation to move the element from right (off-screen) to left (on-screen)
    function animate() {
        let target_element = document.getElementById(element.id);
        // console.log(element.id);
        let move_every_pixels = 15;   //5px
        // console.log(target_element);
        let start_position = parseInt(target_element.style.left);
        let end_position = 0;   //0px

        if (start_position > end_position) {
            //Moves the element horizontally
            target_element.style.left = (start_position - move_every_pixels + 'px');

            //Requests the next animation frame to continue the animation
            requestAnimationFrame(animate);
        }
    }

    //Initiates the animation by requesting the first frame
    requestAnimationFrame(animate);
}


function get_result() {
    let selections = document.querySelectorAll("select");
    let result = [];

    selections.forEach((select) => {
        if (select.value !== "") {
            result.push(select.value);
        }
    });

    return result;
}


//Displays the final result
function display_final_result() {
    let result = get_result();
    
    if (document.getElementById('output')) {
        //Creates a div element with the id 'output'
        let formElement = document.getElementById("user_info_form");
        formElement.removeChild(document.getElementById("output"));
    }

    //Creates a div element with the id 'output'
    let formElement = document.getElementById("user_info_form");
    let output_divElement = document.createElement('div');
    output_divElement.setAttribute('id', 'output');
    output_divElement.setAttribute('style', 'font-weight:bold;background-color:rgba(240, 240, 240, 0.185)');
    formElement.appendChild(output_divElement);

    let div_output = output_divElement;
    
    // div_output.textContent = `Choices: ${result.join(" > ")}`;

    let choices = document.createElement('h3');
    choices.setAttribute('id', 'choices');
    let choices_header_h2 = document.createTextNode('Choices:');
    let choices_header_text = document.createTextNode(`${result.join(" > ")}`);
    choices.appendChild(choices_header_h2);
    choices.appendChild(document.createElement('br'));
    choices.appendChild(choices_header_text);

    div_output.appendChild(choices);

    choices.appendChild(document.createElement('br'));
    choices.appendChild(document.createElement('br'));

    //==================================== WORKS | USE THIS IF I WANT ====================================
    let final_choice = document.createElement('h3');
    final_choice.setAttribute('id', 'final_choices');
    let final_output = (`${result[result.length - 1]}`);
    final_choice.setAttribute('value', final_output);
    let final_choice_header_h2 = document.createTextNode('Final Choice:');
    let final_choice_header_text = document.createTextNode(final_output);
    final_choice.appendChild(final_choice_header_h2);
    final_choice.appendChild(document.createElement('br'));
    final_choice.appendChild(final_choice_header_text);

    div_output.appendChild(final_choice);

    // let final_output_choice = (`Final Choice:  ${result.pop()}`);
    // final_output_header.appendChild(final_output_choice);

    // output.appendChild(final_output_header);


    // let choices = document.createElement('h2');
    // choices.setAttribute('id', 'choices');
    // choices.createTextNode("Choices");

    // output.appendChild(choices);
    // document.getElementById('output').appendChild(output);

    // let choices_text = document.createElement('p');
    // choices_text.textContent = `${result.join(" > ")}`;

    // output.appendChild(choices_text);
    // document.getElementById('output').appendChild(output);

    // document.getElementById('container3').appendChild('output');


    // //Check if the final data contains image URLs or paths
    // result.forEach((item) => {
    //     if (isValidImageURL(item)) {
    //         // Create an image element and set its source to the URL/path
    //         let imgElement = document.createElement("img");
    //         imgElement.src = item;
    //         imgElement.setAttribute("alt", "Image");
    //         output.appendChild(imgElement);
    //     }
    // });
}


// //Function to check if a string is a valid URL or path to an image
// function isValidImageURL(str) {
//     //Regular expression to match common image file extensions
//     const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;

//     //Checks if the string matches the URL pattern or has a valid image file extension
//     return /^(http|https|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(str) || imageExtensions.test(str);
// }


//Clears all selected options, user infromation, and localStorage/cookies
function clear_everything() {
    let selectHolder = document.getElementById('select_holder');
    // let userFormHolder = document.getElementById('user_info_form_holder');
    let output = document.getElementById("output");

    // //Clears the final output
    // output.textContent = "";

    //Clears all selections and headers
    while (selectHolder.lastChild) {
        selectHolder.removeChild(selectHolder.lastChild);
    };

    //Clears all user information from the form
    document.getElementById('first_name').value = "";
    document.getElementById('last_name').value = "";
    document.getElementById('email').value = "";
    // document.getElementById('final_output').value = "";
    
    //Removes user information stored in localStorage
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('email');
    localStorage.removeItem('final_choices');
    localStorage.removeItem('final_output');

    // alert(path);
    // alert(path.slice(0, -1));
    
    //Removes user information stored in cookies
    DeleteCookie('first_name', path.slice(0, -1), domain);
    DeleteCookie('last_name', path.slice(0, -1), domain);
    DeleteCookie('email', path.slice(0, -1), domain);
    DeleteCookie('final_choices', path.slice(0, -1), domain);
    DeleteCookie('final_output', path.slice(0, -1), domain);

    // //Debugging/Testing to know what the hostname and path are for this webpage
    // alert("Hostname:  " + window.location.hostname + "\nPath w/ file name:  " + window.location.pathname + "\nPath w/o file name:  " + path);

    // //Rebuilds the form from the beginning
    // build('init');
    // create_user_info_form();

    //Refreshes/Reloads the webpage
    location.reload();
}


// Validate the user information form
function validate_form() {
// const validate_form = () => {
    let firstName = document.getElementById('first_name');
    let lastName = document.getElementById('last_name');
    let email = document.getElementById('email');

    //Pattern to make sure they are only letters and the first letter is capital
    let validNamePattern = /^[A-Z][a-zA-Z]*$/;

    //Pattern to make sure it is in this format
    let validEmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    //Validaiton check
    let is_valid = true;

    //For tesing validations:
    //  - Need to use trim() to remove any leading and trailing whitespace characters on the value of an element
    //  - Need to test the elements with the validation patterns
    //Checks if first name is valid
    if (!firstName.value.trim() || !validNamePattern.test(firstName.value)) {
        firstName.style.borderColor = 'red';
        is_valid = false;
    }
    else {
        firstName.style.borderColor = '';   //Reset the border color back to normal
    }

    //Check if last name is valid
    if(!lastName.value.trim() || !validNamePattern.test(lastName.value)) {
        lastName.style.borderColor = 'red';
        is_valid = false;
    }
    else {
        lastName.style.borderColor = '';   //Reset the border color back to normal
    }

    //Check if email is valid
    if (!validEmailPattern.test(email.value)) {
        email.style.borderColor = 'red';
        is_valid = false;
    }
    else {
        email.style.borderColor = '';   //Reset the border color back to normal
    }

    return is_valid;   //Return true if all validations pass, otherwise false
}


function submit_data() {
    if (validate_form() == true) {
        let result = get_result();

        //Gets the user information
        let firstName = document.getElementById('first_name').value;
        let lastName = document.getElementById('last_name').value;
        let email = document.getElementById('email').value;

        //Gets the final output
        // let final_output = document.getElementById('output').textContent;

        // let final_output = document.getElementById('final_choices').value;  //undefined

        let final_choices = (`${result.join(" > ")}`);
        let final_output = (`${result[result.length - 1]}`);

        //If browser understands localStorage
        if (window.localStorage) {
            document.getElementById('output').firstChild.nodeValue="localStorage";

            //Stores user information in localStorage
            localStorage.setItem('first_name', firstName);
            localStorage.setItem('last_name', lastName);
            localStorage.setItem('email', email);
            localStorage.setItem('final_choices', final_choices);
            localStorage.setItem('final_output', final_output);

            //Alerts/notifies the user that the form has been sent
            alert("Your submission has been sent!");
        }
        else {
            document.getElementById('output').firstChild.nodeValue="cookies";

            //Stores user information in cookies
            SetCookie('first_name', firstName);
            SetCookie('last_name', lastName);
            SetCookie('email', email);
            SetCookie('final_choices', final_choices);
            SetCookie('final_output', final_output);

            //Alerts/notifies the user that the form has been sent
            alert("Your submission has been sent!");
        }
    }
    else {
        return false;
    }
}