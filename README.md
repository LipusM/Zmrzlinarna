# Název Projektu

Krátký popis projektu.

## Obsah

- [Část 1](#část-1)
- [Část 2](#část-2)
- [Část 3](#část-3)

<div id="content-část-1">

## Část 1

Text pro Část 1.

</div>

<div id="content-část-2" style="display:none;">

## Část 2

Text pro Část 2.

</div>

<div id="content-část-3" style="display:none;">

## Část 3

Text pro Část 3.

</div>

<script>
function showContent(section) {
    var sections = ["část-1", "část-2", "část-3"];

    sections.forEach(function(s) {
        var content = document.getElementById("content-" + s);
        if (s === section) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
}
</script>
