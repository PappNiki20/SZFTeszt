QUnit.module("leptetes metódus tesztelése", function () {
  QUnit.test("1. Létezik-e a függvény?", function (assert) {
    assert.ok(leptetes, "Létezik a függvény");
  });
  QUnit.test("2. Függvény a tipusa?", function (assert) {
    assert.ok(leptetes, typeof leptetes == "function", "Létezik a függvény");
  });
  QUnit.test("3. leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(1, 2), 3);
  });
  QUnit.test("4. leptetes(1, 0)", function (assert) {
    assert.equal(leptetes(1, 0), 1);
  });
  QUnit.test("5. leptetes(1, lista.length-1)", function (assert) {
    assert.equal(leptetes(1, lista.length - 1), 0);
  });
  QUnit.test("6. leptetes(-1, 2)", function (assert) {
    assert.equal(leptetes(-1, 2), 1);
  });
  QUnit.test("7. leptetes(-1, 0)", function (assert) {
    assert.equal(leptetes(-1, 0), lista.length - 1);
  });
  QUnit.test("8. leptetes(-1, lista.length-1)", function (assert) {
    assert.equal(leptetes(-1, lista.length - 1), lista.length - 2);
  });
});

QUnit.module("osszeallit tesztelése", function () {
  let lista = ["kepek/alszik.jpg", "kepek/bocsok.jpg", "kepek/cirkusz.jpg"];
  QUnit.test("1. Létezik-e a függvény?", function (assert) {
    assert.ok(osszeallit, "Létezik a függvény");
  });
  QUnit.test("2. Függvény a tipusa?", function (assert) {
    assert.ok(
      osszeallit,
      typeof osszeallit == "function",
      "Létezik a függvény"
    );
  });
  QUnit.test("osszeallit tesztelése", function (assert) {
    assert.equal{
      osszeallit(lista),
        `<div><img src="kepek/alszik.jpg" alt=""></div><div><img src="kepek/bocsok.jpg" alt=""></div><div><img src="kepek/cirkusz.jpg" alt=""></div>`;
    }
  });
  QUnit.test("üres lista", function () {
    lista = [];
    assert.equal(osszeallit(lista), "");
  });
});
