export default function (h, o, t, j, a, r) {
  const hjid = process.env.REACT_APP_HOT_JAR_ID;
  if (!hjid) {
    throw new Error(
      "Add 'REACT_APP_HOT_JAR_ID' in the env variable to allow hotjar collecting data"
    );
  }

  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid, hjsv: 6 };
  [a] = o.getElementsByTagName('head');
  r = o.createElement('script');
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
}
