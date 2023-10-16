let hero: string;

function getHero(): string {
    return "Hulk";
}

hero = getHero(); 

const heroArr = ["Thor", "spiderman", "Ironman"];

heroArr.map((hero): string => {
    return hero;
})

const getValue = (): string => {
    return '';
}

function handlerError(errMsg: string): never {
    throw new Error(errMsg);
}

function consoleError(errMsg: string): void {
    console.log(errMsg);
}