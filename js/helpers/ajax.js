const ajax = async ({url, sucess}) => {
    try {
        // *** *** *** Variables *** *** ***
        let response, data;
        // *** *** *** Ajax *** *** ***
        response = await fetch(url);
        if (!response.ok) throw response;
        // *** *** *** Execution *** *** ***
        switch (response.headers.get("content-type")) {
            case "image/svg+xml":
                data = await response.text();
                data = data.replace(/<!--[\s\S]*?<\/script>/g, "").replace(/\n/g, "");
                break;
            case "text/html; charset=UTF-8":
                data = await response.text();
                break;
            case "application/json; charset=UTF-8":
                data = await response.json();
                break;
            default:
                console.info("There are no instructions for this case");
                break;
        };
        return sucess(data);
    } catch (error) {
        console.error(error);
    };
};

export default ajax;
