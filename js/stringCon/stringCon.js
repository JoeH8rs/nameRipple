var str = `A
aluminum foil
apron
B
baking dish
basket
batter
beater
blender
boil
bottle
bottle opener
bowl
bread basket
broiler
broom
Bundt pan
bun warmer
butter dish
C
cabinet
caddy
cake pan
cake stand
can
can opener
carafe
casserole
cast iron pan
china
chop
chopsticks
cleanser
coffee grinder
coffee maker
coffee mill
colander
cook
cookbook
cooker
cookie cutter
cookie sheet
corn pick
counter
creamer
crockpot
cup
cupboard
custard cup
cutlery
cutting board
D
decanter
dish
dish rack
dish soap
dish towel
dishwasher
dough
Dutch oven
E
egg beater
egg timer
espresso machine
F
flatware
flour sifter
fondue set
food
food processor
fork
freezer
fryer
fruit bowl
frying pan
G
garbage bag
garbage can
garbage compactor
garbage disposal
garlic press
glasses
grater
gravy boat
griddle
grill
grinder
H
honey dipper
honey pot
hot plate
I
ice box
ice bucket
ice cream maker
ice cream scoop
ice cube tray
ice pick
iron skillet
island
J
jar
jug
juice glass
juicer
K
kettle
kitchen
kitchen island
knife
knife sharpener
L
ladle
leftovers
lid
M
marinate
masher
measuring cup
measuring spoons
meat grinder
meat tenderizer
meat thermometer
microwave oven
mixer
mixing bowl
mold
mop
mortar and pestle
muffin pan
mug
N
napkin
nesting bowls
nut cracker
nut pick
O
opener
oven
oven mitt
P
pan
paper towels
pepper grinder
pepper mill
pepper shaker
percolator
pestle
pie plate
pitcher
pizza cutter
P cont.
pizza pan
pizza wheel
placemat
plastic bags
plastic wrap
plate
platter
popcorn popper
pot
potholder
potato masher
poultry shears
pressure cooker
Q
quiche pan
R
ramekin
range
reamer
recipe
refrigerator
rice cooker
roaster
roasting pan
rolling pin
S
salad bowl
salad spinner
salt shaker
sauce boat
sauce pan
saucer
serving pieces
serving platter
shears
shelves
sieve
sifter
silverware
sink
skewers
skillet
slicer
slow cooker
soap
soup bowl
spatula
spice jar
spices
sponge
spoon
S cont.
steak knife
steamer
steel wool
stew pot
stove
sugar bowl
sugar sifter
T
table
tablecloth
tablespoon
tea cup
tea infuser
teapot
teaspoon
thermometer
timer
tin
toaster
toaster oven
tongs
trash bags
trash can
tray
trivet
tumbler
tureen
U
utensils
V
vegetable bin
vegetable brush
vegetable peeler
W
waffle iron
waste basket
waxed paper
whip
whisk
whisk broom
wok
Y
yogurt maker
Z
zester`;

var str = str.replace(/(\r\n|\n|\r)/gm, ",");

for (var i = 0; i< str.length; i++) {
    if (str.charAt(i) === " ") {
      str.replace(/^F0+/i, '');
      
  }
}




    
       
  


