import type { DraftMetadata } from 'types';

export const draftScript = () => {
  window.MemberStack?.onReady.then(async function (member) {
    const metadata = await member.getMetaData();

    if (metadata.drafts.length > 0) {
      $('.no-draft-text').hide();
      metadata.drafts.map((i: DraftMetadata) => {
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
        const updatedDraft = metadata.drafts.filter((i: DraftMetadata) => {
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
        const currentDraftData = metadata.drafts.find((i: DraftMetadata) => {
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
      });
    });
  });
};
