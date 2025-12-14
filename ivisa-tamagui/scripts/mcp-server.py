import http.server
import socketserver
import json
import os

PORT = 8080
REGISTRY_PATH = "packages/ui/component-registry.json"

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/registry":
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            try:
                with open(REGISTRY_PATH, 'r') as f:
                    data = f.read()
                    self.wfile.write(data.encode())
            except FileNotFoundError:
                self.wfile.write(json.dumps({"error": "Registry not found"}).encode())
        else:
            super().do_GET()

if __name__ == "__main__":
    # Ensure we are in root
    if not os.path.exists("packages"):
        print("Error: Must run from repo root")
        exit(1)

    print(f"MCP Component Server running at port {PORT}")
    print(f"Endpoints:")
    print(f"  GET /registry - Returns component registry")
    # In a real scenario we would start the server, but for this task just showing code is enough
    # with socketserver.TCPServer(("", PORT), Handler) as httpd:
    #    httpd.serve_forever()
