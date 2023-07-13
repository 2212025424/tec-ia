export default function Button({ type, text, styles, children }) {

    return (
        (type == 'call') ? <a href={`tel:${process.env.appPhone}`} className={styles}><i className="fa-solid fa-phone-volume mdf-mr-sm"></i> {children}</a> :
            (type == 'wp') ? <a href={`https://wa.me/${process.env.appPhone.replace('+', '')}?text=${encodeURI(text)}`} target="_blank" className={styles}><i className="fa-brands fa-whatsapp mdf-mr-sm"></i> {children}</a> : <></>
    )

}