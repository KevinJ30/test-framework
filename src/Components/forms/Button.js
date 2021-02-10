import React, {useRef} from "react";

// export function Button(props) {
//     const classes = props.classes.join(' ');
//     const buttonRef = useRef();
//
//     return (<button ref={buttonRef} className="btn btn-primary" onClick={props.handle}>
//             {props.value}
//         </button>
//     );
// }
//
// export function ButtonDanger(props) {
//     return (<button ref={buttonRef} className={classes} onClick={props.handle}>
//             {props.value}
//         </button>
//     );
// }

export class Button extends React.Component{
    constructor(props) {
        super(props)
        this.ref = React.createRef();
        this.classes = ['btn']
    }

    render() {
        return(<button ref={this.ref} className={this.addClass()} onClick={this.props.handle}>
            {this.props.value}
        </button>)
    }

    addClass() {
        let classes = this.classes.join(' ');
        classes += this.props.small ? ' btn-sm' : '';
        return classes;
    }
}

export class ButtonDanger extends Button {
    constructor(props) {
        super(props);
        this.classes = ['btn', 'btn-danger']
    }
}

export class ButtonPrimary extends Button {
    constructor(props) {
        super(props);
        this.classes = ['btn', 'btn-primary']
    }
}

export class ButtonSuccess extends Button {
    constructor(props) {
        super(props);
        this.classes = ['btn', 'btn-success']
    }
}