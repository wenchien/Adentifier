function highlightAds(querySelector) {
    var adsListElement = document.querySelector(querySelector);
    if (!adsListElement) {
        console.log("No Ads in this page! or Google has changed the way they advertise");
        return;
    }

    adsListElement.style.border = "5px solid red";


    var topSpan = document.createElement('span');
    var descriptionSpan = document.createElement('span');
    var bottomSpan = document.createElement('span');
    var topAdsText = document.createTextNode("ADS SECTION - TOP");
    var descriptionText = document.createTextNode("Make sure the URLs provided in the ads section are correct else don't use this section cause Google ads team isn't very competent");
    var bottomAdsText = document.createTextNode("ADS SECTION - BOTTOM");

    // Set DOM property
    topSpan.style.fontSize = '200%';
    topSpan.style.color = 'red'
    topSpan.prepend(topAdsText);

    descriptionSpan.style.fontSize = '150%';
    descriptionSpan.style.color = 'deeppink'
    descriptionSpan.prepend(descriptionText);

    bottomSpan.style.fontSize = '200%';
    bottomSpan.style.color = 'red'
    bottomSpan.appendChild(bottomAdsText);

    adsListElement.parentNode.prepend(descriptionSpan);
    adsListElement.parentNode.prepend(document.createElement('br'));
    adsListElement.parentNode.prepend(topSpan);
    adsListElement.parentNode.appendChild(bottomSpan);
}

highlightAds("div[aria-label=\"Ads\"]");