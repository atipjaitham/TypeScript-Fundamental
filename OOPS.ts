abstract class Charecter {
    public name : string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damage: number, speed: number){
        this.name = name;
        this.damage = damage;
        this.attackSpeed  = speed;
    }
    public abstract damagePerSecond(): number;

}

class Goblin extends Charecter {
    constructor(name: string, damage: number, speed: number){
        super(name, damage, speed);
    }

    public damagePerSecond(): number {
       return this.damage * this.attackSpeed; 
    }

}