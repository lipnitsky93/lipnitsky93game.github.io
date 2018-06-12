import {Hero} from './Hero';
import {animationEnemyWalk} from '../animations';
import {animationEnemyAttack, animationEnemyDie} from '../animations';
import {canvas, ctx, canvas2, ctx2, TO_RADIANS} from '../constants';
import {enemyNameAdv, enemyNameRace, enemyName} from '../constants';
import {SpriteEnemyContainer} from '../classes/SpriteEnemyContainer';
import {showButtons, killedMonsters} from '../constants';


class Enemy extends Hero {
    constructor() {
        super();
        this.context = ctx2;
        this.name;
        this.animation = animationEnemyWalk;
        this.countOfKilledMonsters = 0;
    }
    
    draw() {
        this.context.clearRect(0, 0, 1600, 800);
        if (this.currentCountFrame === this.animation.frames.length) {
            this.currentCountFrame = 0;
        }
        const frame = this.animation.frames[this.currentCountFrame];
        frame.parts.forEach(
            (item, i) => {
                const currView = this.view[item.name];
                
                this.context.save();
                
                this.context.translate(this.x + item.x, this.y + item.y);
                
                this.context.translate(currView.width / 10, currView.height / 10);
               
                this.context.scale(-1,1);
                this.context.rotate(item.rotation * TO_RADIANS);
                
                this.context.drawImage(currView, -currView.width / 10, -currView.height / 10, currView.width / 5, currView.height / 5);
                this.context.restore();
            }
        )
        this.currentCountFrame ++;  
    }

    drawInfo() {
        this.context.clearRect(1300, 0, 250, 300);
        this.context.fillStyle = "#000";
        this.context.font = "italic 36px Arial";
        this.context.fillText(this.name, 1300, 50, 250);
        this.context.fillStyle = "red";
        this.context.font = "52px Arial";
        this.context.fillText(this.health, 1375, 130, 250);
        requestAnimationFrame(this.drawInfo.bind(this));   
    }

    setView() {
        this.view = new SpriteEnemyContainer();
    }

    setName() {
        const selfNameAdv = enemyNameAdv[_.random(enemyNameAdv.length - 1)];
        const selfNameRace = enemyNameRace[_.random(enemyNameRace.length - 1)];
        const selfName = enemyName[_.random(enemyName.length - 1)];
        this.name = `${selfNameAdv} ${selfNameRace} ${selfName}`;
    }

    walk(n, start, end) {

        if (this.tick_count > n) {
            this.setPosition(start, 500);
            this.draw();
            if (start > end) {
            start -= 30;
            } 
            this.tick_count = 0;
            if (start > end) {
                var reqId = requestAnimationFrame(this.walk.bind(this, n, start, end));
            } else {
            cancelAnimationFrame(reqId);
            this.currentCountFrame = 0;
            this.draw();
            showButtons();

            }
        } else {
            this.tick_count += 1;
            requestAnimationFrame(this.walk.bind(this, n, start, end));
        }
    }

    loseHealth() {
        this.health -= _.random(105, 112);
        if (this.health < 0) {
            this.health = 0;
            this.countOfKilledMonsters += 1;
        }

    }

    attack() {
        this.animation = animationEnemyAttack;
        const canvasEnemy = document.getElementById('myCanvasEnemy');
        const canvasHero = document.getElementById('myCanvasHero');
        canvasEnemy.style.zIndex = 1;
        canvasHero.style.zIndex = 0;
        if (this.tick_count > 12) {
        this.draw();
        this.tick_count = 0;
        if (this.currentCountFrame < this.animation.frames.length) {
        var reqId = requestAnimationFrame(this.attack.bind(this));
        } else {
            cancelAnimationFrame(reqId);
        }
        } else {
            this.tick_count += 1;
            requestAnimationFrame(this.attack.bind(this));
        }
    }

    die() {
        this.animation = animationEnemyDie;
        if (this.tick_count > 12) {
        this.draw();
        this.tick_count = 0;
        if (this.currentCountFrame < this.animation.frames.length) {
        var reqId = requestAnimationFrame(this.die.bind(this));
        } else {
            cancelAnimationFrame(reqId);
        }
        } else {
            this.tick_count += 1;
            requestAnimationFrame(this.die.bind(this));
        }
    }




}


export {Enemy};

