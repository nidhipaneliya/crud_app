const RESPONSE_STATUS = {
      SUCCESS: "SUCCESS",
      FAILURE: "FAILURE"
  };

  const MESSAGES = {
      ITEM: {
          NOT_FOUND: "Item not found.",
          CREATE_ERROR: "Failed to create item.",
          UPDATE_ERROR: "Failed to update item.",
          DELETE_ERROR: "Failed to delete item.",
          SEARCH_ERROR: "Failed to search items.",
          FETCH_ERROR: "Failed to fetch items.",
      },
      VALIDATION: {
          INVALID_ID: "Invalid ID provided.",
          MISSING_FIELDS: "Required fields are missing.",
      },
      GENERAL: {
          SERVER_ERROR: "An unexpected error occurred.",
      },
  };
  
  
  
  module.exports = {
      RESPONSE_STATUS,
      MESSAGES
  };
  