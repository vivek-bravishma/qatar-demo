function initializeMessaging() {

    //if chat icon is open hide that
    var chaticon = document.getElementsByClassName("webchat-toggle-button");
    if(chaticon != null && chaticon != undefined){
      if(chaticon[0] != null && chaticon[0] != undefined){
        chaticon[0].style.display = 'none';
      }
      
    }
    console.log("opening model");
    $("#settingsModal").modal("show");
  }
  function loadChatTenant(){
    $("#chatModal").modal("show");
  }
  function initializeChat(tenantId){
      console.log('Loading Chat');
      var url;
      if(tenantId === 'BBICTF'){
        url = 'https://aocflow-dev-endpoint.avaya.com/83228438e95d155a7568bc9de2ca2ac3a77ff4500811d1e321eff570c0c05bcf';
      }else {
        url = 'https://aocflow-dev-endpoint.avaya.com/eace79a3a4eb47d7caab833ce7b563073bade53c73ffd18f2389ec7feec11481';
      }
      initWebchat(
         url,
        {
          // sessionId,
          channel: "webchat",
          settings: {
            title: "AXP Chat",
            disableBranding: true,
            startBehavior: 'injection',
            getStartedText: '...',
            enableRating: 'onRequest',
            enableUnreadMessageBadge: true,
            unreadMessageTitleText: "New message",
            unreadMessageTitleTextPlural: "New messages",
            enableUnreadMessageTitleIndicator: true,
            enableUnreadMessageSound: true,
            useSessionStorage: true             // userId not persisted after closing and re-opening a browser tab
          }
        }
      ).then((webchat) => {
        webchat.close();
      });
    }
    function changeTenant(selected) {
      // console.log("Hello1",selected.value);
      if (selected.value === "tenant1") {
        $("#IntegrationID").val("609976d4106a5600d3103fcc");
        $("#appKeySecret").val(
          "uhKUHjlE4F5u3lxNPiEQj__M2rktpG0BSn11Q0Sw0O5QPXQwJwRe6Xn-EQJKsjNYCcgXiqWYyXN8d882i_cuBQ"
        );
        $("#appKeyId").val("app_609975226eb7d400d3600381");
      } else if (selected.value === "tenant2") {
        $("#IntegrationID").val("609d76ad25363000d4cec3f1");
        $("#appKeySecret").val(
          "3KwF2jOQxJPEGR6Ec4XIk7HcTwvFhnZ03AgmktYno9Nr3lHq-mymgPnHJQdMmZN6sOjl2O234FHMxsRogTTefg"
        );
        $("#appKeyId").val("app_609d765625363000d4cebefb");
      } else if (selected.value === "tenant10") {
        $("#IntegrationID").val("6201117621899000ed089998");
        $("#appKeySecret").val(
          "UWeACJmHb4MoneEyBa_NSdfQCOsDISB7LMPqZi78LwLPUeAuKSyrd55WtlYFL5DsxPDMhBSfMl509fAfeaY90g"
        );
        $("#appKeyId").val("app_620110c60729c500edab2388");
      } else if (selected.value === "tenant11") {
        $("#IntegrationID").val("62420f88d2c7ec00f323b3a4");
        $("#appKeySecret").val(
          "kJoEqQd4lOHHoBwR6TduNnI4rXQyILni1msCmGxVpKotg_Gh8yZV8PU8UjN9EfCJOu4BsD17Lr4SpGFdfsKtOw"
        );
        $("#appKeyId").val("app_62420eeb0bc56600f3390a36");
      } else if (selected.value === "tenant12") {
        $("#IntegrationID").val("625e85746217ef00f3a7bd8c");
        $("#appKeySecret").val(
          "n0AihY7m2u_G1ndaUbje9Og8YMbbBq-Chjl2QRq0UlTiTOxesd8YW0eQz0ronJw_NSCtHf1M1rVYanLv7TkjuA"
        );
        $("#appKeyId").val("app_625e84aaf505b900f43d312a");
      } else if (selected.value === "tenant13") {
        $("#IntegrationID").val("625e95bbcfdcbc00f3ca9e29");
        $("#appKeySecret").val(
          "_3-MpWRlSVfGOmczxX64KgcmleZoSi8qNr_D4G6aO5oM4ndhnC9GNYFwG3-KXdZe1FkWA-dRrFjV7i0ZNYaGvg"
        );
        $("#appKeyId").val("app_625e94e74362c700f30e5789");
      } else if (selected.value === "tenant14") {
        $("#IntegrationID").val("62444a065134f800f32ec682");
        $("#appKeySecret").val(
          "31m1ufki4V3F9w-XhQWd6HE532Sterj23EkrBPIqdPog7_cr3HqL2F8ZPVfe-N3MyZFDO1422V46EmuDNuzJtg"
        );
        $("#appKeyId").val("app_62444979dc84ac00f4a25e5a");
      } else if (selected.value === "tenant15") {
        $("#IntegrationID").val("625ea1f65bb7db00f4c7c413");
        $("#appKeySecret").val(
          "4ReO4G6vZoEoX2fSDpSJZV2pv7YNSSbNkS3ZtRQulJlNA2BCG8YQEH5-7VCW6512xx2_flLvDxD_q1UNRr-QOA"
        );
        $("#appKeyId").val("app_625e9d874362c700f3137c74");
      } else if (selected.value === "tenant16") {
        $("#IntegrationID").val("625e874cdcbdea00f3fff157");
        $("#appKeySecret").val(
          "sQpm-VdkeUam3VS1GYDepraXkfhUwKkSQOZig1DUFJtoe9ESGjUZB4Qu5L9Oy_odMM3DfoioPxMq-ryuREzg6g"
        );
        $("#appKeyId").val("app_625e86c3ea63e500f33418ca");
      }
    }
    function initSdk(intgId) {
      return AvMessagingSdk.init({
        integrationId: intgId,
        browserStorage: "sessionStorage", // Add this line to your init call
        // // For authenticated mode
        customText: {
          headerText: "Customer Support",
          inputPlaceholder: "Type a message...",
          sendButtonText: "Send",
          uploadPhoto: "Send Photo",
          uploadDocument: "Send Document",
        },
        customColors: {
          brandColor: "DA291C",
          conversationColor: "000",
          actionColor: "fff",
        },
        menuItems: {
          imageUpload: true,
          fileUpload: true,
          shareLocation: true,
        },
        businessName: "Avaya Messaging",
        buttonIconUrl: "../assets/images/chat.png",
      });
    }
  