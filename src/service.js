module.exports = ['$resource', $resource => {
  return $resource('public/phones/:phoneId.json',
  {},
  {query: {method: 'GET', params:{phoneId:'phones'}, isArray:true}});
}];
