export const EYE_TYPE_ROUND = 'eye-type-round';
export const EYE_TYPE_ROUNDED_ALMOND_SHAPED = 'eye-type-rounded-almond-shaped';
export const EYE_TYPE_ALMOND_SHAPED = 'eye-type-almond-shaped';
export const EYE_TYPE_NARROW_ALMOND_SHAPED = 'eye-type-narrow-almond-shaped';
export const EYE_TYPE_DROOPING_EYELIDS = 'eye-type-drooping-eyelids';
export const EYE_TYPE_DROOPING_ANGLES_AND_EYELIDS = 'eye-type-drooping-angles-and-eyelids';
export const EYE_TYPE_ASIAN = 'eye-type-asian';
export const EYE_TYPE_ROUNDED_ASIAN = 'eye-type-rounded-asian';

export const EYE_COLOR_GREEN = 'eye-color-green';
export const EYE_COLOR_BLUE = 'eye-color-blue';
export const EYE_COLOR_SKYBLUE = 'eye-color-skyblue';
export const EYE_COLOR_BROWN = 'eye-color-brown';

class Eye {
    constructor (type, color) {
        this.type = type;
        this.color = color;
    }
    
    createElement() {
        const pupil = document.createElement('div'); // Зрачок
        pupil.classList.add('eye-pupil');

        const iris = document.createElement('div'); // Радужка
        iris.classList.add('eye-iris');
        iris.classList.add(this.color);
        iris.append(pupil);

        const meat = document.createElement('div'); // Мясцо

        const conjunctiva = document.createElement('div'); // Склера
        conjunctiva.classList.add('eye-conjunctiva');
        conjunctiva.append(iris);

        const eye_container =  document.createElement('div'); // Главный контейнер 
        eye_container.classList.add('eye-container');
        eye_container.classList.add(this.type);
        eye_container.append(conjunctiva);

        const eye = document.createElement('div');
        eye.classList.add('eye');
        

        eye.append(eye_container);
        
        return eye;
    }
}

export function createEye(type, color) {
    return new Eye(type, color);
}

