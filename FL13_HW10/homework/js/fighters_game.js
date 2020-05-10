function Fighter(props) {
    this.name = props.name;
    this.damage = props.damage; 
    this.hp = props.hp; 
    this.strength = props.strength; 
    this.agility = props.agility; 

    let countWins = 0;
    let countLosses = 0;

    const getName = () => this.name;
    const getDamage = () => this.damage;
    const getStrength = () => this.strength;
    const getAgility = () => this.agility;
    const getHealth = () => this.hp;
    
    const heal = points => {
        this.hp = this.hp + points;
        if(this.hp >= props.hp) {
            this.hp = props.hp
        }
    }

    const dealDamage = points => {
        this.hp = this.hp - points;
        if(this.hp < 0) {
            this.hp = 0;
        }
    }

    const attack = enemy => {
        let random = Math.random() * 100;
        let protection = 100 - enemy.getStrength() - enemy.getAgility();
        if(random < protection) { 
            enemy.dealDamage(getDamage());
            console.log(`${getName()} makes ${getDamage()} damage to ${enemy.getName()}`);
        } else { 
            console.log(`${getName()} attack missed`);
        }
    }

    const addWin = () => {
        countWins++;
    }

    const addLoss = () => {
        countLosses++;
    }

    const logCombatHistory = () => {
        console.log(`Name: ${getName()}, Wins: ${countWins}, Losses: ${countLosses}`);
    }
    
    return {
        getName,
        getDamage,
        getStrength,
        getAgility,
        getHealth,
        heal,
        dealDamage,
        attack,
        addWin,
        addLoss,
        logCombatHistory
    }
}

function battle(fighter1, fighter2) {
    if(fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    } else if(fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight.`)
    } else {
        while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        if(fighter1.getHealth() > fighter2.getHealth()) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);
        } else {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
        }
    }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100})
const fighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90})