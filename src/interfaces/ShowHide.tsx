export interface visibility {
    isVisible: boolean;
    onMouseOver: Function;
    onMouseLeave: Function;
}

export interface modal {
    isVisible: boolean;
    classes: string;
    open: Function;
    close: Function;
}