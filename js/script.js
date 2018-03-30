requirejs.config({
   baseUrl:'js/lib'
});

requirejs(['jquery', 'modernizr'], function($, modernizr) {

    ////// shuffle function

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // pictures

    var picz = ['../images/ad.jpg',
               '../images/ad-2.jpg',
               '../images/ad-3.jpg',
               '../images/ad-4.jpg',
               '../images/ad-5.jpg'];

    // songs

    var songs = ['beats/breathe.mp3',
                'beats/everything.mp3',
                'beats/jazz.mp3',
                'beats/electric.mp3',
                'beats/preservation.mp3',
                'beats/88.mp3',
                'beats/93.mp3',
                'beats/cream.mp3',
                'beats/drop.mp3',
                'beats/far.mp3',
                'beats/knock.mp3',
                'beats/ny.mp3',
                'beats/ready.mp3',
                'beats/welcome.mp3',
                'beats/what.mp3',
                'beats/saliva.mp3',
                'beats/vibe.mp3'];

    shuffle(songs);

    // Words to use in freestyle

    var hype = ['about to break it down', 'about to drop some bars', 'lay down the beat', 'drop the beat', 'drop it', 'lets go', 'spin it', 'lay it down', 'pass the mic'];
    var greetings = ['hello,', 'yo', 'yo,', 'what up', 'what up,', 'sup', 'sup', 'yep', 'hi', 'whats happening', 'whats happening,', 'whats up', 'whats up', 'yeah', 'yeah,', 'hey', 'hey,', 'uh', 'uh huh', 'yup'];
    var be = ['is', 'was', 'will be', 'is not', 'was not', 'will not be', 'will never be', 'never was', 'never is', 'always is', 'always will be', 'I am', 'I be', 'we be', 'they be'];
    var r1 = ['mic', 'like', 'spike', 'bike', 'pike', 'turnpike', 'ride', 'slide', 'tide', 'pie', 'my', 'cry', 'tie', 'sty', 'pry', 'dry'];
    var r2 = ['tree', 'me', 'tee', 'see', 'plea', 'treat', 'meet', 'seat', 'feat', 'beat', 'beats', 'meats', 'pleat', 'treat', 'pee', 'dee', 'flee'];
    var r3 = ['rock', 'mock', 'tock', 'sock', 'clock', 'knock', 'hard knock', 'socks', 'block', 'blocks', 'pot', 'trot', 'sought'];
    var r4 = ['bark', 'mark', 'spark', 'stark', 'park', 'lark', 'dark', 'fart', 'part', 'apart', 'dart', 'mart', 'cart', 'tart'];
    var r5 = ['thug', 'mug', 'tug', 'rug', 'snug', 'pug', 'slug', 'plug', 'sun', 'ton', 'run', 'spun', 'done', 'fun', 'won'];
    var r6 = ['cat', 'tat', 'tats', 'mat', 'rat', 'splat', 'tap', 'nap', 'rap', 'rapping', 'pat', 'gnat', 'slap', 'trap', 'map', 'sap', 'dat', 'spat', 'bat', 'tap'];
    var r7 = ['spit', 'knit', 'bit', 'sit', 'pit', 'mit', 'never quit', 'quit', 'tip', 'sip', 'dip', 'fit', 'equip', 'equipped', 'rip', 'ripped'];
    var r8 = ['train', 'main', 'cane', 'rain', 'sane', 'plain', 'bane', 'dane', 'profane', 'propane', 'wane', 'sprain', 'crane', 'explain', 'twain'];
    var r9 = ['got', 'rot', 'not', 'spot', 'pop', 'top', 'sop', 'mop', 'crop', 'bop', 'beep bop', 'beep', 'bought', 'caught', 'dot'];
    var r10 = ['ready', 'steady', 'spaghetti', 'teddy', 'petty', 'yeti', 'many', 'confetti', 'penny', 'pennies', 'benny'];
    var r11 = ['find', 'wind', 'rewind', 'kind', 'mind', 'bind', 'rind', 'blind', 'twine', 'mine', 'sign', 'wine', 'time', 'rhyme', 'rhymes'];
    var r12 = ['rollin', 'bowlin', 'patrol', 'rovin', 'roving', 'rolling', 'riding', 'cruising', 'sliding', 'slipping', 'tripping', 'trip'];
    var r13 = ['ballin', 'balling', 'balla', 'calling', 'callin', 'stallin', 'crawling', 'impala', 'falling', 'apalling', 'shot callin', 'folly', 'trolly'];

    // themes

    var sports = ['ball', 'dunk', 'shoot', 'sports', 'basket', 'basketball', 'baseball', 'football', 'quarterback', 'coach', 'player', 'game', 'points', 'score', 'play', 'playing', 'soccer', 'slam dunk'];
    var fruits = ['banana', 'orange', 'apple', 'pineapple', 'tangerine', 'melon', 'watermelon', 'grape', 'fruit', 'grapefruit', 'lemon', 'lime', 'cherry', 'strawberry', 'raspberry', 'blueberry'];
    var veggies = ['veggies', 'vegetable', 'carrot', 'tomato', 'lettuce', 'broccoli', 'asparagus', 'pepper', 'mushroom'];
    var art = ['paint', 'paper', 'canvas', 'pen', 'pencil', 'collage', 'collab', 'piece', 'art', 'photo', 'photograph'];
    var landscape = ['river', 'mountain', 'plain', 'hill', 'lake', 'stream', 'rock', 'tree', 'bush', 'plant', 'flower', 'valley'];
    var mystical = ['dragon', 'werewolf', 'wizard', 'godzilla', 'zombie', 'witch', 'dinosaur', 't rex', 'monster', 'alien', 'u f o', 'lifeform'];
    var cars = ['audi', 'porsche', 'benz', 'mercedes', 'land rover', 'range rover', 'ferrari', 'chevy', 'subaru', 'race car', 'dragster'];
    var animals = ['monkey', 'aardvark', 'elephant', 'tiger', 'lion', 'gazelle', 'eagle', 'spider', 'bug', 'bird', 'fish', 'shark', 'whale', 'gorilla'];
    var thug = ['boss', 'old school', 'bawse', 'gangsta', 'fly', 'amigo', 'homy', 'friend', 'hero', 'champion', 'dawg', 'bro', 'brother', 'sister', 'mister', 'pal', 'dude', 'unstoppable'];
    var geo = ['USA', 'south america', 'north america', 'canada', 'mexico', 'chile', 'europe', 'africa', 'asia', 'polynesia', 'china', 'antarctica', 'states', 'region', 'country', 'city', 'town'];
    var cities = ['salt lake', 'LA', 'los angeles', 'new york', 'NY', 'atlanta', 'chicago', 'toronto', 'tokyo', 'london', 'madrid', 'rome', 'berlin', 'sao paolo', 'seattle', 'san fran', 'paris', 'egypt', 'hong kong'];
    var countries = ['united states', 'england', 'italy', 'france', 'argentina', 'germany', 'japan', 'korea', 'new zealand', 'australia', 'russia', 'south africa', 'ghana', 'colombia', 'brazil'];
    var money = ['dollar', 'dollar bills', 'cash', 'yo', 'coins', 'cents', 'pounds', 'euros', 'green', 'yen', 'pesos', 'benjamins', 'franklins', 'millions', 'mill', 'paper'];
    var colors = ['red', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'brown', 'orange', 'teal', 'burnt siena', 'yellow ochre', 'gray', 'navy', 'gold', 'silver', 'platinum', 'metallic', 'flourescent'];
    var brands = ['google', 'facebook', 'twitter', 'nike', 'snapchat', 'insta', 'tumblr', 'adidas', 'jordan', 'supreme', 'undefeated', 'hundreds', 'vans', 'new era', 'levis', 'uni qlo', 'bape', 'ice cream', 'billionaire boys club'];
    var shoes = ['air max', 'spizike', 'air force one', 'dunks', 'high tops', 'slip ons', 'sandals', 'foam posite', 'superstars', 'nikes', 'jordans'];
    var bling = ['chain', 'necklace', 'two finger ring', 'piece', 'bling', 'jewels', 'watch', 'accessories', 'snap back', 'fitted', 'belt buckle', 'pin', 'rope'];
    var teams = ['yankees', 'dodgers', 'red sox', 'lakers', 'yo', 'celtics', 'jazz', 'warriors', 'sonics', 'giants', 'mets', 'broncos', 'raiders', 'patriots', 'redskins', 'bills', 'cowboys'];
    var mrthug = ['shorty', 'shawty', 'grill', 'dough', 'dime', 'bread', 'hustle', 'O G', 'beef', 'street cred', 'rep', 'ill', 'afro', 'cray'];
    var marks = ['squiggle', 'circle', 'square', 'rectangle', 'pentagon', 'octogon', 'line', 'splotch', 'stain', 'cube', 'pyramid', 'box', 'crate'];
    var chips = ['doritos', 'cheetos', 'lays', 'sour cream and onion', 'barbecue', 'tortilla chips', 'fritos', 'potato chips', 'cheddar', 'salt and vinegar', 'spicy nacho', 'nacho'];
    var mrp = ['got money', 'got cheese', 'bling bling', 'yo', 'gold chain', 'gold and a pager', 'dont mess with me', 'i got it locked down', 'so fresh', 'so clean', 'i got it on lockdown', 'you cant believe this', 'half man half amazing'];
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'party', 'party time', 'hard in the paint', 'dance party', 'week', 'year', 'month', 'birthday'];
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var exp = ['you wouldnt believe', 'cant compete', 'cant believe it', 'you better believe it', 'ahh yeahh', 'oh yeah', 'thats right', 'how I do', 'dont trip', 'on point', 'yes sir'];
    var mrsports = ['pass', 'give and go', 'overlap', 'run', 'i got hops', 'jumping', 'layup', 'three pointer', 'jumpshot', 'fade away', 'buzzer beater', 'underdog', 'rainbow', 'home run', 'ground rule double'];
    var comp = ['im like', 'im like a', 'like a', 'i be like', 'like im', 'like im gonna', 'comparable to a', 'im all like', 'i be all', 'like its gonna', 'like its a', 'its like'];
    var disgust = ['yuck', 'ew', 'gross', 'phew', 'sick', 'nasty', 'sick nasty', 'disgusting', 'stinky', 'smelly', 'dirty', 'yo', 'yeahh man'];
    var bounce = ['bounce with it', 'let it bump', 'let it bounce', 'stacking money', 'put your hands up', 'if you feeling the beat', 'bounce with the beat', 'put your hands up in the sky', 'get your hands up'];
    var bounce2 = ['if you dig it', 'what you saying', 'let me know', 'if you feel the vibe', 'listen up', 'listen close', 'hear me', 'started from the bottom', 'can you dig it', 'can i kick it', 'kicking it', 'made it to the top'];

    // random things

    var gadgets = ['helicopter', 'airplane', 'up high', 'in the sky', 'flying', 'submarine', 'truck', 'motorcycle', 'rocket', 'spaceship', 'fighter jet', 'tank', 'bicycle', 'trike'];
    var clothes = ['slippers', 'sweats', 'polo', 'button up', 'dress', 'skirt', 't shirt', 'tall tee', 'linen', 'cotton blend', 'socks', 'cleats', 'boots', 'bracelet', 'belt'];
    var js = ['jordan ones', 'jordan twos', 'jordan threes', 'jordan fours', 'jordan fives', 'jordan sixes', 'jordan sevens', 'jordan eights', 'jordan nines', 'jordan tens', 'jordan elevens', 'jordan twelves', 'jordan thirteens', 'jordan fourteens'];
    var jstype = ['true blue', 'elephant print', 'infared', 'original', 'on ice', 'mint condition', 'retro', 'colorway', 'deadstock', 'shrink wrapped', 'flight club', 'sneakers', 'sneaker head'];
    var sneak = ['aglets', 'beaters', 'hype beast', 'flip flop', 'hype', 'jumpman', 'lows', 'mids', 'air jordan', 'player edition', 'sample', 'boutique', 'style', 'mags'];
    var mexp = ['for real', 'for sure', 'of course', 'there it is', 'laid it down', 'seriously', 'are you kidding', 'for serious', 'dont mess', 'dont hate', 'haters', 'brush your shoulders off'];
    var yuup = ['how gangster is that', 'limited quantity', 'wack', 'thats wack', 'thats dope', 'dope', 'rock it', 'lame', 'rope', 'posers', 'posters', 'hating', 'make it'];
    var yuup2 = ['swag', 'swagger', 'steeze', 'cool', 'hard to believe', 'got game', 'graphics in your fade', 'flat top', 'loser', 'mustache', 'beard', 'sideburns', 'ear ring'];
    var rapM = ['bars', 'on the beat', 'bass line', 'chorus', 'lines', 'rhymes', 'smooth flow', 'flow', 'rhythm', 'tempo', 'poet', 'poetry', 'poetic justice', 'space jam'];
    var masfoods = ['salad', 'steak', 'bacon', 'eggs', 'almonds', 'cashews', 'berry', 'candy', 'chocolate', 'peanut butter', 'food', 'treats'];
    var word = ['word up', 'in the hood', 'from the hood', 'hood forever', 'cops', 'neighborhood', 'broadway', 'courtside', 'concrete jungle', 'melting pot', 'hip hop'];
    var word2 = ['gamble', 'got that cash', 'cash under the mattress', 'cars', 'gang', 'crew', 'holla', 'holla back', 'rap star', 'ball player', 'limelight'];
    var blah = ['water bottle', 'butter', 'cash money', 'pringles', 'gym shorts', 'necklace', 'ring', 'rock on', 'so sick', 'holla at me', 'bro'];
    var connect = ['its a', 'feeling like a', 'acting like a', 'got rhymes like a', 'got rhymes like', 'got skills like', 'so sick like im', 'you can call me', 'you can say im'];
    var conn = ['make you wanna', 'if youre gonna', 'why not', 'freestyles', 'freestyle', 'I got rhymes like', 'I can rhyme like', 'my flow is like', 'my flow is so', 'syllables'];
    var con = ['alright man', 'pay cut', 'bass line', 'turn up the bass', 'turn up the volume', 'hold the microphone', 'so cool', 'spit on the mic', 'spit on the microphone', 'spitting fast'];
    var pup = ['rest assured', 'heaven', 'influence', 'running', 'take a guess', 'on the beat', 'lay it down', 'bust it', 'garbage', 'running in the streets', 'grocery shopping'];
    var pu = ['messed up', 'determination', 'shower', 'dirt', 'toes', 'ankle', '22 rims', 'million bucks', 'coins', 'dread locks', 'pony tail', 'corn rows', 'flat top'];
    var hair = ['mohawk', 'mullet', 'bleached tips', 'steps', 'fade', 'sideburns', 'handle bar mustache', 'goatee', 'haircut'];
    var thanks = ['thanks tribe', 'thanks fabo', 'thanks kendrick', 'thanks mase', 'thanks yeezy', 'thanks del', 'thanks cool kids', 'thanks mikey and chuck', 'thanks wu tang', 'thanks souls of mischief', 'thanks nas', 'thanks jay', 'thanks T.I.', 'thanks doom', 'thanks snoop', 'thanks pharell', 'thanks the game', 'thanks fugees'];
    var shoutout = ['let me give a shout out to', 'give props to', 'holding it down', 'shout out', 'featuring the', 'free styles', 'rap battle'];

    var wordz = [greetings, be, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13,
             sports, fruits, veggies, art, landscape, mystical, cars, animals, thug,
             geo, cities, countries, money, colors, brands, shoes, bling, teams, mrthug,
             marks, chips, mrp, days, months, exp, mrsports, comp, disgust, bounce, bounce2,
             gadgets, clothes, js, jstype, sneak, mexp, yuup, yuup2, rapM, masfoods, word, word2,
             blah, connect, conn, con, pup, pu, hair, thanks, shoutout];

    // rapperz

    var synth = window.speechSynthesis;

    var rapperz = [];
    var len = songs.length - 1;

    function loadVoices() {
        window.speechSynthesis.onvoiceschanged = function() {
//            synth.getVoices().forEach(function(voice) {
//                console.log(voice.name, voice.default ? voice.default :'');
//                rapperz.push(voice);
//            });
            rapperz = synth.getVoices();
           console.log(rapperz);
        };
    }

    // function that shuffles and plays songs

    var audio = document.getElementById('audio');
    var current = 0;

    function run() {
        $('#audio source').attr('src', songs[current]);
        audio.load();
        audio.play();
    }

    function playStuff() {
        run();

        audio.addEventListener('ended', function(e) {
            if (current == len) {
                current = 0;
            } else {
                current++;
            }
            run();
        });
    }

    // rapping stuff

    var barLen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var swTm = [30000, 45000, 40000, 20000, 15000, 25000];
    var timez = [500, 750, 1000, 1500, 1750];
    var rates = ['1', '1', '.5', '1', '2', '1.5', '.7', '1', '2', '1', '1', '1']
    var lead = [0, 1, 11, 29, 21, 26, 43, 44, 55, 56];
    var who;
    var spit;
    var lines = document.getElementById('main');
    var left = true;
    var nleft = false;
    var select;

    // rapping function

    function rap() {
        var rando = barLen[Math.floor(Math.random() * barLen.length)];
        var rando2;
        var rando3;
        var bar = '';
        for (i = 0; i < rando; i++) {
            rando2 = wordz[Math.floor(Math.random() * wordz.length)];
            rando3 = rando2[Math.floor(Math.random() * rando2.length)];
            bar += rando3 + ' ';
        }
        spit = new SpeechSynthesisUtterance();
        spit.text = bar;
        spit.rate = rates[Math.floor(Math.random() * rates.length)];
        spit.voice = who;
        synth.speak(spit);

        spit.onend = function() {
            if (left === true) {
                var node = document.createElement('p');
                var textnode = document.createTextNode(bar);
                node.appendChild(textnode);
                lines.appendChild(node);

            } else {
                var node = document.createElement('p');
                node.className = 'right';
                var textnode = document.createTextNode(bar);
                node.appendChild(textnode);
                lines.appendChild(node);
            }

//            if (nleft === false) {
//
//            } else {
//                who = rapperz[lead[Math.floor(Math.random() * lead.length)]];
//            }

            setTimeout(function() {
                rap();
            }, timez[Math.floor(Math.random() * timez.length)]);
        }
    }

    function choozRapper() {
        select = setTimeout(function() {
            console.log('switching rappers');
            who = rapperz[lead[Math.floor(Math.random() * lead.length)]];
            setTimeout(function() {
                $('.switch').css('display', 'block');
                setTimeout(function() {
                    $('.switch').css('display', 'none');
                }, 700);
            }, 500);

            if (left === true) {
                left = false;
                console.log('it was true so i made it false');
            } else {
                left = true;
                console.log('it was false so i made it true');
            }

//            spit.onend = function() {
//                nleft = true;
//                setTimeout(function() {
//                    nleft = false;
//                }, 300);
//            }
//            rap();

            choozRapper();
        }, swTm[Math.floor(Math.random() * swTm.length)]);

    }

    var images = ['../images/ad.jpg',
                 '../images/ad-5.jpg',
                 '../images/ad-3.jpg',
                 '../images/ad-4.jpg',
                 '../images/ad-2.jpg',
                 '../images/ad-6.jpg'];

    ///// switch images
    var indexSw = 1;
    function switchImage() {
        setInterval(function() {
            $('.image img').attr('src', images[indexSw % images.length]);
            indexSw = indexSw + 1;
        }, 4000);
    }

    /// starting voice

    var starting;

    function hypeIt() {
        starting = new SpeechSynthesisUtterance(hype[Math.floor(Math.random() * hype.length)]);
        synth.speak(starting);

        starting.onend = function() {
            setTimeout(function() {
                playStuff();
                choozRapper();
                rap();
                switchImage();
            }, 500);
        }
    }

    if (Modernizr.speechsynthesis && Modernizr.audio) {
        window.console.log('you got both!');
        loadVoices();
        hypeIt();
    } else {
        alert('This isnt going to work! You need a newer version of your browser.');
    }
});
