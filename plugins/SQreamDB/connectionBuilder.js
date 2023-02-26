(function dsbuilder(attr) {
    var props = {};
    var urlBuilder = "jdbc:Sqream://";

    urlBuilder = urlBuilder.concat(attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase]);
    props["user"] = attr[connectionHelper.attributeUsername];
    props["password"] = attr[connectionHelper.attributePassword];
    props["ssl"] = "false";
    props["cluster"] = attr["warehouse"];

    if (attr[connectionHelper.attributeSSLMode] == "require") {
        props["ssl"] = "true";
    }

    for (var key in props)
    {
        urlBuilder = urlBuilder.concat(";" + key + "=" + props[key]);
    }

    return [urlBuilder];
})