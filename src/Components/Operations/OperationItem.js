import * as React from "react";
import {ButtonDanger, ButtonPrimary} from "../forms/Button";

export function OperationItem(props) {
    return (
        <tr key={props.item.describe}>
            <td>
                <input type="checkbox" name="checked" defaultChecked={props.item.checked} onClick={() => { handleClick(props) }}/>
            </td>
            <td>
                <p className={props.item.checked ? 'checked' : null}>{props.item.date}</p>
            </td>
            <td>
                <p>{props.item.describe}</p>
            </td>

            <td>
                <p>{props.item.amount} €</p>
            </td>

            <td>
                <ButtonPrimary value="Modifier" handle={handleButtonUpdate}>Modifier</ButtonPrimary>
                <ButtonDanger value="Supprimer" handle={handleButtonDelete} small={true}/>
            </td>
        </tr>
    );
}

function handleButtonDelete() {
    console.log('delete...')
}

function handleButtonUpdate() {
    console.log('Update....')
}

function handleClick(props) {
    props.store.checkedItem(props.item);
}