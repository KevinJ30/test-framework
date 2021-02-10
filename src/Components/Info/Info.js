import React, {useState, useEffect} from "react";

export function Info(props) {
    const [total, calculatedTotal] = useTotalOperations();
    const [totalPointed, calculatedTotalPointed] = useTotalOperations();

    useEffect(() => {
        calculatedTotal(props.operations);
        calculatedTotalPointed(props.operations.filter(operation => operation.checked))
    })

    return (
        <div className="card">
            <div className="card-body">
                <p><strong>Total : </strong> {total} €</p>
                <p><strong>Total Pointé : </strong> {totalPointed} €</p>
            </div>
        </div>
    );

}

function useTotalOperations() {
    const [total, setTotal] = useState(0);

    const calulatedOperation = (operations) => {
        setTotal(operations.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0));
    }

    return [total, calulatedOperation];
}