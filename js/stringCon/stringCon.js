var str = `A
afford
ATM
auction
B
bailout
balance
bank
bankrupt
bankruptcy
bargain
bill
bonds
borrow
bought
budget
business
buy
C
capital
cash
cent
change
cheap
check
collateral
commodity
compound
coupon
credit
credit card
currency
D
debt
defecit
deposit
depression
dime
discount
diversify
dividend
dollar
donate
donation
donor
down payment
E
earn
earnings
economy
economics
economist
equity
estate
Euro
exchange
expense
expensive
F
finance
financier
fund
I
income
interest
invest
investment
investor
L
lend
lender
loan
loss
M
margin
market
money
mortgage
N
nickel
note
O
outgo
overdrawn
P
pay
payment
pence
penny
percentage
poor
portfolio
Pound
profit
purse
Q
quarter
R
rate
rebate
receipt
recession
rent
reserve
rich
risk
S
sale
save
savings
security
sell
seller
sold
spend
stocks
surplus
swap
T
tax
teller
thrifty
trade
treasury
V
value
vault
W
wallet
wealth
withdraw
Y
yield
More Word Lists
Adjectives
Adverbs
Alliteration
Amphibians
Anagrams
Animals
Antonyms
April Fool's Day
Art
Astronomy
Autumn/Fall
Backyard
Baseball
Bathroom
Beach
"Big"
Birds
Biomes
Birthday
Boats/Ships
Bodies of Waters
Body
Buildings
Business and Office
Camping
Carnivals and Fairs
Car Parts
Cars
Castles, Kings, Queens
Cats
Chinese New Year
Christmas (secular)
Circus and Carnival
Clothing
Colors
Columbus Day
Compound Words
Computers
Constitution
Conjunctions
Containers
Cooking Terms
Cooking Tools
Country Names
Dance
Dentist
Desserts
Dogs
Doctors and Dentists
Dolch Words
Driving
Duos
Elections
Elements
Emotions and Feelings
Energy
Fall/Autumn
Family
Farm
Fire Fighting
Fish
Flowers
Food
Food Web
Friends, Acquaintances, and Other People
Fruit
Furniture
Geography
Good Luck Symbols
Grammar
Groundhog Day
Halloween
Happiness
"Happy" synonyms
Hats
Herbs and Spices
Holidays
House
Household Devices
Housing and Dwellings
Insects
Interjections
Irregular Verbs
Jobs and Occupations
Kitchen
Landforms
Languages
Leaders
Legal Terms
Long E Words
Long U Words
Mammals
"Many"
Martin Luther King, Jr.
Math and Numbers
Measurement
Metals
Military
Money
Monsters
Mother's Day
Musical Instruments
Music Theory
New Year's Eve
Negative Words
Nouns that are Verbs
Ocean
Office and Business
Opposites
Pairs
Palindromes
People (Non-Family)
Personal Qualities
Pirates
Plants
Positive Words
Post Office
Prepositions
President's Day
Pronouns
Regular Verbs
Reptiles
Restaurant
Roadways
Rocks and Minerals
Rooms
"Said"
School
Science
Science Fields
Sewing
Shapes
Ships/Boats
Shoes
Spices and Herbs
Sports
Spring
Stores and Public Buildings
Summer
St. Patrick's Day
Thanksgiving
Time
Tools
Transportation and Vehicles
Trees
Types of Cars
US Constitution
US Flag Day
US States
Vacation
Valentine's Day
Vegetables
Vehicles and Transportation 
Verbs
Verbs, Irregular
Verbs, Regular
Verbs that are Nouns
Virtues
Water
Ways to Say "Big"
Ways to Say "Happy"
Ways to Say "Many"
Ways to Say "Said"
Weapons
Weather
Weights and Measures
Winter
Yard`;

str = str.replace(/(\r\n|\n|\r)/gm, ",");
var arry = str.split(",");

for (var i = 0; i< arry.length; i++) {
    if (arry[i].length <= 1 || arry[i].indexOf(" ")>-1) {
        arry.splice(i, 1);
        i--;
    } else {     
        arry[i] = arry[i][0].toUpperCase() + arry[i].slice(1, arry[i].length); 
    }  
    
}


    "['" + arry.join("','") + "']";







    
       
  


