let helpers = {
  getFormData: function ($form) {
    let unindexed_array = $form.serializeArray(),
        indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
  }
}

export default helpers;
