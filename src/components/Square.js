export default function Square( params ) {
    return (
        <button className="square" onClick={params.onClick}>
            {params.value}
        </button>
    );
}