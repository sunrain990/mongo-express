/**
 * Created by kevin on 16/8/31.
 */
if(err){
    Object.keys(err.errors).forEach(function(key) {
        var message = err.errors[key].message;
        console.log('Validation error for "%s": %s', key, message);
    });
}