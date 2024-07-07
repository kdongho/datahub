/**
 * NOTE: This class is auto generated by the swagger code generator program (3.0.33).
 * https://github.com/swagger-api/swagger-codegen Do not edit the class manually.
 */
package io.swagger.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.datahubproject.schema_registry.openapi.generated.ErrorMessage;
import io.datahubproject.schema_registry.openapi.generated.Mode;
import io.datahubproject.schema_registry.openapi.generated.ModeUpdateRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.io.IOException;
import java.util.Optional;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@jakarta.annotation.Generated(
    value = "io.swagger.codegen.v3.generators.java.SpringCodegen",
    date = "2022-12-20T16:52:36.517693Z[Europe/Lisbon]")
@Validated
public interface ModeApi {

  Logger log = LoggerFactory.getLogger(ModeApi.class);

  default Optional<ObjectMapper> getObjectMapper() {
    return Optional.empty();
  }

  default Optional<HttpServletRequest> getRequest() {
    return Optional.empty();
  }

  default Optional<String> getAcceptHeader() {
    return getRequest().map(r -> r.getHeader("Accept"));
  }

  @Operation(
      summary = "Delete subject mode",
      description = "Deletes the specified subject-level mode and reverts to the global default.",
      tags = {"Modes (v1)"})
  @ApiResponses(
      value = {
        @ApiResponse(
            responseCode = "200",
            description = "Operation succeeded. Returns old mode.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(implementation = Mode.class))),
        @ApiResponse(
            responseCode = "404",
            description = "Not Found. Error code 40401 indicates subject not found.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class))),
        @ApiResponse(
            responseCode = "500",
            description =
                "Internal Server Error. Error code 50001 indicates a failure in the backend data store.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class)))
      })
  @RequestMapping(
      value = "/mode/{subject}",
      produces = {
        "application/vnd.schemaregistry.v1+json",
        "application/vnd.schemaregistry+json; qs=0.9",
        "application/json; qs=0.5"
      },
      method = RequestMethod.DELETE)
  default ResponseEntity<Mode> deleteSubjectMode(
      @Parameter(
              in = ParameterIn.PATH,
              description = "Name of the subject",
              required = true,
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @PathVariable("subject")
          String subject) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(
              getObjectMapper().get().readValue("{\n  \"mode\" : \"READWRITE\"\n}", Mode.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default ModeApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(
      summary = "Get subject mode",
      description = "Retrieves the subject mode.",
      tags = {"Modes (v1)"})
  @ApiResponses(
      value = {
        @ApiResponse(
            responseCode = "200",
            description = "The subject mode.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(implementation = Mode.class))),
        @ApiResponse(
            responseCode = "404",
            description = "Not Found. Error code 40401 indicates subject not found.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class))),
        @ApiResponse(
            responseCode = "500",
            description =
                "Internal Server Error. Error code 50001 indicates a failure in the backend data store.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class)))
      })
  @RequestMapping(
      value = "/mode/{subject}",
      produces = {
        "application/vnd.schemaregistry.v1+json",
        "application/vnd.schemaregistry+json; qs=0.9",
        "application/json; qs=0.5"
      },
      method = RequestMethod.GET)
  default ResponseEntity<Mode> getMode(
      @Parameter(
              in = ParameterIn.PATH,
              description = "Name of the subject",
              required = true,
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @PathVariable("subject")
          String subject,
      @Parameter(
              in = ParameterIn.QUERY,
              description = "Whether to return the global mode if subject mode not found",
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @Valid
          @RequestParam(value = "defaultToGlobal", required = false)
          Boolean defaultToGlobal) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(
              getObjectMapper().get().readValue("{\n  \"mode\" : \"READWRITE\"\n}", Mode.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default ModeApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(
      summary = "Get global mode",
      description = "Retrieves global mode.",
      tags = {"Modes (v1)"})
  @ApiResponses(
      value = {
        @ApiResponse(
            responseCode = "200",
            description = "The global mode",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(implementation = Mode.class))),
        @ApiResponse(
            responseCode = "500",
            description = "Error code 50001 -- Error in the backend data store")
      })
  @RequestMapping(
      value = "/mode",
      produces = {
        "application/vnd.schemaregistry.v1+json",
        "application/vnd.schemaregistry+json; qs=0.9",
        "application/json; qs=0.5"
      },
      method = RequestMethod.GET)
  default ResponseEntity<Mode> getTopLevelMode() {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(
              getObjectMapper().get().readValue("{\n  \"mode\" : \"READWRITE\"\n}", Mode.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default ModeApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(
      summary = "Update subject mode",
      description =
          "Update mode for the specified subject. On success, echoes the original request back to the client.",
      tags = {"Modes (v1)"})
  @ApiResponses(
      value = {
        @ApiResponse(
            responseCode = "200",
            description = "The original request.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ModeUpdateRequest.class))),
        @ApiResponse(
            responseCode = "422",
            description =
                "Unprocessable Entity. Error code 42204 indicates an invalid mode. Error code 42205 indicates operation not permitted.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class))),
        @ApiResponse(
            responseCode = "500",
            description =
                "Internal Server Error. Error code 50001 indicates a failure in the backend data store. Error code 50003 indicates a failure forwarding the request to the primary. Error code 50004 indicates unknown leader.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class)))
      })
  @RequestMapping(
      value = "/mode/{subject}",
      produces = {
        "application/vnd.schemaregistry.v1+json",
        "application/vnd.schemaregistry+json; qs=0.9",
        "application/json; qs=0.5"
      },
      consumes = {
        "application/vnd.schemaregistry.v1+json",
        "application/vnd.schemaregistry+json",
        "application/json",
        "application/octet-stream"
      },
      method = RequestMethod.PUT)
  default ResponseEntity<ModeUpdateRequest> updateMode(
      @Parameter(
              in = ParameterIn.PATH,
              description = "Name of the subject",
              required = true,
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @PathVariable("subject")
          String subject,
      @Parameter(
              in = ParameterIn.DEFAULT,
              description = "Update Request",
              required = true,
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @Valid
          @RequestBody
          ModeUpdateRequest body,
      @Parameter(
              in = ParameterIn.QUERY,
              description =
                  "Whether to force update if setting mode to IMPORT and schemas currently exist",
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @Valid
          @RequestParam(value = "force", required = false)
          Boolean force) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(
              getObjectMapper()
                  .get()
                  .readValue("{\n  \"mode\" : \"READWRITE\"\n}", ModeUpdateRequest.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default ModeApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(
      summary = "Update global mode",
      description =
          "Update global mode. On success, echoes the original request back to the client.",
      tags = {"Modes (v1)"})
  @ApiResponses(
      value = {
        @ApiResponse(
            responseCode = "200",
            description = "The original request.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ModeUpdateRequest.class))),
        @ApiResponse(
            responseCode = "422",
            description =
                "Unprocessable Entity. Error code 42204 indicates an invalid mode. Error code 42205 indicates operation not permitted.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class))),
        @ApiResponse(
            responseCode = "500",
            description =
                "Internal Server Error. Error code 50001 indicates a failure in the backend data store. Error code 50003 indicates a failure forwarding the request to the primary. Error code 50004 indicates unknown leader.",
            content =
                @Content(
                    mediaType = "application/vnd.schemaregistry.v1+json",
                    schema =
                        @io.swagger.v3.oas.annotations.media.Schema(
                            implementation = ErrorMessage.class)))
      })
  @RequestMapping(
      value = "/mode",
      produces = {
        "application/vnd.schemaregistry.v1+json",
        "application/vnd.schemaregistry+json; qs=0.9",
        "application/json; qs=0.5"
      },
      consumes = {
        "application/vnd.schemaregistry.v1+json",
        "application/vnd.schemaregistry+json",
        "application/json",
        "application/octet-stream"
      },
      method = RequestMethod.PUT)
  default ResponseEntity<ModeUpdateRequest> updateTopLevelMode(
      @Parameter(
              in = ParameterIn.DEFAULT,
              description = "Update Request",
              required = true,
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @Valid
          @RequestBody
          ModeUpdateRequest body,
      @Parameter(
              in = ParameterIn.QUERY,
              description =
                  "Whether to force update if setting mode to IMPORT and schemas currently exist",
              schema = @io.swagger.v3.oas.annotations.media.Schema())
          @Valid
          @RequestParam(value = "force", required = false)
          Boolean force) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(
              getObjectMapper()
                  .get()
                  .readValue("{\n  \"mode\" : \"READWRITE\"\n}", ModeUpdateRequest.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default ModeApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }
}