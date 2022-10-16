window.Webflow ||= [];
window.Webflow.push(() => {
  window.MemberStack?.onReady.then(async function (member) {
    const metadata = await member.getMetaData();

    if (metadata.drafts.length > 0) {
      $('.no-draft-text').hide();
      metadata.drafts.map((i: any) => {
        $('#draft-list').append(
          `    
      <div class="my-draft-wrapper">
      	<p id="w-node-_6ae66e4d-a4b7-e39a-3376-87bc060556c7-fb5bb4b4" class="my-draft-name">${i.draftAdvertisementName}</p>
        <div id="w-node-_5fca7bde-0e3b-f0b5-c695-96932b0088ba-fb5bb4b4" class="my-draft-status">
        	<div class="indication-color orange"></div>
        	<p class="paragraph-44-copy">Not&nbsp;Submitted</p>
  			</div>
        <p id="w-node-_15ccddc9-7f5f-b3b5-60d8-cadb8711d927-fb5bb4b4" class="my-draft-date">${i.date}</p>
        <div id="w-node-_999218cc-8f57-4706-b025-530a0d94a632-fb5bb4b4" class="div-block-139">
        	<div class="edit-draft-btn" draft-id=${i.id} >Edit</div>
          <div class="delete-draft-btn" draft-id=${i.id} >Delete</div>
        </div>
      </div>
        `
        );
      });
    }

    $('.delete-draft-btn').map(function () {
      $(this).on('click', function () {
        if (metadata.drafts.length === 1) {
          $('.no-draft-text').show();
        }
        const draftId = $(this).attr('draft-id');
        //console.log(draftId);
        const updatedDraft = metadata.drafts.filter((i: any) => {
          return i.id.toString() !== draftId;
        });
        metadata.drafts = updatedDraft;
        member.updateMetaData(metadata);

        $(this).parent().parent().hide();
      });
    });

    $('.edit-draft-btn').map(function () {
      $(this).on('click', () => {
        $(document).scrollTop(0);
        const currentDraftData = metadata.drafts.find((i: any) => {
          return i.id.toString() === $(this).attr('draft-id');
        });

        $('#Street-Name').val(currentDraftData.draftStreetName);
        $('#House-No').val(currentDraftData.draftHouseNo);
        $('#House-No-Addition').val(currentDraftData.draftHouseNoAddition);
        $('#Postal-Code').val(currentDraftData.draftPostalCode);
        $('#City').val(currentDraftData.draftCity);
        $('#Advertisement-Name').val(currentDraftData.draftAdvertisementName);
        $('#constructionyear').val(currentDraftData.draftConstructionYear);
        $('#Asking-Price').val(currentDraftData.draftAskingPrice);
        $('#Reservation-Price').val(currentDraftData.draftReservationPrice);
        $('#Property-Description').val(currentDraftData.draftPropertyDescription);
        $('#Surface').val(currentDraftData.draftSurface);
        $('#No-of-bedrooms').val(currentDraftData.draftNoOfBedrooms);
        $('#State-of-property-description').val(currentDraftData.draftStateOfPropertyDescription);

        $('#Property-Type').val(currentDraftData.draftPropertyType);
        $('#Ownership-Structure').val(currentDraftData.draftOwnershipStructure);
        $('#function-select').val(currentDraftData.draftFunctionSelect);
        $('#Outdoor').val(currentDraftData.draftOutdoor);

        sessionStorage.setItem('viewDraft', JSON.stringify(currentDraftData));
        window.location.href = `${window.location.origin}/edit-property`;

        //$("#new-property-tab").trigger("click");
      });
    });
  });

  //   window.MemberStack?.onReady.then(async function (member) {
  //     if (member.loggedIn) {
  //       const metadata = await member.getMetaData();
  //       metadata.drafts = metadata.drafts || [];
  //       $('.draftbtn').map(function () {
  //         $(this).one('click', () => {
  //           $('.no-draft-text').hide();
  //           const currentDate = new Date();
  //           const dateFormat = currentDate.toDateString();
  //           const draftStreetName = $('#Street-Name').val();
  //           const draftHouseNo = $('#House-No').val();
  //           const draftHouseNoAddition = $('#House-No-Addition').val();
  //           const draftPostalCode = $('#Postal-Code').val();
  //           const draftCity = $('#City').val();
  //           const draftAdvertisementName = $('#Advertisement-Name').val();
  //           const draftConstructionYear = $('#constructionyear').val();
  //           const draftAskingPrice = $('#Asking-Price').val();
  //           const draftReservationPrice = $('#Reservation-Price').val();
  //           const draftPropertyDescription = $('#Property-Description').val();
  //           const draftSurface = $('#Surface').val();
  //           const draftNoOfBedrooms = $('#No-of-bedrooms').val();
  //           const draftStateOfPropertyDescription = $('#State-of-property-description').val();
  //           const draftPropertyType = $('#Property-Type').val();
  //           const draftOwnershipStructure = $('#Ownership-Structure').val();
  //           const draftFunctionSelect = $('#function-select').val();
  //           const draftOutdoor = $('#Outdoor').val();
  //           const id = Math.random();
  //           metadata.drafts.push({
  //             id,
  //             date: dateFormat,
  //             draftStreetName,
  //             draftHouseNo,
  //             draftHouseNoAddition,
  //             draftPostalCode,
  //             draftCity,
  //             draftAdvertisementName,
  //             draftConstructionYear,
  //             draftAskingPrice,
  //             draftReservationPrice,
  //             draftPropertyDescription,
  //             draftSurface,
  //             draftNoOfBedrooms,
  //             draftStateOfPropertyDescription,
  //             draftPropertyType,
  //             draftOwnershipStructure,
  //             draftFunctionSelect,
  //             draftOutdoor,
  //           });
  //           //console.log(metadata);
  //           member.updateMetaData(metadata);
  //           $('#draft-list').append(
  //             `
  //           <div class="my-draft-wrapper">
  //         	<p id="w-node-_6ae66e4d-a4b7-e39a-3376-87bc060556c7-fb5bb4b4" class="my-draft-name">${draftAdvertisementName}</p>
  //           <div id="w-node-_5fca7bde-0e3b-f0b5-c695-96932b0088ba-fb5bb4b4" class="my-draft-status">
  //           	<div class="indication-color orange"></div>
  //           	<p class="paragraph-44-copy">Not&nbsp;Submitted</p>
  //     			</div>
  //           <p id="w-node-_15ccddc9-7f5f-b3b5-60d8-cadb8711d927-fb5bb4b4" class="my-draft-date">${dateFormat}</p>
  //           <div id="w-node-_999218cc-8f57-4706-b025-530a0d94a632-fb5bb4b4" class="div-block-139">
  //           	<div class="edit-draft-btn" draft-id=${id} >Edit</div>
  //             <div class="delete-draft-btn" draft-id=${id} >Delete</div>
  //           </div>
  //         </div>
  //           `
  //           );
  //           $('.delete-draft-btn').map(function () {
  //             $(this).on('click', function () {
  //               if (metadata.drafts.length === 1) {
  //                 $('.no-draft-text').show();
  //               }
  //               //   let updatedDraft;
  //               const draftId = $(this).attr('draft-id');
  //               console.log(draftId);
  //               const updatedDraft = metadata.drafts.filter((i: any) => {
  //                 return i.id !== draftId;
  //               });
  //               metadata.drafts = updatedDraft;
  //               member.updateMetaData(metadata);
  //               $(this).parent().parent().hide();
  //             });
  //           });
  //           $('.edit-draft-btn').map(function () {
  //             $(this).on('click', () => {
  //               $(document).scrollTop(0);
  //               const currentDraftData = metadata.drafts.find((i: any) => {
  //                 return i.id === $(this).attr('draft-id');
  //               });
  //               $('#Street-Name').val(currentDraftData.draftStreetName);
  //               $('#House-No').val(currentDraftData.draftHouseNo);
  //               $('#House-No-Addition').val(currentDraftData.draftHouseNoAddition);
  //               $('#Postal-Code').val(currentDraftData.draftPostalCode);
  //               $('#City').val(currentDraftData.draftCity);
  //               $('#Advertisement-Name').val(currentDraftData.draftAdvertisementName);
  //               $('#constructionyear').val(currentDraftData.draftConstructionYear);
  //               $('#Asking-Price').val(currentDraftData.draftAskingPrice);
  //               $('#Reservation-Price').val(currentDraftData.draftReservationPrice);
  //               $('#Property-Description').val(currentDraftData.draftPropertyDescription);
  //               $('#Surface').val(currentDraftData.draftSurface);
  //               $('#No-of-bedrooms').val(currentDraftData.draftNoOfBedrooms);
  //               $('#State-of-property-description').val(
  //                 currentDraftData.draftStateOfPropertyDescription
  //               );
  //               $('#Property-Type').val(currentDraftData.draftPropertyType);
  //               $('#Ownership-Structure').val(currentDraftData.draftOwnershipStructure);
  //               $('#function-select').val(currentDraftData.draftFunctionSelect);
  //               $('#Outdoor').val(currentDraftData.draftOutdoor);
  //               $('#new-property-tab').trigger('click');
  //             });
  //           });
  //         });
  //       });
  //     }
  //   });
});
