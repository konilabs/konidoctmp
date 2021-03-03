{{ define "main" }}
    <main class="{{ delimit (.Scratch.Get "main_classes") " " }}">
        {{- if not .Params.hide_title }}
        <h1>{{ .Title }}</h1>
        {{ partial "subtitle.html" . }}
        {{ end -}}
        {{ partial "notifications.html" . }}
        {{ .Content }}
    </main>
{{ end }}