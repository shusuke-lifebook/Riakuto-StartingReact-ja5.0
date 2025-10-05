// カリー化前
{
  const multiply = (n, m) => n * m;
  console.log(multiply(2, 4));
}
// カリー化
{
  function withMutiple(n) {
    return (m) => n * m;
  }
  console.log(withMutiple(2)(4));
}
// アロー関数でカリー化
{
  const withMutiple = (n) => (m) => n * m;
  console.log(withMutiple(2)(4));
}
