let preDefault = () => {
    let active = true;

    $('input').focus(() => {
        active = false;
    });
    
    $('input').blur(() => {
       active = true;
    });
    
    $(document).keydown( e => {
        if (e.which === 13 || e.which === 32) {
            if (active) {
                e.preventDefault();
            }
        }
    });
}

export default preDefault;
