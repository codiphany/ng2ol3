import {Ng2ol3Logo} from './ng2ol3logo';

export class Ng2ol3Header {
    title: string;
    logo: Ng2ol3Logo;

    constructor() {

    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getLogo(): Ng2ol3Logo {
        return this.logo;
    }

    setLogo(logo: Ng2ol3Logo): void {
        this.logo = logo;
    }
}
