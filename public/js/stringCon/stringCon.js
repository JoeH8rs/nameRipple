var str = `abominable snowman
angel
B
banshee
basilisk
beast
behemoth
bogey man
brute
C
centaur
Cerberus (three-headed dog)
changeling
cherub
chimera (Lion-goat-snake hybrid)
colossus
crone
cyclops
D
demon
devil
djinn
dragon
dryad (tree nymph)
E
elf
F
fairy
fiend
fire-breathing dragon
Frankenstein's monster
freak
G
gargoyle
genii
ghost
ghoul
giant
gnome
Godzilla
golum
gorgon
H
hag
harpy
horror
hydra
I
imp
J
jinn
K
kelpie
L
lake spirit
leprechaun
leviathan
little people
Loch Ness monster
M
medusa
merman
mermaid
monster
mummy
N
Nessie
nymph
O
ogre
orc
P
Pegasus
phoenix
polyphemus
R
rain bird (Native American)
raven spirit (Native American)
ryu (Japanese dragon)
S
savage
sea monster
shapeshifter
siren
spirit
sprite
swamp monster
T
titan
tree nymph (dryad)
troll
U
undead
unicorn
V
vampire
W
werewolf
witch
wretch
Y
yeti
Z
zombie`;

str = str.replace(/(\r\n|\n|\r)/gm, ",");
var arry = str.split(",");

for (var i = 0; i< arry.length; i++) {
    if (arry[i].length <= 1 || arry[i].indexOf(" ")>-1 || arry[i].indexOf("-")>-1) {
        arry.splice(i, 1);
        i--;
    } else {     
        arry[i] = arry[i][0].toUpperCase() + arry[i].slice(1, arry[i].length); 
    }  
    
}


"['" + arry.join("','") + "']";
    
    







    
       
  


